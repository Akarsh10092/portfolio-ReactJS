import "./HeroImageStyles.css"
import React from 'react'
import IntroImg from "../images/showcase.jpg"
import { Link } from "react-router-dom"
const HeroImage = () => {
  return (
    <div className='hero'>
        <div className='mask'>
            <img className='intro-img'
            src={IntroImg} alt="IntroImg"></img>
        </div>
        <div className='content'>
            <p>Hi I am a freelance </p>
            <h1>React Developer.</h1>
            <div>
                <Link to="/project" className='btn'>Projects</Link>
                <Link to="/contact" className='btn btn-light'>Contact</Link>
            </div>
        </div>
    </div>
  )
}

export default HeroImage