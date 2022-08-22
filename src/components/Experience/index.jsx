import React, { useState, useEffect } from "react";

import "./Experience.css";
import "./responsive.css"

import Job from "./Jobs";

const Experience = () => {

  const [job, setJob] = useState(null)
  const [classActive, setClassActive] = useState(Number)

  const myJobs = [
    {
      id: 1,
      job: [
        {
          title: "Em busca da minha primeira experiência \"oficial\"",
          subTitle: "quem sabe na sua empresa?",
          description: 
            "Estou disponível para bater um papo, você pode entrar em contato via e-mail gabriel.aguiar.dev@gmail.com"
        }
      ]
    },
    {
      id: 2,
      job: [
        {
          title: "Portifolio para Fotógrafo",
          date: "Set 2022",
          subTitle: "Portifolio - Projeto Freelancer",
          description: 
            "Minha primeira oportunidade na área de tecnologia. Esse é um projeto criado em ReactJS e sendo desenvolvido totalmente pensado na responsividade, projeto em desenvolvimento."
        }
      ]
    }
  ]

  function handleJob(id) {
    switch (id) {
      case 1:
        setClassActive(1)
        break;
      case 2:
        setClassActive(2)
        break
      case 3:
        setClassActive(3)
        break
      default:
        setClassActive(2)
        break;
    }
    myJobs.map((myJob) => {
      if(myJob.id === id) {
        myJob.job.forEach(infoJob => {
          setJob([infoJob])
        })
      }
    })
  }

  useEffect(() => {
    handleJob(2)
  }, [])

  return (
    <section className="experience" name="experience">
      <div data-aos="fade-right">
        <h1>EXPERIÊNCIA</h1>
        <div className="experience_info" >
          <ul>
            <li className={`${classActive === 1 ? "active" : ""}`} onClick={() => {handleJob(1)}}>👀👀</li>
            <li className={`${classActive === 2 ? "active" : ""}`} onClick={() => {handleJob(2)}}>Portifolio</li>
          </ul>
          <div className="experience_jobs">
            {job && job.map(myJob => (
              <Job
              title={myJob.title}
              date={myJob.date}
              subTitle={myJob.subTitle}
              description={myJob.description}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
