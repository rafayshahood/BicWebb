import React from 'react'
import Bredcom from '../Bredcom/Bredcom'
import Header from '../header/Main'
import { useLocation } from 'react-router-dom';
import MovingBanner from '../MovingBanner/MovingBanner'
import Gallery from '../Gallery/Gallery'



function GalleryScreen() {
  const location = useLocation();
  const routePath = location.pathname;
  console.log(routePath)
  const campusCity = routePath.split('/')[1];
  console.log(campusCity); // "Faisalabad"
  return (
    <>
        <Header/>
        <Bredcom
        title="Home" 
        subtitle={`BIC ${campusCity}`}/>
        <Gallery/>
        <MovingBanner/>
    </>
  )
}

export default GalleryScreen