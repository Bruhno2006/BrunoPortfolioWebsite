import { useState } from "react";
import AppearanceToggle from "./components/AppearanceToggle";
import AppFooter from "./components/AppFooter";
import AppNavbar from "./components/AppNavbar";
import Pagination from "./components/Pagination";
import projectposts from "./data/projectsData.js";
import ProjectCard from "./ProjectCard";
import './style/ProjectPages.css';

const ReelhouseProjects = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(6);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;

  const reelhousePosts = projectposts.filter((post) => post.type === "reelhouse");

  const currentPosts = reelhousePosts.slice(indexOfFirstPost, indexOfLastPost);

  return (
    <>
      <AppNavbar />
      <AppearanceToggle />
      <main className="project-main">
        <h1 className="project-page-title">Reelhouse</h1>
        <div className="project-page-grid-container">
          {currentPosts.map((post) => (
            <ProjectCard key={post.id} {...post} />
          ))}
        </div>
        <Pagination postsPerPage={postsPerPage} totalPosts={reelhousePosts.length} setCurrentPage={setCurrentPage} currentPage={currentPage} />
      </main>
      <AppFooter />
    </>
  )
}

export default ReelhouseProjects;