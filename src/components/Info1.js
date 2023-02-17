import React from 'react'
import "./Info1.css"
import pro1 from "../images/pro1.jpg"
import btech1 from "../images/btech1.png"
import admin from "../images/admin.png"
import pro2 from "../images/pro2.png"
import lights from "../images/pro4.png"
const Info1 = () => {
  const item = { lightsout: "https://lightsout-psi.vercel.app/",
    btachBurgerWala : "https://btechburgerwala-eight.vercel.app/",
    adminDashBoard : "https://admindashboard-flax.vercel.app/"
}
  return (
    <div className='info1'>
    <div className='project1'>
    <img classname="img" src={btech1} alt="true"></img>
    <a href={item.btachBurgerWala} target="_blank" rel="noopener noreferrer"><h1><btn className="btn">Btech Burger Wala</btn></h1></a>
        <p>The webapp is made for food ordering usng Google Auth and Razorpay
        <p>Skills used: MongoDB/Express/React/Nodejs<br></br>/GoogleAuthO2/Razorpay/cookieSession</p></p>
          
           <img classname="img" src={admin} alt="true"></img>
 <a href={item.adminDashBoard} target="_blank" rel="noopener noreferrer"><h1><btn className="btn">Admin DashBoard</btn></h1></a>

        <p>Classic Admin DashBoard for regular accessibility

        <p>Skills used: React/Nodejs</p></p>

   
    <img classname="img" src={pro1} alt="true"></img>
       <h1><btn className="btn">EcomApp</btn> </h1>
        <p>The webapp is made for setting daily goals efficiently
        <p>Skills used: MongoDB/Express/React/Nodejs</p></p>
        <img classname="img" src={pro2} alt="true"></img>
        <h1><btn className="btn">GoalSetter</btn></h1>
        <p><p>The webapp is fully functioning website <br></br>with both working frontend/backend for goal setting</p>
            Skills used: MongoDB/Express/React/Node.JS</p>
        <img classname="img" src={lights} alt="true"></img>
        <a href={item.lightsout} target="_blank" rel="noopener noreferrer"><h1><btn className="btn">Lightsout</btn></h1></a>
        <p>This game was developed using the implementation of React class component and basic VanillaJS</p>  
    </div>
</div>
  )
}

export default Info1
