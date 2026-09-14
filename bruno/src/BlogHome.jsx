import React from 'react';
import { Link } from 'react-router-dom';
import posts from './data/postsData.js';
import AppNavbar from './components/AppNavbar';
import AppearanceToggle from './components/AppearanceToggle';
import AppFooter from './components/AppFooter.jsx';
import './style/BlogHome.css'
import BlogCard from './BlogCard.jsx';

const BlogHome = () => {
  return (
    <>
      <AppNavbar />
      <AppearanceToggle />
      <main className="blog-main">
        <div className="grid-container">
          {posts.map((post) => (
            <BlogCard key={post.id} {...post} />
          ))}
        </div>
      </main>
      <AppFooter />
    </>
  );
};

export default BlogHome;