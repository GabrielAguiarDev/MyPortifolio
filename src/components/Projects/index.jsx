import React from 'react'
import Card from './Card'

import './Projects.css'
import './responsive.css'

const Projects = () => {
  return (
    <section className='projects' name="projects">
      <div data-aos="fade-right" className="projects_container">
        <h1>PROJETOS</h1>
        <div className="project_wrapper">
          <Card 
            url="https://github.com/GabrielAguiarDev/Pokedex"
            img={process.env.PUBLIC_URL + "/images/pokemon_capa.webp"}
            name="Pokédex" 
            description="Projeto realizado em ReactJS consumindo uma API de Pokémon." 
            technologies="Tecnologias usadas no projeto: HTML, CSS, ReactJS, JSX."
          />
          <Card 
            url="https://github.com/GabrielAguiarDev/CloneNetflix"
            img={process.env.PUBLIC_URL + "/images/clone_netflix_capa.png"}
            name="Clone do Netflix" 
            description="Clone do Netflix criado em ReactJS consumindo uma API de Filmes. Projeto construído junto com o programador e youtuber, Bonieky Lacerda." 
            technologies="Tecnologias usadas no projeto: HTML, CSS, ReactJS, JSX."
          />
          <Card 
            url="https://github.com/GabrielAguiarDev/BestMovies"
            img={process.env.PUBLIC_URL + "/images/best_movies_capa.png"}
            name="Road Movies" 
            description="Projeto realizado em ReactJS consumindo uma API de Filmes. Projeto construído junto com o programador e youtuber, Matheus Battisti" 
            technologies="Tecnologias usadas no projeto: HTML, CSS, ReactJS, ViteJS, JSX."
          />
          <Card 
            url="https://github.com/GabrielAguiarDev/Costs"
            img={process.env.PUBLIC_URL + "/images/costs_capa.webp"}
            name="Costs" 
            description="Projeto realizado em ReactJS afim de ajudar um cliente a lidar com os custos de um projeto. Projeto criado junto com o programador e youtuber, Matheus Battisti" 
            technologies="Tecnologias usadas no projeto: HTML, CSS, ReactJS, JSX, json-server."
          />
          <Card 
            url="https://github.com/GabrielAguiarDev/LandingPage"
            img={process.env.PUBLIC_URL + "/images/landingPage_capa.png"}
            name="Landing Page - Web Notes" 
            description='O projeto é uma landing page contendo uma página de login, de registro, de contatos, e uma página com uma pequena descrição sobre o "site".'
            technologies="Tecnologias usadas no projeto: HTML, CSS, JAVASCRIPT, JSX, e um pouco de JQUERY."
          />
        </div>
      </div>
    </section>
  )
}

export default Projects