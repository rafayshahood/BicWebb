import React from 'react'
import Header from '../../header/Main'
import Bredcom from '../../Bredcom/Bredcom'
import First from '../menteacherdetails/First'

function Main() {
  return (
    <>
        <Header/>
        <Bredcom 
        title="Home" 
        subtitle="Teacher Details"/>
        <First/>
        
    </>
  )
}

export default Main