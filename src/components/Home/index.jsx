import React from 'react'
import { BsGithub, BsLinkedin } from 'react-icons/bs'
import { FiChevronsDown } from 'react-icons/fi'

import './Home.css'

const Home = () => {
  return (
    <section className='home'>
      <div className='home_description'>
        <h1>Olá, eu sou</h1>
        <div className="myName">Gabriel Aguiar</div>
        <h2>Desenvolvedor Fullstack</h2>
        <div className='social_link'>
          <a href="https://www.linkedin.com/in/gabriel-aguiar-dev/" target="_blank"><BsLinkedin />Linkedin</a>
          <a href="https://github.com/GabrielAguiarDev" target="_blank"><BsGithub />Github</a>
        </div>
      </div>
      <div className='home_img'>
        <img src={process.env.PUBLIC_URL + "/developer.gif"} alt="developer"/>
      </div>
      <div className='home_scroll'>
        <a href="#sobre">
          <p>scroll down</p>
          <FiChevronsDown />
        </a>
      </div>
    </section>
  )
}

export default Home