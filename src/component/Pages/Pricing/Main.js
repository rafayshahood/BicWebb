import React from 'react'
import Header from '../../header/Main'
import Bredcom from '../../Bredcom/Bredcom'
import MovingBanner from '../../MovingBanner/MovingBanner'
import First from '../menpricing/First'

function Main() {
  return (
    <>
        <Header/>
        <Bredcom 
        title="Home" 
        subtitle="Pricing"/>
        <First/>
        <MovingBanner/>
    </>
  )
}

export default Main