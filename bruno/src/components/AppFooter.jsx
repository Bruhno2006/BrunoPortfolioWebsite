import './style/AppFooter.css';
import { Link, Mail, Phone } from 'lucide-react';
import { SiGithub, SiInstagram } from '@icons-pack/react-simple-icons';

function AppFooter() {
  return (
    <footer>
      <section className="footer-row">
        <li className="footer-col">
          <h3>Contact Me!</h3>
          {[
            { icon: <Mail size={30} color="var(--link-colour)" />, text: "brunoamadibusiness@gmail.com", link: "mailto:brunoamadibusiness@gmail.com" },
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
        <li>
          <h3>View My Projects</h3>
          {[
            { icon: <SiGithub size={30} color="var(--link-colour)" />, text: "GitHub", link: "https://github.com/Bruhno2006" },
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
        <li>
          <h3>Current Projects</h3>
        </li>
      </section>
    </footer>
  );
}

export default AppFooter;