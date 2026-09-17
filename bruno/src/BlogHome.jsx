import { useState } from 'react';
import blogposts from './data/postsData.js';
import AppNavbar from './components/AppNavbar';
import AppearanceToggle from './components/AppearanceToggle';
import AppFooter from './components/AppFooter.jsx';
import BlogCard from './BlogCard.jsx';
import Pagination from './components/Pagination.jsx';
import './style/BlogHome.css';

const BlogHome = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(4);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;

  const currentPosts = blogposts.slice(indexOfFirstPost, indexOfLastPost);

  return (
    <>
      <AppNavbar />
      <AppearanceToggle />
      <main className="blog-main">
        <h1 className="blog-home-title">Blog</h1>
        <div className="grid-container">
          {currentPosts.map((post) => (
            <BlogCard key={post.id} {...post} />
          ))}
        </div>
        <Pagination postsPerPage={postsPerPage} totalPosts={blogposts.length} setCurrentPage={setCurrentPage} currentPage={currentPage} />
      </main>
      <AppFooter />
    </>
  );
};

export default BlogHome;