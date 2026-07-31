import { useState } from 'react';
import { GitBranchIcon, Heart, Mail, Phone } from 'lucide-react';
import './style/App.css';
import AppFooter from './components/AppFooter.jsx';
import ProjectSlider from './components/ProjectSlider.jsx';
import { slides } from "./data/carouselData.json";
import AppNavbar from './components/AppNavbar.jsx';
import EducationTable from './components/EducationTable.jsx';

function App() {
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(query);
  };

  function windowSize() {
    var root = document.querySelector(':root');

    root.style.setProperty('--max_width', window.innerWidth + "px");
    root.style.setProperty('--max_height', window.innerHeight + "px");
  }

  windowSize();

  return (
    <>
      <AppNavbar />
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
        <section id="achievements">
          <div className="achievements-content">
            <h2 className="achievements-header">Achievements</h2>
            <p className="acheievements-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
        </section>
        <section className="text-in-center" id="contacts">
          <div className="contacts-content">
            <h2 className="contacts-header">Contact Information</h2>
            <p className="contacts-description">Feeling interested? Either contact me or look into my other socials!</p>
            <li className="contact-list">
              {[
                { icon: <Mail size={30} stroke="white" />, text: "brunoamadibusiness@gmail.com", link: "mailto:brunoamadibusiness@gmail.com" },
                { icon: <Phone size={30} stroke="white" />, text: "(+44) 7400199297", link: "tel:+447400199297" },
                { icon: <GitBranchIcon size={30} stroke="white" />, text: "GitHub", link: "https://github.com/Bruhno2006" },
                { icon: <Heart size={30} stroke="white" />, text: "Instagram", link: "https://www.instagram.com/brunkus7767/" },
              ].map(({ icon, text, link }, i) => {
                return (
                  <ul key={i} className="contact-link">
                    <span className="contact-link-icon">{icon}</span>
                    <span className="contact-link-name"><a href={link} target='_blank'>{text}</a></span>
                  </ul>
                );
              })}
            </li>
          </div>
        </section>
        <section id="projects">
          <div className="projects-content">
            <h2 className="projects-header">Current Projects</h2>
            <ProjectSlider data={slides} />
          </div>
        </section>
      </div>
      <AppFooter />
    </>
  )
}

export default App
