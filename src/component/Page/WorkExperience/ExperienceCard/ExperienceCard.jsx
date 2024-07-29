import React from 'react'
import './ExperienceCard.scss'

const ExperienceCard = ({detail}) => {
  return (
    <div className='experience-card'>
      <h6>{detail.title}</h6>
      <div className="experience-date">
        {detail.date}
      </div>
      <ul>
        {detail.response.map((item,index)=>(
            <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  )
}

export default ExperienceCard
