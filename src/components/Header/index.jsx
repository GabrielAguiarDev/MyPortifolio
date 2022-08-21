import React, { useState } from "react";
import { Link } from "react-scroll";
import { HiMenu } from "react-icons/hi"

import "./Header.css";
import "./responsive.css"

const Header = () => {

  const [menu, setMenu] = useState(true);

  function handleMenu(e) {
    e.preventDefault();
    setMenu(!menu)
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
        <HiMenu className={!menu ? "active" : ""} onClick={handleMenu} />
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
