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
          title: "Titulo 1",
          date: "Set 2021",
          subTitle: "Sub Titulo 1",
          description: 
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates explicabo, error iusto nihil, tempore sint consectetur ab velit dignissimos labore vero neque fugit necessitatibus quisquam cum omnis, laborum quibusdam cumque. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error labore et distinctio reiciendis doloribus obcaecati aspernatur at sit quo, totam earum magnam laudantium doloremque voluptatum, autem repellat neque consequuntur possimus."
        }
      ]
    },
    {
      id: 2,
      job: [
        {
          title: "Titulo 2",
          date: "Mar 2022",
          subTitle: "Sub Titulo 2",
          description: 
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates explicabo, error iusto nihil, tempore sint consectetur ab velit dignissimos labore vero neque fugit necessitatibus quisquam cum omnis, laborum quibusdam cumque. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error labore et distinctio reiciendis doloribus obcaecati aspernatur at sit quo, totam earum magnam laudantium doloremque voluptatum, autem repellat neque consequuntur possimus."
        }
      ]
    },
    {
      id: 3,
      job: [
        {
          title: "Titulo 3",
          date: "Jun 2022",
          subTitle: "Sub Titulo 3",
          description: 
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates explicabo, error iusto nihil, tempore sint consectetur ab velit dignissimos labore vero neque fugit necessitatibus quisquam cum omnis, laborum quibusdam cumque. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error labore et distinctio reiciendis doloribus obcaecati aspernatur at sit quo, totam earum magnam laudantium doloremque voluptatum, autem repellat neque consequuntur possimus."
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
        <h1>Experiência</h1>
        <div className="experience_info" >
          <ul>
            <li className={`${classActive === 1 ? "active" : ""}`} onClick={() => {handleJob(1)}}>Job 1</li>
            <li className={`${classActive === 2 ? "active" : ""}`} onClick={() => {handleJob(2)}}>Job 2</li>
            <li className={`${classActive === 3 ? "active" : ""}`} onClick={() => {handleJob(3)}}>Job 3</li>
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
