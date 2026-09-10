import React from 'react';
import { Link } from 'react-router-dom';
import posts from './data/postsData.js';
import AppNavbar from './components/AppNavbar';
import AppearanceToggle from './components/AppearanceToggle';
import AppFooter from './components/AppFooter.jsx';
import './style/BlogHome.css'

const BlogHome = () => {
  return (
    <>
      <AppNavbar />
      <AppearanceToggle />
      <main className="blog-home-main">
        <div className="grid-container">
          {posts.map((post) => (
            <Link to={`/blog/${post.slug}`} className="blog-button" key={post.title}>
              <img src={post.image} className="no-animation" />
              <p className="blog-title">{post.title}</p>
              <p className="blog-date">{post.date}</p>
            </Link>
          ))}
        </div>
      </main>
      <AppFooter />
    </>
  );
};

export default BlogHome;