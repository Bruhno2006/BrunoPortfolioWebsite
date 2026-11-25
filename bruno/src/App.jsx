import ThemeProvider from "./components/ThemeContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Loader from "./components/Loader";
import About from "./pages/About";
import BlogHome from "./pages/BlogHome";
import BlogPost from "./pages/BlogPost";
import ProjectHome from "./pages/ProjectHome";
import ProjectPost from "./pages/ProjectPost";
import ReelhouseProjects from "./pages/ReelhouseProjects";
import ProgramProjects from "./pages/ProgramProjects";
import Home from "./pages/Home";
import ErrorPage from "./pages/ErrorPage";

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<ErrorPage />} />
          <Route path="/" element={<Loader nextPath='/home' />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<BlogHome />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/projects" element={<ProjectHome />} />
          <Route path="/projects/program" element={<ProgramProjects />} />
          <Route path="/projects/program/:slug" element={<ProjectPost/>} />
          <Route path="/projects/reelhouse" element={<ReelhouseProjects />} />
          <Route path="/projects/reelhouse/:slug" element={<ProjectPost />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;