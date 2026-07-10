import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import AppFooter from './AppFooter.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <section className="titlearea">
        <h1 className="website-title">Bruno Amadi</h1>
        <p className="website-subtitle" >Future Software Developer</p>
      </section>
      <section className="story">
        <div className="person-photo">
          <img src="src/assets/dices.jpg" width="700" height="500"/>
        </div>
        <div className="person-description">
          <span>Hello, my name is Bruno Amadi. I am currently 20 year's old and I am aiming to perfect my crafts in software development.</span>
        </div>
      </section>
      <section className="projects">
      </section>
      <AppFooter />
    </>
  )
}

export default App
