import React from 'react'
import { Link } from 'react-router-dom'
import background from '../../assets/img/bg/footer-bg.png'
import img1 from '../../assets/img/blog/s-blogimg-01.png'
import img2 from '../../assets/img/blog/s-blogimg-02.png'
import img3 from '../../assets/img/logo/f_logo.png'


function Main() {
  return (
    <>
        <footer className="footer-bg footer-p pt-90" style={{ backgroundColor: "#125875", backgroundImage: `url(${background})` }} >
            <div className="footer-top pb-70">
                <div className="container">
                <div className="row justify-content-between">
                    <div className="col-xl-4 col-lg-4 col-sm-6">
                    <div className="footer-widget mb-30">
                        <div className="f-widget-title">
                        <h2>About Us</h2>
                        </div>
                        <div className="f-contact">
                        <p>
                        Beaconhouse is one of the most trusted names in the sphere of education. With 45 years of excellence in the field, it's the first education system of its kind that helped revolutionize learning in Pakistan by bringing excellence to primary and intermediate levels of schooling. Now Beaconhouse has expanded its horizons into graduate and postgraduate levels, in the form of Beaconhouse International College.
                        </p>
                        </div>
                        <div className="footer-social mt-10">
                            <a href="#">
                                <i className="fab fa-facebook-f" />
                            </a>
                            <a href="#">
                                <i className="fab fa-instagram" />
                            </a>
                            <a href="#">
                                <i className="fab fa-twitter" />
                            </a>
                        </div>
                    </div>
                    </div>
                    <div className="col-xl-2 col-lg-2 col-sm-6">
                    <div className="footer-widget mb-30">
                        <div className="f-widget-title">
                        <h2>Our Links</h2>
                        </div>
                        <div className="footer-link">
                        <ul>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/about"> About</Link>
                            </li>
                            <li>
                                <Link to="/courses">Courses</Link>
                            </li>
                            <li>
                                <Link to="/contact"> Contact Us</Link>
                            </li>
                            <li>
                                <Link to="/blog">Blog </Link>
                            </li>
                        </ul>
                        </div>
                    </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-sm-6">
                    <div className="footer-widget mb-30">
                        <div className="f-widget-title">
                        <h2>Latest Post</h2>
                        </div>
                        <div className="recent-blog-footer">
                        <ul>
                            <li>
                            <div className="thum">
                                {" "}
                                <img src={img1} alt="img" />
                            </div>
                            <div className="text">
                                {" "}
                                <Link to="/blog-details">
                                Nothing impossble to need hard work
                                </Link>
                                <span>7 March, 2020</span>
                            </div>
                            </li>
                            <li>
                            <div className="thum">
                                {" "}
                                <img src={img2} alt="img" />
                            </div>
                            <div className="text">
                                {" "}
                                <Link to="/blog-details">
                                Nothing impossble to need hard work
                                </Link>
                                <span>7 March, 2020</span>
                            </div>
                            </li>
                        </ul>
                        </div>
                    </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-sm-6">
                    <div className="footer-widget mb-30">
                        <div className="f-widget-title">
                        <h2>Contact Us</h2>
                        </div>
                        <div className="f-contact">
                        <ul>
                            <li>
                            <i className="icon fal fa-phone" />
                            <span>
                                <Link to="tel:+14440008888">+1 (444) 000-8888</Link>
                                <br />
                                <Link to="tel:+917052101786">+91 7052 101 786</Link>
                            </span>
                            </li>
                            <li>
                            <i className="icon fal fa-envelope" />
                            <span>
                                <Link to="mailto:info@example.com">info@example.com</Link>
                                <br />
                                <Link to="mailto:help@example.com">help@example.com</Link>
                            </span>
                            </li>
                            <li>
                            <i className="icon fal fa-map-marker-check" />
                            <span>
                                1247/Plot No. 39, 15th Phase,
                                <br /> LHB Colony, Kanpur
                            </span>
                            </li>
                        </ul>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            <div className="copyright-wrap">
                <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-4">
                    <div className="copy-text">
                        <Link to="/">
                            <img src={img3} alt="img" />
                        </Link>
                    </div>
                    </div>
                    <div className="col-lg-4 text-center"></div>
                    <div className="col-lg-4 text-right text-xl-right">
                        Developed by Rafay Shahood . All rights reserved.
                    </div>
                </div>
                </div>
            </div>
        </footer>
    </>
  )
}

export default Main