import React from 'react'
import Header from '../header/Main'
import Bredcom from '../Bredcom/Bredcom'
import MovingBanner from '../MovingBanner/MovingBanner'
import Touch from '../mencontact/Touch'
import Map from '../mencontact/Map'
import Form from '../mencontact/Form' 

function Main() {
  return (
    <>
        <Header/>
        <Bredcom 
        title="Home" 
        subtitle="Contact Us"/>
        <Touch/>
        <Map/>
        <Form/>
        <MovingBanner/>
    </>
  )
}

export default Main