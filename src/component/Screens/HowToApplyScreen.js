import React from 'react'
import University from '../Menabout/University'
import Header from '../headerone/Main'
import Bredcom from '../Bredcom/Main'
import Scholarship from '../menhome/Scholarship'
import Frequently from '../menhome/Frequently'
import Campus from '../Menabout/Campus'
import Testimonial from '../menhome/Testimonial'
import Brand from '../menhomethree/Brand'



function HowToApplyScreen() {
  return (
    <>
        <Header/>
        <Bredcom
        title="Home" 
        subtitle="How To Apply Screen"/>
    <div className='page-data'>
      <ol>
        <li>
          <h2 className='section-heading'>Choose Your Program</h2>
          <p className='section-text'>First, decide which program you want to apply for. You can browse the list of available programs on our website and choose the one that best fits your interests and career goals.</p>
        </li>
        <li>
          <h2 className='section-heading'>Review Admission Requirements</h2>
          <p className='section-text'>Once you have selected your program, review the admission requirements for that program carefully. This will include academic requirements such as minimum GPA, prerequisite courses, and test scores, as well as any additional requirements like essays, letters of recommendation, or interviews.</p>
        </li>
        <li>
          <h2 className='section-heading'>Gather Required Materials</h2>
          <p className='section-text'>Collect all required materials for your application, including transcripts, test scores, essays, letters of recommendation, and any other supporting documents required by your program.</p>
        </li>
        <li>
          <h2 className='section-heading'>Submit Your Application</h2>
          <p className='section-text'>Complete and submit your application online through our website. Make sure to pay the application fee and submit all required materials by the application deadline.</p>
        </li>
        <li>
          <h2 className='section-heading'>Track Your Application Status</h2>
          <p className='section-text'>You can track the status of your application through our online portal. You will receive updates on the progress of your application and any additional materials that may be required.</p>
        </li>
      <liv>
      <p className='section-text'>If you have any questions about the application process or need assistance, our admissions team is always available to help. Contact us by phone or email for personalized support.</p>
      <p className='section-text'>We look forward to receiving your application and welcoming you to our university community!</p>

      </liv>

      </ol>
    </div>

    </>
  )
}

export default HowToApplyScreen