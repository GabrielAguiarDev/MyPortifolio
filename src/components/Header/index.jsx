import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";

import "./Header.css";

const Header = () => {
  function handleLink(e) {
    e.preventDefault();
    console.log();
  }

  return (
    <header>
      <nav>
        <p>
        <Link
          to="home"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          ‹GA/›
        </Link>
        </p>
        <ul>
          <Link
            activeClass="active"
            to="home"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            <li>Home</li>
          </Link>
          <Link
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            <li>Sobre</li>
          </Link>
          <Link
            activeClass="active"
            to="experience"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            >
            <li>Experiência</li>
          </Link>
          <Link
            activeClass="active"
            to="projects"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            <li>Projetos</li>
          </Link>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
