import AppearanceToggle from "./components/AppearanceToggle";
import AppFooter from "./components/AppFooter";
import AppNavbar from "./components/AppNavbar";
import './style/ProjectHome.css';
import { Link } from "react-router-dom";

const ProjectHome = () => {
  return (
    <>
      <AppNavbar />
      <AppearanceToggle />
      <main className="project-main">
        <h1 className="project-home-title">Projects</h1>
        <div className="project-home-container">
          <Link className="program-section" to={`/projects/program`}>
              <img src="src/assets/programs-logo.png" alt="Programs" />
          </Link>
          <Link className="reelhouse-section" to={`/projects/reelhouse`}>
              <img src="src/assets/REELHOUSE-brand.png" alt="Reelhouse" />
          </Link>
        </div>
      </main>
      <AppFooter />
    </>
  )
}

export default ProjectHome;