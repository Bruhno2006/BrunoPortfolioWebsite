import { useState } from "react";
import AppearanceToggle from "./components/AppearanceToggle";
import AppFooter from "./components/AppFooter";
import AppNavbar from "./components/AppNavbar";
import Pagination from "./components/Pagination";
import projectposts from "./data/projectsData";
import ProjectCard from "./ProjectCard";
import './style/ProjectHome.css';

const ProjectHome = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(6);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;

  const currentPosts = projectposts.slice(indexOfFirstPost, indexOfLastPost);d

  return (
    <>
      <AppNavbar />
      <AppearanceToggle />
      <main className="project-main">
        <h1 className="project-home-title">Projects</h1>
        <div className="grid-container">
          <div>
            <p>Programming Projects</p>
          </div>
          <div>
            <p>Reelhouse Articles</p>
          </div>
          {/* {currentPosts.map((post) => (
            <ProjectCard key={post.id} {...post} />
          ))} */}
        </div>
        <Pagination postsPerPage={postsPerPage} totalPosts={projectposts.length} setCurrentPage={setCurrentPage} currentPage={currentPage} />
      </main>
      <AppFooter />
    </>
  )
}

export default ProjectHome;