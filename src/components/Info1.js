import React from 'react'
import "./Info1.css"
import pro1 from "../images/pro1.jpg"
import js1 from "../images/js1.png"
import lights from "../images/lights.jpg"
const Info1 = () => {
  return (
    <div className='info1'>
    <div className='project1'>
    <img classname="img1" src={pro1} alt="true"></img>
        <h1>EcomApp</h1>
        <p>The webapp is fully functioning website with both working frontend/backend
        <p>Skills used: MongoDB/Express/React/Nodejs</p></p>
        <img classname="img2" src={js1} alt="true"></img>
        <h1>GoalSetter App</h1>
        <p><p>The webapp is fully functioning website with both working frontend/backend</p>
            Skills used: MongoDB/Express/React/Node.JS</p>
        <img classname="img3" src={lights} alt="true"></img>
        <h1>Lightsout</h1>
        <p>This game was developed using the implementation of React class component and basic VanillaJS</p>  
    </div>
</div>
  )
}

export default Info1