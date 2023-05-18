import React from 'react'
import Bredcom from '../Bredcom/Bredcom'
import Header from '../header/Main'
import { useLocation } from 'react-router-dom';
import MovingBanner from '../MovingBanner/MovingBanner';
import Events from '../homeScreenComponents/Event'



function NewsAndEventsScreen() {
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
        <h2 className='section-heading'>News and Events</h2>
        <p className='section-text'>
        To be eligible for admission to our university, applicants must meet the following criteria:
        Education qualifications: Applicants must have completed their secondary education or equivalent from a recognized board or 
        university.
        Minimum grades: Applicants must have achieved a minimum grade point average (GPA) or percentage in their qualifying exams. 
        </p>
        </div>
        <Events/>
        <MovingBanner/>
    </>
  )
}

export default NewsAndEventsScreen