import "./HeroImageStyles.css"
import React from 'react'
import IntroImg from "../images/showcase.jpg"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"
const HeroImage = () => {
  const options = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
    },
    transition: {
      ease: "linear",
      repeat: "Infinity",
      repeatType: "reverse",
      duration:"0.8"
    },
  };
  return (
    <div className='hero'>
        <div className='mask'>
            <img className='intro-img'
            src={IntroImg} alt="IntroImg"></img>
        </div>
        <div className='content'>
        <motion.p {...options}>Hi I am a freelance </motion.p>
            <h1>React Developer.</h1>
            <motion.div initial={{x:"-100%"}} whileInView={{x:0}} >
                <Link to="/project" className='btn'>Projects</Link>
                <Link to="/contact" className='btn btn-light'>Contact</Link>
            </motion.div>
            </div>
        </div>
  )
}

export default HeroImage