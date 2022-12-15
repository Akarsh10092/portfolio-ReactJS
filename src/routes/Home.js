import React from 'react'
import Navbar from '../components/Navbar'
import TypeWriter from '../components/TypeWriter'
import Footer from '../components/Footer'
import HeroImage from '../components/HeroImage'
const Home = () => {
  return (
    <div>
      <Navbar/>
      <TypeWriter/>
      <HeroImage/>
      <Footer/>
    </div>
  )
}

export default Home