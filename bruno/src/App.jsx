import Loader from "./components/Loader";
import About from "./About";
import Projects from "./Projects";
import ThemeProvider from "./components/ThemeContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BlogHome from "./BlogHome";
import Post from "./BlogPost";

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Loader nextPath='/about' />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<BlogHome />} />
          <Route path="/blog/:postName" element={<Post />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;