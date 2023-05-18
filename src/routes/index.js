import React , {useEffect} from 'react'
import {Route, Routes, useLocation} from 'react-router-dom';
import Footer from '../component/footer/Main'
import About from '../component/AboutScreen/AboutScreen'
import Coursesdeatils from '../component/coursedetails/Main'
import Coursesdeatilstwo from '../component/coursedetailstwo/Main'
import Pricing from '../component/Pages/Pricing/Main'
import Faq from '../component/Pages/Faq/Main'
import Teacherdeatils from '../component/Pages/teacherdetails/Main'
import Error from '../component/Pages/error/Main'
import Contact from '../component/contact/Main'
import Projectdeatils from '../component/Pages/Projectdeatils/Main'
import Home from '../component/home/HomeScreen';
import FeeStructureScreen from '../component/AdmissionsSubMenu/FeeStructureScreen';
import HowToApplyScreen from '../component/AdmissionsSubMenu/HowToApplyScreen';
import OfferedProgramsScreen from '../component/AdmissionsSubMenu/OfferedProgramsScreen';
import EligibilityCriteriaScreen from '../component/AdmissionsSubMenu/EligibilityCriteriaScreen';
import ProspectusScreen from '../component/AdmissionsSubMenu/Prospectus';
import ScholarshipScreen from '../component/AdmissionsSubMenu/ScholarshipScreen';
import EpcadScreen from '../component/EpcadScreen/EpcadScreen';
import CareersScreen from '../component/CareersScreen/CareersScreen';
import FacultyAndStaffScreen from '../component/CampusesSubMenu/FacultyAndStaffScreen';
import ResearchScreen from '../component/CampusesSubMenu/ResearchScreen';
import RectorsMessageScreen from '../component/CampusesSubMenu/RectorsMessageScreen';
import NewsAndEventsScreen from '../component/CampusesSubMenu/NewsAndEventsScreen';
import HistoryScreen from '../component/CampusesSubMenu/HistoryScreen';
import GalleryScreen from '../component/CampusesSubMenu/GalleryScreen';
import DegreesScreen from '../component/CampusesSubMenu/DegreesScreen';
import SocietiesScreen from '../component/StudentsSubMenu/SocietiesScreen';
import RulesAndRegulationsScreen from '../component/StudentsSubMenu/RulesAndRegulationsScreen';
import FinancialRulesScreen from '../component/StudentsSubMenu/FinancialRulesScreen';
import AcademicCalendarScreen from '../component/StudentsSubMenu/AcademicCalendarScreen';
import CodeOfConductScreen from '../component/StudentsSubMenu/CodeOfConductScreen';

function Index() {

  const location = useLocation();
  const path = location.pathname
  useEffect(() => {
    window.scroll(0, 0)
}, [path]);

  const cities = ["Faisalabad", "Lahore", "Islamabad"];


  return (
    <>

        <Routes>

           <Route path="//BicWebb/" element={<Home/>} />
           <Route path="/scholarships" element={<ScholarshipScreen/>} />
           <Route path="/fee-structure" element={<FeeStructureScreen/>} />
           <Route path="/how-to-apply" element={<HowToApplyScreen/>} />
           <Route path="/Offered-Programs" element={<OfferedProgramsScreen/>} />
           <Route path="/eligibility-criteria" element={<EligibilityCriteriaScreen/>} />
           <Route path="/prospectus" element={<ProspectusScreen/>} />

           <Route path="/epcad" element={<EpcadScreen/>} />
           <Route path="/careers" element={<CareersScreen/>} />

           {cities.map(city => (
              <React.Fragment key={city}>
                <Route path={`/${city}/FacultyandStaff`} element={<FacultyAndStaffScreen />} />
                <Route path={`/${city}/degrees`} element={<DegreesScreen />} />
                <Route path={`/${city}/gallery`} element={<GalleryScreen />} />
                <Route path={`/${city}/history`} element={<HistoryScreen />} />
                <Route path={`/${city}/news-and-events`} element={<NewsAndEventsScreen />} />
                <Route path={`/${city}/rectors-message`} element={<RectorsMessageScreen />} />
                <Route path={`/${city}/research`} element={<ResearchScreen />} />
              </React.Fragment>
            ))}
           
           <Route path="/code-of-conduct" element={<CodeOfConductScreen/>} />
           <Route path="/academic-calendar" element={<AcademicCalendarScreen/>} />
           <Route path="/financial-rules" element={<FinancialRulesScreen/>} />
           <Route path="/rules-and-regulations" element={<RulesAndRegulationsScreen/>} />
           <Route path="/societies" element={<SocietiesScreen/>}/>


           <Route path="/about" element={<About/>} />
           <Route path="/single-courses" element={<Coursesdeatils/>} /> 
           <Route path="/single-courses-2" element={<Coursesdeatilstwo/>} /> 
           <Route path="/single-projects" element={<Projectdeatils/>} /> 
           <Route path="/pricing" element={<Pricing/>} /> 
           <Route path="/faq" element={<Faq/>} /> 
           <Route path="/team-single" element={<Teacherdeatils/>} />  
           <Route path="/404-error" element={<Error/>} /> 
           <Route path="/contact" element={<Contact/>} /> 
          
        </Routes>

        <Footer/>

    </>
  )
}

export default Index