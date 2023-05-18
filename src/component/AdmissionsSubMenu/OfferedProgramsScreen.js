import React from 'react'
import Bredcom from '../Bredcom/Bredcom'
import Header from '../header/Main'
import Degrees from '../Degrees/Degrees'
import MovingBanner from '../MovingBanner/MovingBanner'


function OfferedProgramsScreen() {
  return (
    <>
        <Header/>
        <Bredcom 
        title="Home" 
        subtitle="Offered Programs"/>
        <Degrees/>
        <MovingBanner/>
    </>
  )
}

export default OfferedProgramsScreen