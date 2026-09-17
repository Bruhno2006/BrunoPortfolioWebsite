import { useParams } from 'react-router-dom';
import MarkdownIt from 'markdown-it';
import AppNavbar from './components/AppNavbar';
import AppearanceToggle from './components/AppearanceToggle';
import AppFooter from './components/AppFooter';
import blogposts from './data/postsData';
import { full as emoji, full } from 'markdown-it-emoji';
import './style/BlogPost.css';
import './style/custom-post-style.css';

const BlogPost = () => {
  const { slug } = useParams();

  const md = new MarkdownIt({
    html: true,
    linkify: true
  }).use(emoji, full);

  if (!slug) return;

  const postData = blogposts.find((p) => p.slug === slug);

  if (!postData) {
    return (
      <div className="error-message">Post not found</div>
    );
  }

  const postBody = md.render(postData.content);

  return (
    <>
      <AppNavbar />
      <AppearanceToggle />
      <main className="blog-main content-rise-below">
        <div className="article-grid-format">
          <div className="article-header">
            <div className="article-name">
              <h1 className="article-title">{postData.title}</h1>
              <p className="article-subheading">{postData.subtitle}</p>
            </div>
            <p>{postData.date}</p>
          </div>
          <div className="article-left">
          </div>
          <article className="article-content no-animation">
            <img src={postData.image} alt={postData.title} />
            <br />
            <div dangerouslySetInnerHTML={{ __html: postBody }} />
          </article>
          <div className="article-right">
          </div>
        </div>
      </main>
      <AppFooter />
    </>
  );
};

export default BlogPost;