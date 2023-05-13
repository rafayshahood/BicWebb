import React from 'react'
import Bredcom from '../Bredcom/Main'
import Header from '../headerone/Main'
import First from '../mencourses/First'
import Brand from '../menhomethree/Brand'


function OfferedProgramsScreen() {
  return (
    <>
        <Header/>
        <Bredcom 
        title="Home" 
        subtitle="Offered Programs"/>
        <First/>
        <Brand/>
    </>
  )
}

export default OfferedProgramsScreen