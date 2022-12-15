import React from 'react'
import "./Info1.css"
import pro1 from "../images/pro1.jpg"
import js1 from "../images/js1.png"
import lights from "../images/lights.jpg"
const Info1 = () => {
  const item = { lightsout: "https://lightsout-psi.vercel.app/",
}
  return (
    <div className='info1'>
    <div className='project1'>
    <img classname="img1" src={pro1} alt="true"></img>
       <h1><btn className="btn">EcomApp</btn> </h1>
        <p>The webapp is fully functioning website with both working frontend/backend
        <p>Skills used: MongoDB/Express/React/Nodejs</p></p>
        <img classname="img2" src={js1} alt="true"></img>
        <h1><btn className="btn">GoalSetter App</btn></h1>
        <p><p>The webapp is fully functioning website with both working frontend/backend</p>
            Skills used: MongoDB/Express/React/Node.JS</p>
        <img classname="img3" src={lights} alt="true"></img>
        <a href={item.lightsout} target="_blank" rel="noopener noreferrer"><h1><btn className="btn">Lightsout</btn></h1></a>
        <p>This game was developed using the implementation of React class component and basic VanillaJS</p>  
    </div>
</div>
  )
}

export default Info1