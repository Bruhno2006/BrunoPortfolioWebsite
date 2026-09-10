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
    { label: "About Me", to: "/about" },
    { label: "Blog", to: "/blog" },
    { label: "Projects", to: "/projects" },
  ];

  return (
    <>
      <div className="top">
        <nav className="top-menu" role="navigation">
          <h1 className="website-title">Bruno Amadi</h1>
          <ul className="nav-links">
            {NAV_LINKS.map((link) => {
              return (
                <Link key={link.to} to={link.to}>
                  {link.label}
                </Link>
              );
            })}
          </ul>
        </nav>
        <nav className="hamburger-menu" role="navigation">
          <h1 className="website-title">Bruno Amadi</h1>
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
      </div>
    </>
  );
}

export default AppNavbar;