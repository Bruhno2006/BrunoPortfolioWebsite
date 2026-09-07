import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import fm from 'front-matter';
import { useParams } from 'react-router-dom';
import AppNavbar from './components/AppNavbar';
import AppearanceToggle from './components/AppearanceToggle';
import AppFooter from './components/AppFooter';

const Post = () => {
  const [content, setContent] = useState('');
  const [meta, setMeta] = useState({});

  const { postName } = useParams();

  useEffect(() => {
    if (!postName) return;

    fetch(`/posts/${postName}.md`)
      .then((res) => {
        const contentType = res.headers.get('content-type');
        if (!res.ok || (contentType && contentType.includes('text/html'))) {
          throw new Error(`Post file not found: /posts/${postName}.md`);
        }
        return res.text();
      })
      .then((fileContent) => {
        const { attributes, body } = fm(fileContent);
        setMeta(attributes || {});
        setContent(body);
      })
      .catch((err) => console.error(err));
  }, [postName]);

  return (
    <>
      <AppNavbar />
      <AppearanceToggle />
      <main>
        <h1>{meta?.title}</h1>
        <p>{meta?.date}</p>
        <br />
        <ReactMarkdown>{content}</ReactMarkdown>
      </main>
      <AppFooter />
    </>
  );
};

export default Post;