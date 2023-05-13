import React from 'react'
import University from '../Menabout/University'
import Header from '../headerone/Main'
import Bredcom from '../Bredcom/Main'
import Scholarship from '../menhome/Scholarship'
import Frequently from '../menhome/Frequently'
import Campus from '../Menabout/Campus'
import Testimonial from '../menhome/Testimonial'
import Brand from '../menhomethree/Brand'



function FeeStructureScreen() {
  return (
    <>
        <Header/>
        <Bredcom
        title="Home" 
        subtitle="Fee Structure"/>
        <div className='page-data'>
        <h2 className='section-heading'>Fee Structure</h2>
        <p className='section-text'>

          Tuition fees are charged per credit hour, and the total cost varies depending on the program of study.
          In addition to tuition fees, students are required to pay various fees such as registration fee, library fee, technology fee, and student 
          activity fee. <br/> <br/>
          <b>Room and Board:</b> <br/>

          For students who live on campus, room and board fees are charged separately.
          Room fees are charged per semester and vary depending on the type of accommodation (e.g., single, double, or shared room).
          Board fees cover the cost of meals and are charged per semester.<br/> <br/>
          <b>Financial Aid:</b><br/>

          The university offers various forms of financial aid to eligible students, including scholarships, grants, and loans.
          Eligibility for financial aid is determined based on various factors, such as academic merit, financial need, and other criteria.<br/>
          <br/><b>Payment Options:</b><br/>

          Students can pay their tuition and fees online through the university's portal using a credit card, debit card, or electronic funds transfer (EFT).
          The university also offers a payment plan option, allowing students to pay their tuition and fees in installments over the course of the semester.
          Please note that the fee structure may vary depending on the specific program of study and other factors, and the university reserves the right to
          make changes to the fee structure at any time. Students are advised to regularly check the university's website or contact the admissions office
            for the most up-to-date information on fees and payment options.
        </p>
        </div>
    </>
  )
}

export default FeeStructureScreen