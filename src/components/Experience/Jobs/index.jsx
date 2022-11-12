import React from 'react'

const Job = ({ title, date, subTitle, description, subDescription }) => {
  return (
    <div className='jobs'>
        <h1>{title}</h1>
        <span>{date}</span>
        <h2>{subTitle}</h2>
        <p>{description}</p>
        <p>{subDescription}</p>
    </div>
  )
}

export default Job