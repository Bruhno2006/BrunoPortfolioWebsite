import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import MarkdownIt from 'markdown-it';
import markdownItAttrs from 'markdown-it-attrs';
import AppNavbar from './components/AppNavbar';
import AppearanceToggle from './components/AppearanceToggle';
import AppFooter from './components/AppFooter';
import posts from './data/postsData';

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
      <main>
        <h1>{postData.title}</h1>
        <p>{postData.date}</p>
        <img src={postData.image} alt={postData.title} />
        <br />
        <div dangerouslySetInnerHTML={{ __html: postBody }} />
      </main>
      <AppFooter />
    </>
  );
};

export default Post;