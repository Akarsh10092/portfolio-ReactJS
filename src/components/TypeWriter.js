import "./TypeWriterStyles.css"
import TypewriterComponent from "typewriter-effect"
import React from 'react'

const TypeWriter = () => {
    return (
        <div className='typewriter'>
        <TypewriterComponent
        options={{
          autoStart: true,
          loop: true,
        }}
        onInit={(typewriter) => {
          typewriter.typeString("Welcome to my portfolio")
            .pauseFor(1000)
            .deleteAll()
          typewriter.typeString('Learner Creator Developer')
            .pauseFor(1000)
            .deleteAll()
            .start();
          }}
        /></div>
      )
}

export default TypeWriter