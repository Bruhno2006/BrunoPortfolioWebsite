import Loader from "./components/Loader";
import About from "./About";
import ThemeProvider from "./components/ThemeContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BlogHome from "./BlogHome";
import BlogPost from "./BlogPost";
import ProjectHome from "./ProjectHome";
import ProjectPost from "./ProjectPost";

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Loader nextPath='/about' />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<BlogHome />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/projects" element={<ProjectHome />} />
          <Route path="/projects/:slug" element={<ProjectPost />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;