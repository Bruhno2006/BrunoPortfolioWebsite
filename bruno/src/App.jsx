import { useState } from 'react'
import './style/App.css'
import AppFooter from './components/AppFooter.jsx'
import ProjectSlider from './components/ProjectSlider.jsx'
import { slides } from "./data/carouselData.json"
import AppNavbar from './components/AppNavbar.jsx'

function App() {
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(query);
  };

  return (
    <>
      <AppNavbar/>
      <div className="main-content">
        <section className="image-with-text" id='introduction'>
          <div className="introduction-photo">
            <img src="https://picsum.photos/700/500?random=1"/>
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
        <section id="projects">
          <h2 className="projects-header">Current Projects</h2>
          <ProjectSlider data={slides}/>
        </section>
      </div>
      <AppFooter />
    </>
  )
}

export default App
