import React from 'react'
import Navbar from '../components/Navbar'
import HeroImage2 from '../components/HeroImage2'
import Footer from '../components/Footer'
import Info1 from '../components/Info1'
const Information = () => {
  return (
    <div><Navbar/>
    <HeroImage2 heading="Information of My past projects" text="Details below"/>
    <Info1/>
    <Footer/></div>
  )
}

export default Information