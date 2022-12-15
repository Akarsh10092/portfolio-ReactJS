import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import HeroImage2 from '../components/HeroImage2'
import AboutContent from '../components/AboutContent'
const About = () => {
  return (
    <div><Navbar/>
    <HeroImage2 heading="About Me" text="Your friendly neighbourhood Front-end Develpoer"/>
    <AboutContent/>
    <Footer/></div>
  )
}

export default About