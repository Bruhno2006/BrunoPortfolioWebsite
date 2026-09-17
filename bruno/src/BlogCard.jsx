import { Link } from 'react-router-dom';

function BlogCard({ title, date, image, slug, intro }) {
  return (
    <Link to={`/blog/${slug}`} className="blog-card">
      {image && <img src={image} alt={title} className="no-animation" />}
      <p className="card-title">{title}</p>
      <p className="card-date">{date}</p>
      <p className="card-description">{intro}</p>
    </Link>
  );
}

export default BlogCard;