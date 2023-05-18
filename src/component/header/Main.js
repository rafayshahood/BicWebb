import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import HeaderTopBar from './componenets/HeaderTopBar';
import bicLogo from "../../assets/img/logo/logo.png"



    const AllCampusSubMenu = (props) => {
        return(
            <ul>
            <li>
            <Link to={`/${props.campusName}/FacultyandStaff`}>Faculty and Staff</Link>
            </li>
            <li>
            <Link to={`/${props.campusName}/rectors-message`}>Rector's Message</Link>
            </li>
            <li>
            <Link to={`/${props.campusName}/news-and-events`}>News and Events</Link>
            </li>
            <li>
            <Link to={`/${props.campusName}/gallery`}>Gallery</Link>
            </li>
            <li>
            <Link to={`/${props.campusName}/research`}>Research</Link>
            </li>
            <li>
            <Link to={`/${props.campusName}/history`}>History</Link>
            </li>
            <li>
            <Link to={`/${props.campusName}/degrees`}>Degrees</Link>
            </li>
        </ul>
        )
    }


function Main() {
  return (
    <>
        <header className="header-area header-three">
            <HeaderTopBar/>

            <div id="header-sticky" className="menu-area">
                <div className="container">
                    <div className="second-menu">
                        <div className="row align-items-center">
                            <div className="col-xl-2 col-lg-2">
                                <div className="logo">
                                <Link to="/">
                                    <img src={bicLogo} alt="logo" />
                                </Link>
                                </div>
                            </div>

                        <div className="col-xl-7 col-lg-7">
                            <div className="main-menu text-right text-xl-right">

                            <nav id="mobile-menu">
                                <ul>
                                <li className="has-sub">
                                    <Link to="/BicWebb/">Home</Link>
                                </li>
                                <li className="has-sub">
                                    <Link to="/courses">Admissions</Link>
                                    <ul>
                                        <li>
                                            <Link to="/Offered-Programs">Offered Programs</Link>
                                        </li>
                                        <li>
                                            <Link to="/eligibility-criteria">Eligibility Criteria</Link>
                                        </li>
                                        <li>
                                            <Link to="/how-to-apply">How to Apply</Link>
                                            {/* {" vdasvsd"} */}
                                        </li>
                                        <li>
                                            {" "}
                                            <Link to="/fee-structure">Fee Structure</Link>
                                        </li>
                                        <li>
                                            {" "}
                                            <Link to="/scholarships">Scholaraships/Financial Aid</Link>
                                        </li>
                                        <li>
                                            {" "}
                                            <Link to="/prospectus">Prospectus</Link>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <Link to="/epcad">EPCAD</Link>
                                </li>
                                <li className="has-sub">
                                    <Link to="/courses">Campuses</Link>
                                    <ul>
                                        <li className='has-sub'>
                                            <Link>Beaconhouse International College - Islamabad</Link>
                                            <AllCampusSubMenu campusName="Islamabad"/>
                                        </li>
                                        <li className='has-sub'>
                                            <Link>Beaconhouse International College - Faisalabad</Link>
                                            <AllCampusSubMenu campusName="Faisalabad"/>
                                        </li>
                                         <li className='has-sub'>
                                            <Link>Beaconhouse International College - Lahore</Link>
                                            <AllCampusSubMenu campusName="Lahore"/>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <Link to="/careers">Careers</Link>
                                </li>
                                <li className="has-sub">
                                    <Link to="#">Students</Link>
                                    <ul>
                                    <li>
                                        <Link to="/code-of-conduct">Code of Conduct</Link>
                                    </li>
                                    <li>
                                        <Link to="/academic-calendar">Academic Calendar</Link>
                                    </li>
                                    <li>
                                        <Link to="/financial-rules">Financial Rules</Link>
                                    </li>
                                    <li>
                                        <Link to="/rules-and-regulations">Rules and Regulations</Link>
                                    </li>
                                    <li>
                                        <Link to="/societies">Societies</Link>
                                    </li>
                                    </ul>
                                </li>
                                <li className='has-sub'>
                                    <Link to="/about">About Us</Link>
                                    <ul>
                                        <li>
                                            <Link to="/about">History</Link>
                                        </li>
                                        <li>
                                            <Link to="/about">Ceo's Message</Link>
                                        </li>
                                        <li>
                                            <Link to="/about">CGMU's Meesage</Link>
                                        </li>
                                        <li>
                                            <Link to="/about">Book a tour</Link>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <Link to="/contact">Contact</Link>
                                </li>
                                </ul>
                            </nav>
                            </div>
                        </div>

                        <div className="col-xl-3 col-lg-3 text-right d-none d-lg-block text-right text-xl-right">
                            <ul>
                                <li>
                                <div className="second-header-btn">
                                    <Link to="/contact" className="btn"> admission open </Link>
                                </div>
                                </li>
                            </ul>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    </>
  )
}

export default Main