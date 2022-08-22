import React from 'react'
import { RiDownloadCloudLine } from 'react-icons/ri'

import './About.css'
import './responsive.css'

const About = () => {
  return (
    <section className='about' name="about">
      <div data-aos="fade-right" className='about_container'>
        <div className='about_photo'>
          <img src={process.env.PUBLIC_URL + "/images/perfil.jpeg"} alt="Self de Gabriel Aguiar" />
        </div>
        <div className="about_text">
          <h1>SOBRE MIM</h1>
          <h2>Porto Seguro, Bahia</h2>
          <p>
            Olá, sou estudante de desenvolvimento web com dedicação nos estudos para futuramente ser um desenvolvedor fullstack. Em Out/2020 obtive equipamento para começar a estudar e praticar programação e até hoje me mantenho em constante aprendizado estudando por conta própria fazendo diversos cursos e me mantendo informado sobre o que há de novo na comunidade DEV. Estou cursando Análise e Desenvolvimento de Sistema e continuo meus estudos, tendo em mente que estamos sempre em constante aprendizado.
          </p>
          <div className='about_curriculo'>
            <a href={process.env.PUBLIC_URL + "/Gabriel Aguiar.pdf"} download>
              <RiDownloadCloudLine />
              Currículo
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About