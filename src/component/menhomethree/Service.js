import React from 'react'
import { Link } from 'react-router-dom'

function Service() {
  return (
    <>
        <section className="service-details-three p-relative fix z-class-two">
            <div className="container">
                <div className="row sbox">
                <div className="col-lg-3 col-md-6 col-sm-12">
                    <div className="services-box mb-30 text-center wow fadeInUp animated" data-animation="fadeInUp" data-delay=".4s" >
                    <div className="sr-contner">
                        <div className="icon">
                        <img src="assets/img/icon/sve-icon7.png" alt="icon01" />
                        </div>
                        <div className="text">
                        <h3>
                            <Link to="/about">Education Services</Link>
                        </h3>
                        <p>
                            Seamlessly visualize quality ellectual capital without superior.
                        </p>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12">
                    <div className="services-box mb-30 text-center wow fadeInUp animated" data-animation="fadeInUp" data-delay=".4s" >
                    <div className="sr-contner">
                        <div className="icon">
                        <img src="assets/img/icon/sve-icon8.png" alt="icon01" />
                        </div>
                        <div className="text">
                        <h3>
                            <Link to="/about">Academics</Link>
                        </h3>
                        <p>
                            Seamlessly visualize quality ellectual capital without superior.
                        </p>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12">
                    <div className="services-box mb-30 text-center wow fadeInUp animated" data-animation="fadeInUp" data-delay=".4s" >
                    <div className="sr-contner">
                        <div className="icon">
                        <img src="assets/img/icon/sve-icon9.png" alt="icon01" />
                        </div>
                        <div className="text">
                        <h3>
                            <Link to="/about">Athletics</Link>
                        </h3>
                        <p>
                            Seamlessly visualize quality ellectual capital without superior.
                        </p>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12">
                    <div className="services-box mb-30 text-center wow fadeInUp animated" data-animation="fadeInUp" data-delay=".4s" >
                    <div className="sr-contner">
                        <div className="icon">
                        <img src="assets/img/icon/sve-icon10.png" alt="icon01" />
                        </div>
                        <div className="text">
                        <h3>
                            <Link to="/about">School Life</Link>
                        </h3>
                        <p>
                            Seamlessly visualize quality ellectual capital without superior.
                        </p>
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

export default Service