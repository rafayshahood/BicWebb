import React from 'react'
import Headerone from '../header/Main'
import About from '../homeScreenComponents/About'
import Courses from '../homeScreenComponents/Courses'
import Event from '../homeScreenComponents/Event'
import Scholarship from '../homeScreenComponents/Scholarship'
import Shep from '../homeScreenComponents/Shep'
import Slider from '../homeScreenComponents/Slider'
import Video from '../homeScreenComponents/Video'
import Testimonial from '../homeScreenComponents/Testimonial'
import Admission from '../homeScreenComponents/Admission'
import Subscribe from '../homeScreenComponents/Subscribe'
import MovingBanner from '../MovingBanner/MovingBanner'

function HomeScreen() {
  return (
    <>  
        <Headerone/>
        <Slider/>
        <About/>
        <Courses/>
        <Shep/>
        <MovingBanner/>
        <Event/>
        <Admission/>
        <Scholarship/>
        <Video/>
        <Testimonial/>
        <Subscribe/>
        <MovingBanner/>
        
    </>
  )
}

export default HomeScreen