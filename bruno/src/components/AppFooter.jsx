import './style/AppFooter.css';
import { Link, Mail, Phone } from 'lucide-react';
import { SiGithub, SiInstagram } from '@icons-pack/react-simple-icons';

function AppFooter() {
  return (
    <div className="bottom">
      <section className="footer-layout">
        <li className="list">
          <h3>Contact Me!</h3>
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
        <li className="list">
          <h3>Current Projects</h3>
        </li>
        <li className="list">
          <h3>Popular Stuff I Made</h3>
        </li>
      </section>
    </div>
  );
}

export default AppFooter;