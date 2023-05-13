import React from 'react'
import { Link } from 'react-router-dom'

function Teacher() {
  return (
    <>
        <section className="team-area fix p-relative pt-120 pb-80" style={{ background: "#f7f9ff" }} >
            <div className="animations-06">
                <img src="assets/img/bg/an-img-17.png" alt="an-img-01" />
            </div>
            <div className="animations-09">
                <img src="assets/img/bg/slider_shape03.png" alt="contact-bg-an-01" />
            </div>
            <div className="container">
                <div className="row">
                <div className="col-lg-12 p-relative">
                    <div className="section-title center-align mb-50 text-center wow fadeInDown animated" data-animation="fadeInDown" data-delay=".4s" >
                    <h5>
                        <i className="fal fa-graduation-cap" /> Our Teacher
                    </h5>
                    <h2>Our Expert Teacher</h2>
                    </div>
                </div>
                </div>
                <div className="row">
                <div className="col-xl-3 col-md-6">
                    <div className="single-team mb-40">
                    <div className="team-thumb">
                        <div className="brd">
                        <Link to="/team-single">
                            {" "}
                            <img src="assets/img/team/team09.png" alt="img" />
                        </Link>
                        </div>
                    </div>
                    <div className="team-info">
                        <h4>
                        <Link to="/team-single">Howard Holmes</Link>
                        </h4>
                        <p>CEO &amp; Founder</p>
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
                            <img src="assets/img/team/team10.png" alt="img" />
                        </Link>
                        </div>
                    </div>
                    <div className="team-info">
                        <h4>
                        <Link to="/team-single">Ella Thompson</Link>
                        </h4>
                        <p>Kids Teacher</p>
                        <div className="team-social">
                        <ul>
                            <li>
                            <a href="#">
                                <i className="fab fa-facebook-f" />
                            </a>
                            </li>
                            <li>
                            <a href="#">
                                <i className="fab fa-instagram" />
                            </a>
                            </li>
                            <li>
                            {" "}
                            <a href="#">
                                <i className="fab fa-twitter" />
                            </a>
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
                            <img src="assets/img/team/team11.png" alt="img" />
                        </Link>
                        </div>
                    </div>
                    <div className="team-info">
                        <h4>
                        <Link to="/team-single">Vincent Cooper</Link>
                        </h4>
                        <p>Kids Teacher</p>
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
                            <img src="assets/img/team/team12.png" alt="img" />
                        </Link>
                        </div>
                    </div>
                    <div className="team-info">
                        <h4>
                        <Link to="/team-single">Danielle Bryant</Link>
                        </h4>
                        <p>Kids Teacher</p>
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

export default Teacher