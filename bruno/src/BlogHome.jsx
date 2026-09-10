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
      <main>
        <div className="grid-container">
          {posts.map((post) => (
            <Link to={`/blog/${post.slug}`} className="blog-button">
              <img src={post.image} className="no-animation" />
              <h3>{post.title}</h3>
            </Link>
          ))}
        </div>
      </main>
      <AppFooter />
    </>
  );
};

export default BlogHome;