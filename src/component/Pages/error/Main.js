import React from 'react'
import Header from '../../header/Main'
import Bredcom from '../../Bredcom/Bredcom'
import First from '../menerror/First'

function Main() {
  return (
    <>
        <Header/>
        <Bredcom 
        title="Home" 
        subtitle="404 Error"/>
        <First/>
    </>
  )
}

export default Main