import AppFooter from "./components/AppFooter";
import AppNavbar from "./components/AppNavbar";
import AppearanceToggle from "./components/AppearanceToggle";

function Projects() {
  return (
    <>
      <AppNavbar />
      <AppearanceToggle />
      <main>
        <h1>Projects</h1>
        <section className="image-with-text" id="projects">
          <p className="description">
            On this page, there are a list of projects that I made across multiple years. Some highly developed, others with the opposite.<br /><br />

            Either way, I'm proud of them anyways.
          </p>
        </section>
      </main>
      <AppFooter />
    </>
  );
}

export default Projects;