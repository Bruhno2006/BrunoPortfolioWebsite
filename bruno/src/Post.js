import React from 'react';
import ReactMarkdown from 'react-markdown';
import { useEffect, useState } from 'react';
import fs from 'fs';
import path from 'path';
import grayMatter from 'gray-matter';
import { data } from 'react-router-dom';

const Post = ({ postName }) => {
  const [content, setContent] = useState('');
  const [meta, setMeta] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadPost() {
      try {
        setLoading(true);

        const fileContent = await import(`./posts/${postName}.md?raw`).then(
          (module) => module.default
        );

        const { data, content: body} = grayMatter(fileContent);

        setMeta(data);
        setContent(body);
      } catch (error) {
        console.error(`Could not load post: ${postName}`, error);
      } finally {
        setLoading(false);
      }
    }

    if (postName) {
      loadPost();
    }
  }, [postName]);

  
  return (
    <article>
      <h1>{data.title}</h1>
      <p>{data.date}</p>
      <ReactMarkdown>{content}</ReactMarkdown>
    </article>
  );
};

export default Post;