import { useEffect, useState } from 'react';
import './style/App.css';
import Loader from './components/Loader.jsx';
import ProjectSlider from './components/ProjectSlider.jsx';
import AppNavbar from './components/AppNavbar.jsx';
import EducationTable from './components/EducationTable.jsx';
import AppearanceToggle from './components/AppearanceToggle.jsx';
import { slides } from "./data/projectData.json";
import AppFooter from './components/AppFooter.jsx';

function App() {
  const date = new Date().getFullYear();

  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(query);
  };

  useEffect(() => {
    setTimeout(() => setLoading(false), 5000)
  }, []);

  function windowSize() {
    var root = document.querySelector(':root');

    root.style.setProperty('--max_width', window.innerWidth + "px");
    root.style.setProperty('--max_height', window.innerHeight + "px");
  }

  function resetHistory() {
    const cleanUrl = () => {
      if (window.location.hash) {
        history.replaceState(null, "", window.location.pathname + window.location.search);
      }
    };

    cleanUrl();

    window.addEventListener('hashchange', cleanUrl);
  }

  windowSize();
  resetHistory();

  if (loading) {
    return (
      <Loader />
    );
  }

  return (
    <>
      <AppNavbar />
      <AppearanceToggle />
      <div className="main-content">
        <section className="image-with-text" id="about-me">
          <div>
            {/* <img src="https://picsum.photos/1700/200?random=1" /> */}
          </div>
          <p className="description">
            My name is Bruno Amadi. I am a {date - 2006} year old who's striving on becoming a great software engineer that is able to create websites, software, and
            programs.<br /><br />
            Originally a side-project, I have made my website not only as a portfolio, but to document my progress in my software engineering journey and list all my past and
            upcoming projects. These projects range from functional software, viewable websites, playable games, and external fun side-projects and hobbies.<br /><br />

            It would be like a large <strong>Bruno</strong> archive!!!<br /><br />

            <strong><em>SO AWESOME!</em></strong>
          </p>
        </section>
        <section id="education">
          <EducationTable />
        </section>
        <section id="projects-and-achievements">
          <ProjectSlider data={slides} />
        </section>
        <section id="footer">
          <AppFooter />
        </section>
      </div>
    </>
  );
}

export default App;
