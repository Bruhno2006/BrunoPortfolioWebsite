import React from 'react';
import { Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';

function BlogCard({ title, date, image, slug, content }) {
  return (
    <Link to={`/blog/${slug}`} className="blog-button">
      {image && <img src={image} alt={title} className="no-animation" />}
      <p className="blog-title">{title}</p>
      <p className="blog-date">{date}</p>
      <div className="blog-excerpt" dangerouslySetInnerHTML={{ __html: content }} />
    </Link>
  );
}

export default BlogCard;