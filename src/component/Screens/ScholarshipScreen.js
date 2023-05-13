import React from 'react'
import Header from '../headerone/Main'
import Bredcom from '../Bredcom/Main'




function ScholarshipScreen() {

  const scholarships = [
    {
      name: 'Academic Excellence Scholarship',
      description: 'This scholarship is awarded to students with exceptional academic achievements, as determined by the admissions committee.',
      amount: '$5,000 per year',
      deadline: 'May 1st',
      eligibility: 'Open to all incoming freshmen with a minimum GPA of 3.5'
    },
    {
      name: 'Need-Based Scholarship',
      description: 'This scholarship is awarded to students with demonstrated financial need, as determined by the financial aid office.',
      amount: '$3,000 per year',
      deadline: 'April 15th',
      eligibility: 'Open to all students who have filed a FAFSA and demonstrate financial need'
    },
    {
      name: 'Diversity Scholarship',
      description: 'This scholarship is awarded to students who have demonstrated a commitment to promoting diversity and inclusion in their community.',
      amount: '$2,500 per year',
      deadline: 'March 1st',
      eligibility: 'Open to all incoming freshmen who have participated in diversity and inclusion activities in their high school or community'
    },
  ];


  return (
    <>
        <Header/>
        <Bredcom
        title="Home" 
        subtitle="Scholarship"/>
        {scholarships.map((scholarship) => (
        <div key={scholarship.name} className='page-data'>
          <h2 className='section-heading'>{scholarship.name}</h2>
          <p className='section-text'>
            {scholarship.description} <br/>
            Amount:{scholarship.amount} <br/>
            Deadline: {scholarship.deadline} <br/>
            Eligibility: {scholarship.eligibility} <br/>
          </p>
        </div>
      ))}
    </>
  )
}

export default ScholarshipScreen