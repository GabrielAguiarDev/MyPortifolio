import React from 'react'
import { HiLink } from 'react-icons/hi'

const Card = ({ url, img, name, description, technologies }) => {
  return (
    <div className="project_card">
        <a href={url} target="_blank" rel='noopener noreferrer'>
            <img src={img} alt={name} />
        </a>
        <h2>{name}</h2>
        <p>{description}</p>
        <span>{technologies}</span>
        <div className="project_link">
            <a href={url}>
                <HiLink />
                Repositório
            </a>
        </div>
    </div>
  )
}

export default Card