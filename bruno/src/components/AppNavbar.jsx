import React from "react";
import './style/AppNavbar.css';

function AppNavbar() {
  const NAV_LINKS = [
    { label: "Introduction", to: "#introduction" },
    { label: "About Me", to: "#about-me" },    
    { label: "Education", to: "#education" },
    { label: "Achievements", to: "#achievements" },
    { label: "Contact Information", to: "#contacts" },
    { label: "Projects", to: "#projects" },
  ];

  return (
    <div className="top">
      <section className="titlearea">
        <h1 className="website-title">Bruno Amadi</h1>
        <p className="website-subtitle">Future Software Developer</p>
      </section>
      <nav className="navbar" role="navigation">
        <div className="navbar-center">
          <ul className="nav-links">
            {NAV_LINKS.map((link, idx) => {
              return (
                <a key={link.to} href={link.to} style={{ '--rand': Math.random() }}>
                  {link.label}
                </a>
              );
            })}
          </ul>
        </div>
      </nav>
      <nav className="hamburger-menu" role="navigation">
        <ul className="hamburger-nav-links">
          {NAV_LINKS.map((link) => {
            return (
              <a key={link.to} href={link.to}>
                {link.label}
              </a>
            );
          })}
        </ul>
      </nav>
      <div className="black-square" />
    </div>
  );
}

export default AppNavbar;