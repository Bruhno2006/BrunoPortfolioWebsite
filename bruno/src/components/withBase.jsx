const base = import.meta.env.BASE_URL;

const withBase = (path) => {
  if (!path) return "";
  if (path.startsWith("http") || path.startsWith("data:")) return path;
  return `${base}${path.replace(/^\//, "")}`;
};

export default withBase;