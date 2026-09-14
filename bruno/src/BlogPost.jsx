import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import MarkdownIt from 'markdown-it';
import markdownItAttrs from 'markdown-it-attrs';
import AppNavbar from './components/AppNavbar';
import AppearanceToggle from './components/AppearanceToggle';
import AppFooter from './components/AppFooter';
import posts from './data/postsData';
import './style/BlogPost.css';

const Post = () => {
  const { slug } = useParams();

  const md = new MarkdownIt({
    html: true,
    linkify: true,
  }).use(markdownItAttrs);

  if (!slug) return;

  const postData = posts.find((p) => p.slug === slug);

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
      <main className="blog-main">
        <div className="article-grid-format">
          <div className="article-header">
            <div className="article-name">
              <h1 className="article-title">{postData.title}</h1>
              <p className="article-subheading">Subtitle Example</p>
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

export default Post;