import React from 'react'

import './Header.css'

const Header = () => {
  return (
    <header>
      <nav>
        <p>
          <a href="#Home">‹GA/›</a>
        </p>
        <ul>
          <a href="#Home"><li className='active'>Home</li></a>
          <a href="#Sobre"><li>Sobre</li></a>
          <a href="#Experiência"><li>Experiência</li></a>
          <a href="#Projects"><li>Projetos</li></a>
        </ul>
      </nav>
    </header>
  )
}

export default Header
