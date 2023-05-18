import React from 'react'
import Bredcom from '../Bredcom/Bredcom'
import Header from '../header/Main'
import { useLocation } from 'react-router-dom';
import Teachers from '../Teachers/Teachers';
import MovingBanner from '../MovingBanner/MovingBanner';




function FacultyAndStaffScreen() {
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
        <div className='page-data'>
        <h2 className='section-heading'>Faculty and Staff</h2>
        </div>
        <Teachers/>
        <MovingBanner/>

      </>
  )
}

export default FacultyAndStaffScreen