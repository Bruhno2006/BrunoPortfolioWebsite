import React from 'react';
import { Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';

function BlogCard({ title, date, image, slug, intro, content}) {
  return (
    <Link to={`/blog/${slug}`} className="blog-card">
      {image && <img src={image} alt={title} className="no-animation" />}
      <p className="blog-title">{title}</p>
      <p className="blog-date">{date}</p>
      <p className="blog-description">{intro}</p>
    </Link>
  );
}

export default BlogCard;