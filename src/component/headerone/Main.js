import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import HeaderTopBar from './componenets/HeaderTopBar';



    const AllCampusSubMenu = () => {
        return(
            <ul>
            <li>
            <Link to="/courses-2">Faculty and Staff</Link>
            </li>
            <li>
            <Link to="/courses-2">Rector's Message</Link>
            </li>
            <li>
            <Link to="/courses-2">News and Events</Link>
            </li>
            <li>
            <Link to="/courses-2">Gallery</Link>
            </li>
            <li>
            <Link to="/courses-2">Research</Link>
            </li>
            <li>
            <Link to="/courses-2">History</Link>
            </li>
            <li>
            <Link to="/courses-2">Degree</Link>
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
                                    <img src="assets/img/logo/logo.png" alt="logo" />
                                </Link>
                                </div>
                            </div>

                        <div className="col-xl-7 col-lg-7">
                            <div className="main-menu text-right text-xl-right">
                                
                                
                            <nav id="mobile-menu">
                                <ul>
                                <li className="has-sub">
                                    <Link to="/">Home</Link>
                                </li>
                                <li className="has-sub">
                                    <Link to="/courses">Admissions</Link>
                                    <ul>
                                        <li className='has-sub'>
                                            <Link to="/offered-programs">Offered Programs</Link>
                                            <ul>
                                                <li>
                                                <Link to="/courses-2">school of Computing</Link>
                                                </li>
                                                <li>
                                                <Link to="/courses-2">school of Engineering</Link>
                                                </li>
                                                <li>
                                                <Link to="/courses-2">school of Business</Link>
                                                </li>
                                                <li>
                                                <Link to="/courses-2">school of International Relations</Link>
                                                </li>
                                                <li>
                                                <Link to="/courses-2">school of Pscychology</Link>
                                                </li>
                                                <li>
                                                <Link to="/courses-2">school of Sociology</Link>
                                                </li>
                                                <li>
                                                <Link to="/courses-2">International Foundation Year</Link>
                                                </li>
                                                <li>
                                                <Link to="/courses-2">Btec Level 3</Link>
                                                </li>
                                            </ul>
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
                                            <Link to="/courses">Beaconhouse International College - Islamabad</Link>
                                            <AllCampusSubMenu/>
                                        </li>
                                        <li className='has-sub'>
                                            <Link to="/courses">Beaconhouse International College - Faisalabad</Link>
                                            <AllCampusSubMenu/>
                                        </li>
                                         <li className='has-sub'>
                                            <Link to="/courses">Beaconhouse International College - Lahore</Link>
                                            <AllCampusSubMenu/>
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
                                        <Link to="/event">Code of Conduct</Link>
                                    </li>
                                    <li>
                                        <Link to="/single-event">Academic Calendar</Link>
                                    </li>
                                    <li>
                                        <Link to="/projects">Financial Rules</Link>
                                    </li>
                                    <li>
                                        <Link to="/pricing">Rules and Regulations</Link>
                                    </li>
                                    <li>
                                        <Link to="/faq">Societies</Link>
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