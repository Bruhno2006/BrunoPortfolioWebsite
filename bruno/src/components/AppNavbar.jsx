import React from "react";
import './style/AppNavbar.css';

function AppNavbar() {
  const NAV_LINKS = [
    { label: "Introduction", to: "#introduction" },
    { label: "About Me", to: "#about-me" },
    { label: "Projects", to: "#projects" },
    { label: "Contact Information", to: "#contact-information" },
    { label: "Education", to: "#education" },
    { label: "Achievements", to: "#achievements" }
  ];

  return (
    <>
      <div className="black-square" />
      <section className="titlearea">
        <h1 className="website-title">Bruno Amadi</h1>
        <p className="website-subtitle">Future Software Developer</p>
      </section>
      <nav className="navbar">
        <div className="navbar-center">
          <ul className="nav-links">
            {NAV_LINKS.map((link) => {
              return (
                <a key={link.to} href={link.to} className={`hidden sm:flex ${location.pathname === link.to ? "font-bold" : "font-normal"}`}>
                  {link.label}
                </a>
              );
            })}
          </ul>
        </div>
      </nav>
    </>
  );
}

export default AppNavbar;