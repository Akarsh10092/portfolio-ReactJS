import "./FooterStyles.css"
import React from 'react'
import { FaHome,FaPhone,FaMailBulk,FaGithub,FaInstagram,FaLinkedinIn } from "react-icons/fa"
const Footer = () => {
    const item = { giturl: "https://github.com/Akarsh10092",
    insturl: "https://www.instagram.com/agarwal.aakarsh_",
    linkurl: "https://www.linkedin.com/in/akarsh-agarwal-16964788/"
  }
return (
    <div className='footer'>
        <div className='footer-cotainer'>
            <div className='left'>
                <div className='location'>
                <FaHome size={20} style={{color:"#fff",marginRight:"2rem"}}/>
                    <div>
                        <p>Ncr</p>
                        <p>India</p>
                    </div>
                </div> 
                <div className='phone'>
                        <h4>
                        <FaPhone  size={20} style={{color:"#fff",marginRight:"2rem"}}/>
                        +91-9717219175
                        </h4>
                </div>
                    <div className='email'>
                        <h4>
                        <FaMailBulk  size={20} style={{color:"#fff",marginRight:"2rem"}}/>
                        akarshagarwal9863@gmail.com
                        </h4>
                     </div>
            </div>

        <div className='right'>
                <h4>About me</h4>
                <p>I am a passionate fullstack developer who likes new challenges</p>
            <div className='social'>
                <a href={item.giturl} target="_blank" rel="noopener noreferrer"><FaGithub size={30} style={{color:"#fff",marginRight:"1rem"}}/></a>
                <a href={item.insturl} target="_blank" rel="noopener noreferrer">   <FaInstagram size={30} style={{color:"#fff",marginRight:"1rem"}}/></a>
                <a href={item.linkurl} target="_blank" rel="noopener noreferrer"><FaLinkedinIn size={30} style={{color:"#fff",marginRight:"1rem"}}/></a>
            </div>
            </div>
        </div>
    </div>
)
}

export default Footer