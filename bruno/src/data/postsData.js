import fm from 'front-matter';

const markdownFiles = import.meta.glob('/src/posts/*.md', { query: '?raw', eager: true });

const posts = Object.keys(markdownFiles).map((filePath) => {
  const rawString = markdownFiles[filePath].default;

  const slug = filePath.split('/').pop().replace('.md', '');

  const parsed = fm(rawString);

  const data = parsed.attributes;
  const content = parsed.body

  return {
    id: slug,
    slug: data.slug || slug,
    title: data.title || "Untitled Blog",
    date: data.date || '',
    image: data.image || '',
    intro: data.intro || '',
    subtitle: data.subtitle || '',
    content: content,
  };
}).sort((a, b) => new Date(b.date) - new Date(a.date));

export default posts;