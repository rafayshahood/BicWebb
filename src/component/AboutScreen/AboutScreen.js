import React from 'react'
import About from '../homeScreenComponents/About'
import Header from '../header/Main'
import Bredcom from '../Bredcom/Bredcom'
import Scholarship from '../homeScreenComponents/Scholarship'
import Campus from '../CampusTour/CampusTour'
import Testimonial from '../homeScreenComponents/Testimonial'
import MovingBanner from '../MovingBanner/MovingBanner'



function AboutScreen() {
  return (
    <>
        <Header/>
        <Bredcom
        title="Home" 
        subtitle="About Us"/>
        <About/>
        <Scholarship/>
        <Campus/>
        <Testimonial/>
        <MovingBanner/>
    </>
  )
}

export default AboutScreen