import React from 'react'
import { Link } from 'react-router-dom'

import img1 from '../../assets/img/bg/an-img-17.png'
import img2 from '../../assets/img/bg/slider_shape03.png'
import img3 from "../../assets/images/FacultyComponentImages/SirFawad.jpeg"
import img4 from "../../assets/images/FacultyComponentImages/SirNafees.jpeg"
import img5 from "../../assets/images/FacultyComponentImages/SirFaraz.jpeg"
import img6 from "../../assets/images/FacultyComponentImages/SirUsama.jpeg"


function Teachers() {
  return (
    <>
        <section className="team-area fix p-relative pt-150 pb-80" style={{ background: "#f7f9ff" }} >
            <div className="animations-06">
                <img src={img1} alt="an-img-01" />
            </div>
            <div className="animations-09">
                <img src={img2} alt="contact-bg-an-01" />
            </div>
            <div className="container">
                <div className="row">
                <div className="col-xl-3 col-md-6">
                    <div className="single-team mb-40">
                    <div className="team-thumb">
                        <div className="brd">
                        <Link to="/team-single">
                            {" "}
                            <img src={img3} alt="img" /> 
                        </Link>
                        </div>
                    </div>
                    <div className="team-info">
                        <h4>
                        <Link to="/team-single">Fawad Naseer</Link>
                        </h4>
                        <p>Head of Computer Science</p>
                        <div className="team-social">
                        <ul>
                            <li>
                            <Link to="#">
                                <i className="fab fa-facebook-f" />
                            </Link>
                            </li>
                            <li>
                            <Link to="#">
                                <i className="fab fa-instagram" />
                            </Link>
                            </li>
                            <li>
                            {" "}
                            <Link to="#">
                                <i className="fab fa-twitter" />
                            </Link>
                            </li>
                        </ul>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="col-xl-3 col-md-6">
                    <div className="single-team mb-40">
                    <div className="team-thumb">
                        <div className="brd">
                        <Link to="/team-single">
                            {" "}
                            <img src={img4} alt="img" />
                        </Link>
                        </div>
                    </div>
                    <div className="team-info">
                        <h4>
                        <Link to="/team-single">Nafees</Link>
                        </h4>
                        <p>Data Science Teacher</p>
                        <div className="team-social">
                        <ul>
                            <li>
                            <Link to="#">
                                <i className="fab fa-facebook-f" />
                            </Link>
                            </li>
                            <li>
                            <Link to="#">
                                <i className="fab fa-instagram" />
                            </Link>
                            </li>
                            <li>
                            {" "}
                            <Link to="#">
                                <i className="fab fa-twitter" />
                            </Link>
                            </li>
                        </ul>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="col-xl-3 col-md-6">
                    <div className="single-team mb-40">
                    <div className="team-thumb">
                        <div className="brd">
                        <Link to="/team-single">
                            {" "}
                            <img src={img5} alt="img" />
                        </Link>
                        </div>
                    </div>
                    <div className="team-info">
                        <h4>
                        <Link to="/team-single">Faraz Rasool</Link>
                        </h4>
                        <p>Business Teacher</p>
                        <div className="team-social">
                        <ul>
                            <li>
                            <Link to="#">
                                <i className="fab fa-facebook-f" />
                            </Link>
                            </li>
                            <li>
                            <Link to="#">
                                <i className="fab fa-instagram" />
                            </Link>
                            </li>
                            <li>
                            {" "}
                            <Link to="#">
                                <i className="fab fa-twitter" />
                            </Link>
                            </li>
                        </ul>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="col-xl-3 col-md-6">
                    <div className="single-team mb-40">
                    <div className="team-thumb">
                        <div className="brd">
                        <Link to="/team-single">
                            {" "}
                            <img src={img6} alt="img" />
                        </Link>
                        </div>
                    </div>
                    <div className="team-info">
                        <h4>
                        <Link to="/team-single">Usama Khalid</Link>
                        </h4>
                        <p>Database Expert</p>
                        <div className="team-social">
                        <ul>
                            <li>
                            <Link to="#">
                                <i className="fab fa-facebook-f" />
                            </Link>
                            </li>
                            <li>
                            <Link to="#">
                                <i className="fab fa-instagram" />
                            </Link>
                            </li>
                            <li>
                            {" "}
                            <Link to="#">
                                <i className="fab fa-twitter" />
                            </Link>
                            </li>
                        </ul>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Teachers