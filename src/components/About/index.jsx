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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet atque vero neque similique delectus eveniet consequatur iure beatae? Voluptate aliquam quam asperiores quidem rem? Quas corrupti obcaecati officiis ut nobis. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, earum. Mollitia obcaecati, minima quos omnis, culpa velit eius atque assumenda sapiente facilis praesentium laborum laboriosam cum deserunt a dolorem animi.
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