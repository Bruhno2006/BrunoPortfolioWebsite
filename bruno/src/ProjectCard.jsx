import { Link } from 'react-router-dom';

function ProjectCard({ title, date, image, slug, intro }) {
  return (
    <Link to={`/projects/${slug}`} className="project-card">
      {image && <img src={image} alt={title} className="no-animation" />}
      <p className="card-title">{title}</p>
      <p className="card-date">{date}</p>
      <p className="card-description">{intro}</p>
    </Link>
  );
}

export default ProjectCard;