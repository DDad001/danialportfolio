import React from 'react'
import AboutMe from '../Pages/AboutMe'
import ContactMe from '../Pages/ContactMe'
import Home from '../Pages/Home'
import Projects from '../Pages/Projects'
import Resume from '../Pages/Resume'

function Main() {
  return (
    <div>
        <Home/>
        <Resume/>
        <Projects/>
        <AboutMe/>
        <ContactMe/>
    </div>
  )
}

export default Main