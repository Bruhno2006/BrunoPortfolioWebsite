import AppearanceToggle from "../components/AppearanceToggle";
import AppFooter from "../components/AppFooter";
import AppNavbar from "../components/AppNavbar";
import '../style/ProjectHome.css';
import { Link } from "react-router-dom";

const ProjectHome = () => {
  return (
    <>
      <AppNavbar />
      <AppearanceToggle />
      <main className="project-home-main">
        <h1 className="top-heading project-home-title">Projects</h1>
        <div className="project-home-container">
          <Link className="program-section" to={`/projects/program`}>
              <img src="/assets/programs-logo.png" alt="Programs" />
              <p>All the programs, applications, and software I created and produced.</p>
          </Link>
          <Link className="reelhouse-section" to={`/projects/reelhouse`}>
              <img src="/assets/REELHOUSE-brand.png" alt="Reelhouse" />
              <p>All the articles I've pitched and wrote for REELHOUSE, UK's student film and TV magazine!</p>
          </Link>
        </div>
      </main>
      <AppFooter />
    </>
  )
}

export default ProjectHome;