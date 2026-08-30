import React, { useState } from "react";
import './style/AppNavbar.css';
import { Menu } from 'lucide-react';
import { Link } from "react-router-dom";

function AppNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prevState) => !prevState);
  };

  const NAV_LINKS = [
    { label: "About", to: "/" },
    { label: "Blog", to: "/blog" },
    { label: "Projects", to: "/projects" },
  ];

  return (
    <div className="top">
      <section className="titlearea">
        <h1 className="website-title">Bruno Amadi</h1>
        <p className="website-subtitle">The Greatest Software Engineer that has ever lived!</p>
      </section>
      <nav className="navbar" role="navigation">
        <div className="navbar-center">
          <ul className="nav-links">
            {NAV_LINKS.map((link) => {
              return (
                <Link to={link.to} style={{ '--rand': Math.random() }}>
                  {link.label}
                </Link>
              );
            })}
          </ul>
        </div>
      </nav>
      <nav className="hamburger-menu" role="navigation">
        <ul className="hamburger-nav-links" style={{ display: isOpen ? 'flex' : 'none' }}>
          {NAV_LINKS.map((link) => {
            return (
              <Link key={link.to} to={link.to}>
                {link.label}
              </Link>
            );
          })}
        </ul>
      </nav>
      <a className="hamburger-icon" onClick={toggleMenu}>
        <Menu size="45px" stroke="var(--text-colour)" />
      </a>
      <div className="black-square" />
    </div>
  );
}

export default AppNavbar;