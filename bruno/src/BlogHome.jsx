import React from 'react';
import { Link } from 'react-router-dom';
import posts from './data/postsData.js';
import AppNavbar from './components/AppNavbar';
import AppearanceToggle from './components/AppearanceToggle';
import AppFooter from './components/AppFooter.jsx';

const BlogHome = () => {
  return (
    <>
      <AppNavbar />
      <AppearanceToggle />
      <main>
        <h1>My Blog</h1>
        <ul>
          {posts.map((post) => (
            <li key={post.slug}>
              <Link to={`/blog/${post.slug}`}>{post.title}</Link>
            </li>
          ))}
        </ul>
      </main>
      <AppFooter />
    </>
  );
};

export default BlogHome;