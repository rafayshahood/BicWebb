import React from 'react'
import Header from '../../header/Main'
import Bredcom from '../../Bredcom/Bredcom'
import MovingBanner from '../../MovingBanner/MovingBanner'
import First from '../menfaq/First'

function Main() {
  return (
    <>
        <Header/>
        <Bredcom  
          title="Home" 
          subtitle="Faq"/>
        <First/>
        <MovingBanner/>
    </>
  )
}

export default Main