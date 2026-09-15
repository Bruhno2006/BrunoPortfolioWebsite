import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import posts from './data/postsData.js';
import AppNavbar from './components/AppNavbar';
import AppearanceToggle from './components/AppearanceToggle';
import AppFooter from './components/AppFooter.jsx';
import './style/BlogHome.css'
import BlogCard from './BlogCard.jsx';
import Pagination from './components/Pagination.jsx'

const BlogHome = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(4);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;

  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  return (
    <>
      <AppNavbar />
      <AppearanceToggle />
      <main className="blog-main">
        <div className="grid-container">
          {currentPosts.map((post) => (
            <BlogCard key={post.id} {...post} />
          ))}
        </div>
        <Pagination postsPerPage={postsPerPage} totalPosts={posts.length} setCurrentPage={setCurrentPage} currentPage={currentPage} />
      </main>
      <AppFooter />
    </>
  );
};

export default BlogHome;