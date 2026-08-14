import { useEffect, useState } from 'react';
import { GitBranchIcon, Heart, Link, Mail, Phone } from 'lucide-react';
import './style/App.css';
import Loader from './components/Loader.jsx';
import ProjectSlider from './components/ProjectSlider.jsx';
import { slides } from "./data/projectData.json";
import AppNavbar from './components/AppNavbar.jsx';
import EducationTable from './components/EducationTable.jsx';
import { SiGithub, SiInstagram } from '@icons-pack/react-simple-icons';
import AppearanceToggle from './components/AppearanceToggle.jsx';

function App() {
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(query);
  };

  useEffect(() => {
    setTimeout(() => setLoading(false), 3300)
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
  } else {
    return (
      <>
        <AppNavbar />
        <AppearanceToggle />
        <div className="main-content">
          <section className="image-with-text" id='introduction'>
            <div className="introduction-photo">
              <img src="https://picsum.photos/700/500?random=1" />
            </div>
            <div className="introduction-content">
              <h2 className="introduction-header">Introduction</h2>
              <p className="introduction-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
          </section>
          <section className="image-with-text-reverse" id='about-me'>
            <div className="about-me-photo">
              <img src="https://picsum.photos/700/500?random=2" />
            </div>
            <div className="about-me-content">
              <h2 className="about-me-header">About Me</h2>
              <p className="about-me-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
          </section>
          <section id="education">
            <div className="education-content">
              <h2 className="education-header">Education</h2>
              <EducationTable />
            </div>
          </section>
          <section id="projects-and-achievements">
            <div className="projects-content">
              <h2 className="projects-header">Projects and Achievements</h2>
              <ProjectSlider data={slides} />
            </div>
          </section>
          <section className="text-in-center" id="contacts">
            <div className="contacts-content">
              <h2 className="contacts-header">Contact Information</h2>
              <p className="contacts-description">Feeling interested? Either contact me or look into my other socials!</p>
              <li className="contact-list">
                {[
                  { icon: <Mail size={30} color="var(--link-colour)" />, text: "brunoamadibusiness@gmail.com", link: "mailto:brunoamadibusiness@gmail.com" },
                  { icon: <Phone size={30} color="var(--link-colour)" />, text: "(+44) 7400199297", link: "tel:+447400199297" },
                  { icon: <SiGithub size={30} color="var(--link-colour)" />, text: "GitHub", link: "https://github.com/Bruhno2006" },
                  { icon: <SiInstagram size={30} color="var(--link-colour)" />, text: "Instagram", link: "https://www.instagram.com/brunkus7767/" },
                  { icon: <Link size={30} color="var(--link-colour)" />, text: "LinkedIn", link: "https://www.linkedin.com/in/bruno-amadi/" },
                ].map(({ icon, text, link }, i) => {
                  return (
                    <a key={i} href={link} target='_blank' className="contact-link">
                      <ul>
                        <span className="contact-link-icon">{icon}</span>
                        <span className="contact-link-name">{text}</span>
                      </ul>
                    </a>
                  );
                })}
              </li>
            </div>
          </section>
        </div>
      </>
    )
  }
}

export default App;
