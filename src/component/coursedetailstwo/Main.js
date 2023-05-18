import React from 'react'
import Header from '../header/Main'
import Bredcom from '../Bredcom/Bredcom'
import MovingBanner from '../MovingBanner/MovingBanner'
import First from '../mencoursedetailstwo/First'

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