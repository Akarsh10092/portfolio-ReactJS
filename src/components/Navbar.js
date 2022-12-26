import "./NavBarStyles.css"
import { Link } from "react-router-dom"
import {FaBars,FaTimes} from "react-icons/fa"
import { useState } from "react"
import React from 'react'
import { motion } from "framer-motion"
const Navbar = () => {
    const [click,setClick] = useState(false);
    const handleClick = ()=>{
        setClick(!click)
    }
    const[color,setColor] = useState(false);
    const changeColor = ()=>{
            if(window.scrollY>=1){
                setColor(true);
            }
            else{setColor(false)}
    }
    window.addEventListener("scroll",changeColor)
    const options = {
        initial: {
          x:"100%"
        },
        whileInView:{
            x:0
        },
    }
  return (
    <motion.div {...options} className={color ? "header header-bg":"header"}>
        <Link to="/">
            <h1>Aakarsh Agarwal</h1>
        </Link>
        <ul className={click ? "nav-menu active":"nav-menu"} >
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/project">Project</Link>
            </li>
            <li>
                <Link to="/about">About</Link>
            </li>
            <li>
                <Link to="/contact">Contact</Link>
            </li>
        </ul>
        <div className="hamburger" onClick={handleClick}>
            {!click? (<FaBars size={20} style={{color:"#fff"}}/>):
            (<FaTimes size={20} style={{color:"#fff"}}/>)}
             </div>
    </motion.div>
  )
}

export default Navbar