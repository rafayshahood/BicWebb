import React from 'react'
import { Link } from 'react-router-dom'

import img1 from "../../assets/images/CoursesImages/bba2.jpeg"
import img2 from "../../assets/img/icon/cou-icon.png"
import img3 from "../../assets/images/CoursesImages/business2.jpg"
import img4 from "../../assets/images/CoursesImages/sociology.jpg"
import img5 from "../../assets/images/CoursesImages/hnc.jpg"
import img6 from "../../assets/images/CoursesImages/computer-science.jpeg"
import img7 from "../../assets/images/CoursesImages/software-engineering.jpeg"
import img8 from "../../assets/images/CoursesImages/ir.jpeg"
import img9 from "../../assets/images/CoursesImages/psychology.jpg"
import img10 from "../../assets/images/CoursesImages/btec.png"
import img11 from "../../assets/img/icon/cou-icon.png"


function Degrees() {
  return (
    <>
        <section data-animation="fadeInUp animated" data-delay=".2s" className='degrees-section-first'>
            <div className="container">
                <div className="row">
                    <h2 style={{marginBottom:'2%'}}>School of Business</h2>
                </div>
                <div className="row align-items-center">
                <div className="col-lg-4 col-md-6 ">
                    <div className="courses-item mb-30 hover-zoomin">
                    <div className="thumb fix">
                        <Link to="/single-courses">
                            <img src={img1} alt="contact-bg-an-01" />
                        </Link>
                    </div>
                    <div className="courses-content">
                        <div className="cat">
                            <i className="fal fa-graduation-cap" /> Business
                        </div>
                        <h3>
                        <Link to="/single-courses">BBA</Link>
                        </h3>
                        <p>
                        Seamlessly visualize quality ellectual capital without superior
                        collaboration and idea tically
                        </p>
                        <Link to="/single-courses" className="readmore">
                        Read More <i className="fal fa-long-arrow-right" />
                        </Link>
                    </div>
                    <div className="icon">
                        <img src={img2} alt="img" /> 
                    </div>
                    </div>
                </div>

                <div className="col-lg-4 col-md-6 ">
                    <div className="courses-item mb-30 hover-zoomin">
                    <div className="thumb fix">
                        <Link to="/single-courses">
                            <img src={img3} alt="contact-bg-an-01" />
                        </Link>
                    </div>
                    <div className="courses-content">
                        <div className="cat">
                            <i className="fal fa-graduation-cap" /> Business
                        </div>
                        <h3>
                        <Link to="/single-courses">HND</Link>
                        </h3>
                        <p>
                        Seamlessly visualize quality ellectual capital without superior
                        collaboration and idea tically
                        </p>
                        <Link to="/single-courses" className="readmore">
                        Read More <i className="fal fa-long-arrow-right" />
                        </Link>
                    </div>
                    <div className="icon">
                        <img src={img2} alt="img" /> 
                    </div>
                    </div>
                </div>


                <div className="col-lg-4 col-md-6 ">
                    <div className="courses-item mb-30 hover-zoomin">
                    <div className="thumb fix">
                        <Link to="/single-courses">
                            <img src={img5} alt="contact-bg-an-01" />
                        </Link>
                    </div>
                    <div className="courses-content">
                        <div className="cat">
                            <i className="fal fa-graduation-cap" /> Business
                        </div>
                        <h3>
                        <Link to="/single-courses">HNC</Link>
                        </h3>
                        <p>
                        Seamlessly visualize quality ellectual capital without superior
                        collaboration and idea tically
                        </p>
                        <Link to="/single-courses" className="readmore">
                        Read More <i className="fal fa-long-arrow-right" />
                        </Link>
                    </div>
                    <div className="icon">
                        <img src={img2} alt="img" /> 
                    </div>
                    </div>
                </div>

                </div>

            </div>
        </section>


        <section data-animation="fadeInUp animated" data-delay=".2s" className='degrees-section'>
            <div className="container">
                <div className="row">
                    <h2 style={{marginBottom:'2%'}}>School of Computing</h2>
                </div>
                <div className="row align-items-center">
                <div className="col-lg-4 col-md-6 ">
                    <div className="courses-item mb-30 hover-zoomin">
                    <div className="thumb fix">
                        <Link to="/single-courses">
                            <img src={img6} alt="contact-bg-an-01" />
                        </Link>
                    </div>
                    <div className="courses-content">
                        <div className="cat">
                            <i className="fal fa-graduation-cap" /> Sciences
                        </div>
                        <h3>
                        <Link to="/single-courses">Bsc Computer Science</Link>
                        </h3>
                        <p>
                        Seamlessly visualize quality ellectual capital without superior
                        collaboration and idea tically
                        </p>
                        <Link to="/single-courses" className="readmore">
                        Read More <i className="fal fa-long-arrow-right" />
                        </Link>
                    </div>
                    <div className="icon">
                        <img src={img2} alt="img" /> 
                    </div>
                    </div>
                </div>

                </div>

            </div>
        </section>


        <section  data-animation="fadeInUp animated" data-delay=".2s" className='degrees-section'>
            <div className="container">
                <div className="row">
                    <h2 style={{marginBottom:'2%'}}>School of Engineering</h2>
                </div>
                <div className="row align-items-center">
                <div className="col-lg-4 col-md-6 ">
                    <div className="courses-item mb-30 hover-zoomin">
                    <div className="thumb fix">
                        <Link to="/single-courses">
                            <img src={img7} alt="contact-bg-an-01" />
                        </Link>
                    </div>
                    <div className="courses-content">
                        <div className="cat">
                            <i className="fal fa-graduation-cap" /> Sciences
                        </div>
                        <h3>
                        <Link to="/single-courses">Bsc Software Enigneering</Link>
                        </h3>
                        <p>
                        Seamlessly visualize quality ellectual capital without superior
                        collaboration and idea tically
                        </p>
                        <Link to="/single-courses" className="readmore">
                        Read More <i className="fal fa-long-arrow-right" />
                        </Link>
                    </div>
                    <div className="icon">
                        <img src={img2} alt="img" /> 
                    </div>
                    </div>
                </div>

                </div>

            </div>
        </section>


        <section data-animation="fadeInUp animated" data-delay=".2s" className='degrees-section'>
            <div className="container">
                <div className="row">
                    <h2 style={{marginBottom:'2%'}}>School of International Realtions</h2>
                </div>
                <div className="row align-items-center">
                <div className="col-lg-4 col-md-6 ">
                    <div className="courses-item mb-30 hover-zoomin">
                    <div className="thumb fix">
                        <Link to="/single-courses">
                            <img src={img8} alt="contact-bg-an-01" />
                        </Link>
                    </div>
                    <div className="courses-content">
                        <div className="cat">
                            <i className="fal fa-graduation-cap" /> Social Sciences
                        </div>
                        <h3>
                        <Link to="/single-courses">Bsc International Relations</Link>
                        </h3>
                        <p>
                        Seamlessly visualize quality ellectual capital without superior
                        collaboration and idea tically
                        </p>
                        <Link to="/single-courses" className="readmore">
                        Read More <i className="fal fa-long-arrow-right" />
                        </Link>
                    </div>
                    <div className="icon">
                        <img src={img2} alt="img" /> 
                    </div>
                    </div>
                </div>

                </div>

            </div>
        </section>


        <section data-animation="fadeInUp animated" data-delay=".2s" className='degrees-section'>
            <div className="container">
                <div className="row">
                    <h2 style={{marginBottom:'2%'}}>School of Psychology</h2>
                </div>
                <div className="row align-items-center">
                <div className="col-lg-4 col-md-6 ">
                    <div className="courses-item mb-30 hover-zoomin">
                    <div className="thumb fix">
                        <Link to="/single-courses">
                            <img src={img9} alt="contact-bg-an-01" />
                        </Link>
                    </div>
                    <div className="courses-content">
                        <div className="cat">
                            <i className="fal fa-graduation-cap" />Social Sciences
                        </div>
                        <h3>
                        <Link to="/single-courses">Bsc Pscychology</Link>
                        </h3>
                        <p>
                        Seamlessly visualize quality ellectual capital without superior
                        collaboration and idea tically
                        </p>
                        <Link to="/single-courses" className="readmore">
                        Read More <i className="fal fa-long-arrow-right" />
                        </Link>
                    </div>
                    <div className="icon">
                        <img src={img2} alt="img" /> 
                    </div>
                    </div>
                </div>

                </div>

            </div>
        </section>

        <section data-animation="fadeInUp animated" data-delay=".2s" className='degrees-section'>
            <div className="container">
                <div className="row">
                    <h2 style={{marginBottom:'2%'}}>School of Sociology</h2>
                </div>
                <div className="row align-items-center">
                <div className="col-lg-4 col-md-6 ">
                    <div className="courses-item mb-30 hover-zoomin">
                    <div className="thumb fix">
                        <Link to="/single-courses">
                            <img src={img4} alt="contact-bg-an-01" />
                        </Link>
                    </div>
                    <div className="courses-content">
                        <div className="cat">
                            <i className="fal fa-graduation-cap" /> Social Sciences
                        </div>
                        <h3>
                        <Link to="/single-courses">Bsc Sociology</Link>
                        </h3>
                        <p>
                        Seamlessly visualize quality ellectual capital without superior
                        collaboration and idea tically
                        </p>
                        <Link to="/single-courses" className="readmore">
                        Read More <i className="fal fa-long-arrow-right" />
                        </Link>
                    </div>
                    <div className="icon">
                        <img src={img2} alt="img" /> 
                    </div>
                    </div>
                </div>

                </div>

            </div>
        </section>



        <section data-animation="fadeInUp animated" data-delay=".2s" className='degrees-section'>
            <div className="container">
                <div className="row">
                    <h2 style={{marginBottom:'2%'}}>High School</h2>
                </div>
                <div className="row align-items-center">
                <div className="col-lg-4 col-md-6 ">
                    <div className="courses-item mb-30 hover-zoomin">
                    <div className="thumb fix">
                        <Link to="/single-courses">
                            <img src={img5} alt="contact-bg-an-01" />
                        </Link>
                    </div>
                    <div className="courses-content">
                        <div className="cat">
                            <i className="fal fa-graduation-cap" /> Business
                        </div>
                        <h3>
                        <Link to="/single-courses">Btc Level 3</Link>
                        </h3>
                        <p>
                        Seamlessly visualize quality ellectual capital without superior
                        collaboration and idea tically
                        </p>
                        <Link to="/single-courses" className="readmore">
                        Read More <i className="fal fa-long-arrow-right" />
                        </Link>
                    </div>
                    <div className="icon">
                        <img src={img2} alt="img" /> 
                    </div>
                    </div>
                </div>


                <div className="col-lg-4 col-md-6 ">
                    <div className="courses-item mb-30 hover-zoomin">
                    <div className="thumb fix">
                        <Link to="/single-courses">
                            <img src={img5} alt="contact-bg-an-01" />
                        </Link>
                    </div>
                    <div className="courses-content">
                        <div className="cat">
                            <i className="fal fa-graduation-cap" /> Business
                        </div>
                        <h3>
                        <Link to="/single-courses">International Foundation Year</Link>
                        </h3>
                        <p>
                        Seamlessly visualize quality ellectual capital without superior
                        collaboration and idea tically
                        </p>
                        <Link to="/single-courses" className="readmore">
                        Read More <i className="fal fa-long-arrow-right" />
                        </Link>
                    </div>
                    <div className="icon">
                        <img src={img2} alt="img" /> 
                    </div>
                    </div>
                </div>

                </div>

            </div>
        </section>
    </>
  )
}

export default Degrees