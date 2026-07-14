import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import AppFooter from './AppFooter.jsx'
import AppNavbar from './AppNavbar.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <AppNavbar />
      <div className="black-square" />
      <section className="titlearea">
        <h1 className="website-title">Bruno Amadi</h1>
        <p className="website-subtitle" >Future Software Developer</p>
      </section>
      <div className="main-content">
        <section className="image-with-text" id='introduction'>
          <div className="introduction-photo">
            <img src="src/assets/dices.jpg" width="700" height="500" />
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
        <section className="image-with-text-reverse" id='about-us'>
          <div className="about-me-photo">
            <img src="src/assets/silly-people.jpg" width="700" height="500" />
          </div>
          <div className="about-me-content">
            <h2 className="about-me-header">About Me</h2>
            <p className="about-me-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
        </section>
        <section className="projects">
        </section>
      </div>
      <AppFooter />
    </>
  )
}

export default App
