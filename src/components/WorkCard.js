import "./WorkCardData.css"
import React from 'react'
import {Link} from "react-router-dom"
const WorkCard = (props) => {
  return (
    <div className="project-card">
    <img src={props.imgsrc} alt="pro1"/>
    <h2 className="project-title">{props.title}</h2>
    <div className="pro-details">
        <p>{props.text}</p>
        <div className="pro-btns">
            <Link to={props.view} className="btn">Info..</Link> 
            <a href={props.source} target="_blank" rel="noopener noreferrer"> <button className="btn">Source</button> </a>
        </div>
    </div>
</div>    
  )
}

export default WorkCard