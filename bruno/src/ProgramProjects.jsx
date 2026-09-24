import { useState } from "react";
import AppearanceToggle from "./components/AppearanceToggle";
import AppFooter from "./components/AppFooter";
import AppNavbar from "./components/AppNavbar";
import Pagination from "./components/Pagination";
import projectposts from "./data/projectsData.js";
import ProjectCard from "./ProjectCard";
import './style/ProjectPages.css';

const ProgramProjects = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(4);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;

  const programPosts = projectposts.filter((post) => post.type === "program");

  const currentPosts = programPosts.slice(indexOfFirstPost, indexOfLastPost);

  return (
    <>
      <AppNavbar />
      <AppearanceToggle />
      <main className="project-main">
        <h1 className="project-page-title">Programs</h1>
        <div className="project-page-grid-container">
          {currentPosts.map((post) => (
            post.type === 'program' ? <ProjectCard key={post.id} {...post} /> : null
          ))}
        </div>
        <Pagination postsPerPage={postsPerPage} totalPosts={programPosts.length} setCurrentPage={setCurrentPage} currentPage={currentPage} />
      </main>
      <AppFooter />
    </>
  )
}

export default ProgramProjects;