import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import HeaderTopBar from './componenets/HeaderTopBar';
import bicLogo from "../../assets/img/logo/logo.png"



    const AllCampusSubMenu = (props) => {
        const styles = {
            display: props.mobile ? 'block' : 'inline',

          };
        return(
            <ul style={styles}>
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
    const [mobile, setmobile] = useState(false);
    const [Admissions, setAdmissions] = useState(false);
    const [Campuses, setCampuses] = useState(false);
    const [CampusesSub, setCampusesSub] = useState(false);
    const [Students, setStudents] = useState(false);
    const [About, setAbout] = useState(false);
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
                                <li className='has-sub'>
                                    <Link to="/about">About Us</Link>
                                    <ul>
                                        <li>
                                            <Link to="/history">History</Link>
                                        </li>
                                        <li>
                                            <Link to="/ceo-message">Ceo's Message</Link>
                                        </li>
                                        <li>
                                            <Link to="/cgmu-message">CGMU's Meesage</Link>
                                        </li>
                                        <li>
                                            <Link to="/book-a-tour">Book a tour</Link>
                                        </li>
                                    </ul>
                                </li>
                                <li className="has-sub">
                                    <Link>Admissions</Link>
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
                                    <Link>Campuses</Link>
                                    <ul>
                                        <li className='has-sub'>
                                            <Link>Islamabad Campus</Link>
                                            <AllCampusSubMenu campusName="Islamabad" mobile="false"/>
                                        </li>
                                        <li className='has-sub'>
                                            <Link>Faisalabad Campus</Link>
                                            <AllCampusSubMenu campusName="Faisalabad" mobile="false"/>
                                        </li>
                                         <li className='has-sub'>
                                            <Link>Lahore Campus</Link>
                                            <AllCampusSubMenu campusName="Lahore" mobile="false"/>
                                        </li>
                                    </ul>
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
                                <li>
                                    <Link to="/careers">Careers</Link>
                                </li>
                                <li>
                                    <Link to="/contact">Contact Us</Link>
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
                        <div className="col-12">
                            <div className="mobile-menu mean-container">
                                <div className="mean-bar">
                                    <a href="#nav" onClick={() => setmobile(!mobile)} className={`meanmenu-reveal ${mobile && "meanclose"}`} style={{ right: 0, left: "auto", textAlign: "center", textIndent: 0, fontSize: 18 }} >
                                        { mobile ? "X" : <span><span><span></span></span></span> }
                                    </a>
                                    {mobile && 
                                        <nav className="mean-nav">
                                                <ul style={{ display : "block" }}>
                                                    <li>
                                                        <Link to="/BicWebb/">Home</Link>
                                                    </li>
                                                    <li className="has-sub">
                                                    <Link>Admissions</Link>
                                                    {Admissions && 
                                                        <ul style={{ display: "block" }}>
                                                            <li>
                                                                <Link to="/Offered-Programs">Offered Programs</Link>
                                                            </li>
                                                            <li>
                                                                <Link to="/eligibility-criteria">Eligibility Criteria</Link>
                                                            </li>
                                                            <li>
                                                                <Link to="/how-to-apply">How to Apply</Link>
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
                                                    }

                                                    <a className={`mean-expand ${mobile && "mean-clicked"}`}  onClick={() => { setAdmissions(!Admissions) }} href="#" style={{ fontSize: 18 }}>
                                                        {Admissions ? "-" : "+"}
                                                    </a>
                                                    </li>

                                                    <li>
                                                        <Link to="/epcad">EPCAD</Link>
                                                    </li>
                                                    <li className="has-sub">
                                                    <a href="#">Campuses</a>
                                                    {Campuses && 
                                                        <ul style={{ display: "block" }}>
                                                            <li className='has-sub'>
                                                                <a href='#'>Beaconhouse International College - Islamabad</a>
                                                                {CampusesSub && 
                                                                    <ul>
                                                                        <AllCampusSubMenu campusName="Islamabad" mobile="true" />
                                                                    </ul>
                                                                }

                                                                <a className={`mean-expand ${mobile && "mean-clicked"}`}  onClick={() => { setCampusesSub(!CampusesSub) }} href="#" style={{ fontSize: 18 }}>
                                                                    {CampusesSub ? "-" : "+"}
                                                                </a>
                                                                
                                                            </li>
                                                            <li className='has-sub'>
                                                                <a href='#'>Beaconhouse International College - Faisalabad</a>
                                                                {CampusesSub && 
                                                                    <ul>
                                                                        <AllCampusSubMenu campusName="Faisalabad" mobile="true" />
                                                                    </ul>
                                                                }

                                                                <a className={`mean-expand ${mobile && "mean-clicked"}`}  onClick={() => { setCampusesSub(!CampusesSub) }} href="#" style={{ fontSize: 18 }}>
                                                                    {CampusesSub ? "-" : "+"}
                                                                </a>                                                            </li>
                                                            <li className='has-sub'>
                                                                <a href='#'>Beaconhouse International College - Lahore</a>
                                                                {CampusesSub && 
                                                                    <ul>
                                                                        <AllCampusSubMenu campusName="Lahore" mobile="true" />
                                                                    </ul>
                                                                }

                                                                <a className={`mean-expand ${mobile && "mean-clicked"}`}  onClick={() => { setCampusesSub(!CampusesSub) }} href="#" style={{ fontSize: 18 }}>
                                                                    {CampusesSub ? "-" : "+"}
                                                                </a>                                                            </li>
                                                        </ul>
                                                    }
                                                    <a className={`mean-expand ${mobile && "mean-clicked"}`}  onClick={() => { setCampuses(!Campuses) }} href="#" style={{ fontSize: 18 }}>
                                                        {Campuses ? "-" : "+"}
                                                    </a>              
                                                    </li>
                                                    <li>
                                                        <Link to="/careers">Careers</Link>
                                                    </li> 
                                                    <li className="has-sub">
                                                    <Link>Students</Link>
                                                    {Students && 
                                                    <ul style={{ display: "block" }}>
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
                                                    }
                                                    <a className={`mean-expand ${mobile && "mean-clicked"}`}  onClick={() => { setStudents(!Students) }} href="#" style={{ fontSize: 18 }}>
                                                        {Students ? "-" : "+"}
                                                    </a>
                                                    </li>

                                                    <li className="has-sub">
                                                    <Link>About Us</Link>
                                                    {About && 
                                                    <ul style={{ display: "block" }}>
                                                        <li>
                                                            <Link to="/history">History</Link>
                                                        </li>
                                                        <li>
                                                            <Link to="/ceo-message">Ceo's Message</Link>
                                                        </li>
                                                        <li>
                                                            <Link to="/cgmu-message">CGMU's Meesage</Link>
                                                        </li>
                                                        <li>
                                                            <Link to="/book-a-tour">Book a tour</Link>
                                                        </li>
                                                    </ul>
                                                    }
                                                    <a className={`mean-expand ${mobile && "mean-clicked"}`}  onClick={() => { setAbout(!About) }} href="#" style={{ fontSize: 18 }}>
                                                        {About ? "-" : "+"}
                                                    </a>
                                                    </li>

                                                    <li className="mean-last">
                                                        <Link to="/contact">Contact</Link>
                                                    </li>
                                                </ul>
                                        </nav>
                                    }
                                </div>
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