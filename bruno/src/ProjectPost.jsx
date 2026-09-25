import { useParams } from 'react-router-dom';
import MarkdownIt from 'markdown-it';
import markdownItAttrs from 'markdown-it-attrs';
import AppNavbar from "./components/AppNavbar";
import AppearanceToggle from "./components/AppearanceToggle";
import AppFooter from "./components/AppFooter";
import projectposts from "./data/projectsData";
import { full as emoji, full } from 'markdown-it-emoji';
import './style/ProjectPost.css';
import './style/custom-post-style.css';

const ProjectPost = () => {
  const { slug } = useParams();

  const md = new MarkdownIt({
    html: true,
    linkify: true
  }).use(emoji).use(markdownItAttrs);

  if (!slug) return null;

  const projectData = projectposts.find((p) => p.slug === slug);

  if (!projectData) {
    return (
      <div className="error-message"></div>
    );
  }

  const projectBody = md.render(projectData.content);

  return (
    <>
      <AppNavbar />
      <AppearanceToggle />
      <main className="project-main content-rise-below">
        <div className="project-grid-format">
          <div className="project-header">
            <div className="project-name">
              <h1 className="project-title">{projectData.title}</h1>
              <p className="project-subheading">{projectData.subtitle}</p>
            </div>
            <p>{projectData.date}</p>
          </div>
          <div className="project-left">
          </div>
          <article className="project-content no-animation">
            <img src={projectData.image} alt={projectData.title} />
            <br />
            <div dangerouslySetInnerHTML={{ __html: projectBody }} />
          </article>
          <div className="project-right">
          </div>
        </div>
      </main>
      <AppFooter />
    </>
  )
}

export default ProjectPost;