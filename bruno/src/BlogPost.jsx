import React, { useEffect, useState } from 'react';
import fm from 'front-matter';
import { useParams } from 'react-router-dom';
import MarkdownIt from 'markdown-it';
import markdownItAttrs from 'markdown-it-attrs';
import AppNavbar from './components/AppNavbar';
import AppearanceToggle from './components/AppearanceToggle';
import AppFooter from './components/AppFooter';

const Post = () => {
  const [content, setContent] = useState('');
  const [meta, setMeta] = useState({});

  const { postName } = useParams();

  const md = new MarkdownIt({
    html: true,
    linkify: true,
  }).use(markdownItAttrs);

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
        
        const htmlContent = md.render(body);
        setContent(htmlContent);
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
        <img src={meta?.frontImage} alt="bear" />
        <br />
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </main>
      <AppFooter />
    </>
  );
};

export default Post;