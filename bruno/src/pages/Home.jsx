import AppNavbar from '../components/AppNavbar.jsx';
import AppearanceToggle from '../components/AppearanceToggle.jsx';
import { Link } from 'react-router-dom';
import '../style/Home.css';
import EducationTable from '../components/EducationTable.jsx';
import { ScrollReveal } from '../components/MotionBehaviour.jsx';

export default function Home() {

  return (
    <>
      <AppNavbar />
      <AppearanceToggle />
      <main className="home-page-main" style={{ overflowX: "hidden" }}>
        {/* Replace home-page-opener with a custom SVG logo*/}
        <ScrollReveal variant='rise-below'>
          <div className='home-page-opener'>
            <h1>Hellow Fellows!</h1>
            <p>The name is Bruno! I aim to please everyone with my projects such as software, websites, and games!</p>
          </div>
        </ScrollReveal>
        {/* Inlcude image or gallery below here */ }
        <ScrollReveal variant='shift-left'>
          <section className="about">
            <h2 className="home-page-section-title">So who the hell is this?!</h2>
            <div className="home-page-paragraph">
              <p>I am currently a successful university student with programming and software engineering experience.
                I aim to become a industry-level software engineer and collaborate with well known companies with various projects
                and products. Before university, I've been experimenting and equipping programming languages including Python,
                HTML, CSS, JavaScript, and even GDScript.

                With these tools, I created personal websites, programs, and mini games for mine and other's entertainment.
              </p>
              <p>Do you want to learn more about me? Visit <Link to={"/about"}>About Me</Link>!</p>
            </div>
          </section>
        </ScrollReveal>
        <ScrollReveal variant='shift-right'>
          <section className="education">
            <h2 className="home-page-section-title">Education Journey</h2>
            <div className="home-page-paragraph">
              <p>While gaining new experience is important for my software engineering journey, having an education is greatly necessary as well!
                I try to ensure that I claim the highest grades to the best of my abilities. So, if I were to slip up, I will come back stronger!

                You can see my relevant educational achievements shown below.
              </p>
              <EducationTable />
            </div>
          </section>
        </ScrollReveal>
        <ScrollReveal variant='shift-left'>
          <section className="projects">
            <h2 className="home-page-section-title">Personal Project Collection</h2>
            <div className="home-page-paragraph">
              <p>Creating my own personal projects showcases my abilities in creating various applications and programs; by myself or with others!
                Although, not all my projects are software engineering related as others are side hobbies that help diversify my workload while still
                being beneficial to my independent progress.

                Below is a list of recent projects that I have worked on, with more hopefully in the future!
              </p>
              <p>To get a full look into my projects, visit <Link to={"/projects"}>Projects</Link>!</p>
            </div>
          </section>
        </ScrollReveal>
        <ScrollReveal variant='shift-right'>
          <section className="blog">
            <h2 className="home-page-section-title">Blogging Page</h2>
            <div className="home-page-paragraph">
              <p>You want to know more about me... personally!? Get me a drink first ;)</p>
              <p>But seriously, I am planning on updating this website regularly with my daily life, entertaining rants, and behind the scene updates on
                future projects.
              </p>
              <p>You interested? If you are, visit <Link to={"/blog"}>Blog</Link>!</p>
            </div>
          </section>
        </ScrollReveal>
      </main>
    </>
  )
};

