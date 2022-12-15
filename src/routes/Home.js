import React from 'react'
import Navbar from '../components/Navbar'
import TypeWriter from '../components/TypeWriter'
import Footer from '../components/Footer'
import HeroImage from '../components/HeroImage'
const Home = () => {
  return (
    <div>
      <Navbar/>
      <HeroImage/>
      <TypeWriter/>
      <Footer/>
    </div>
  )
}

export default Home