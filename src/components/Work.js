import "./WorkCardData.css"
import React from 'react'
import WorkCard from "./WorkCard"
import WorkCardData from "./WorkCardData"
import { motion } from "framer-motion"

const Work = () => {
  return (
    <div className="container">
    <h1 className="project-heading">Projects</h1>
    <motion.div 
        initial={{
          x:"-100%",
          opacity:0
         }}
         whileInView={{
          x:0,
          opacity:1
         }}
         transition={{
          delay:1,
         }}
        className="project-container">
        {WorkCardData.map((val,indx)=>{
            return(
                <WorkCard
                key={indx}
                imgsrc={val.imgsrc}
                title={val.title}
                text={val.text}
                view={val.view}
                source={val.source}/>
            )
        })} 
    </motion.div>
</div>
  )
}

export default Work