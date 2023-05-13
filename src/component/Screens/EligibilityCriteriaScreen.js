import React from 'react'
import University from '../Menabout/University'
import Header from '../headerone/Main'
import Bredcom from '../Bredcom/Main'
import Scholarship from '../menhome/Scholarship'
import Frequently from '../menhome/Frequently'
import Campus from '../Menabout/Campus'
import Testimonial from '../menhome/Testimonial'
import Brand from '../menhomethree/Brand'



function EligibilityCriteriaScreen() {
  return (
    <>
        <Header/>
        <Bredcom
        title="Home" 
        subtitle="Eligibility Criteria"/>
        <div className='page-data'>
        <h2 className='section-heading'>Elligibility Criteria</h2>
        <p className='section-text'>
        To be eligible for admission to our university, applicants must meet the following criteria:
        Education qualifications: Applicants must have completed their secondary education or equivalent from a recognized board or 
        university.
        Minimum grades: Applicants must have achieved a minimum grade point average (GPA) or percentage in their qualifying exams. 
        The specific minimum grade or percentage required may vary depending on the program of study.
        English language proficiency: International students whose native language is not English must demonstrate proficiency
         in the English language by submitting standardized test scores such as TOEFL, IELTS, or other recognized English language proficiency
        tests.
        Entrance exam: Some programs may require applicants to take an entrance exam, such as the SAT, ACT, GRE, or GMAT, and achieve a 
        minimum score to be considered for admission.
        Personal statement: Applicants may be required to submit a personal statement or essay detailing their motivation for applying to 
        the university and explaining why they are a good fit for the program.
        Please note that meeting the eligibility criteria does not guarantee admission to the university. Admissions decisions are based on
         a holistic review of each applicant's qualifications, including academic achievements, test scores, personal statement, and other factors that may be relevant to the program of study.
        </p>
        </div>
    </>
  )
}

export default EligibilityCriteriaScreen