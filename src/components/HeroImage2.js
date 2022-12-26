import "./HeroImage2Styles.css"
import React, { Component } from 'react'
import { motion } from "framer-motion"
class HeroImage2 extends Component{
    render(){
  return (
    <div className="hero-img">
    <div className="heading">
        <motion.h1 initial={{ y: "-100vh" }}
    animate={{ y: 0 }} >{this.props.heading}</motion.h1 >
        <motion.p initial={{ y: "-100vh" }}
    animate={{ y: 0 }} >{this.props.text}</motion.p>
    </div>
    </div>
  )
}
}
export default HeroImage2