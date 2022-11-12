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
            "Este portifólio foi desenvolvido com foco no design e experiência do usuário, pois se tratava de um portifólio de um fotografo profissional, que por sua vez desejava um portifólio a sua altura em questão de profissionalismo.",
          subDescription: "Desenvolver esse projeto foi um desafio para mim pois ainda não obtinha muito conhecimento sobre design, entretando sempre fui muito curioso em relação a novos assuntos e muito dedicado, com isso, pesquisei e estudei sobre design e obtive um resultado incrível em comparação aos meus projetos anteriores. Com esse projeto tive um grande avanço profissional, tanto em novas tecnologias que precisei aprender durante o desenvolvimento do projeto, quanto em responsabilidade para entregar um trabalho a um cliente.",
        },
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
              subDescription={myJob.subDescription}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
