import React from 'react'
import Bredcom from '../Bredcom/Bredcom'
import Header from '../header/Main'
import First from '../mencoursedetails/First'
import MovingBanner from '../MovingBanner/MovingBanner'

function Main() {
  return (
    <>
        <Header/>
        <Bredcom 
          title="Home" 
          subtitle="Course Details" />
        <First/>
        <MovingBanner/>
    </>
  )
}

export default Main