import "./AboutStyles.css"
import React from 'react'
import { Link } from "react-router-dom"
import js1 from "../images/js1.png"
import mern from "../images/mern.jpeg"
import resume from "../images/Resume-Akarsh-final1.pdf"
const AboutContent = () => {
    return (
      <div className="about">
          <div className="left">
              <h1>Who am I?</h1>
              <p>I am a Front-End Developer.
                  I create responsive secure websites for my clients
                  <a className="a" href={resume} target="_blank" rel="noopener noreferrer">Download Resume</a>
              </p>
              <Link to="/contact">
                  <button className="btn">Contact</button>
              </Link>
          </div>
          <div className="right">
              <div className="img-container">
                  <div className="img-stack top">
                  <img src={js1} className="img" alt="true"></img>
                  </div>
                  <div className="image-stack bottom"> 
                  <img src={mern} className="img" alt="true"></img>
                  </div>
          </div>
          </div>
      </div>
    )
}

export default AboutContent