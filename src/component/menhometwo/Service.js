import React from 'react'
import { Link } from 'react-router-dom'

function Service() {
  return (
    <>
        <section className="service-details-one pt-120 pb-90 p-relative fix" style={{ background: "url(assets/img/bg/feature-bg.png) no-repeat", backgroundSize: "cover" }} >
            <div className="container">
                <div className="row">
                <div className="col-lg-4 col-md-6 col-sm-12">
                    <div className="services-box mb-30 text-center wow fadeInUp animated" data-animation="fadeInUp" data-delay=".4s" >
                    <div className="sr-contner">
                        <div className="icon">
                            <img src="assets/img/icon/sve-icon1.png" alt="icon01" />
                        </div>
                        <div className="text">
                        <h3>Education Services</h3>
                        <p>
                            Seamlessly visualize quality ellectual capital without superior
                            collaboration and idea such and asser sharing listically
                        </p>
                        <Link to="/single-courses" className="readmore">
                            Read More <i className="fal fa-long-arrow-right" />
                        </Link>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12">
                    <div className="services-box mb-30 text-center wow fadeInUp animated" data-animation="fadeInUp" data-delay=".4s" >
                    <div className="sr-contner">
                        <div className="icon">
                            <img src="assets/img/icon/sve-icon2.png" alt="icon01" />
                        </div>
                        <div className="text">
                        <h3>Expert Teachers</h3>
                        <p>
                            Seamlessly visualize quality ellectual capital without superior
                            collaboration and idea such and asser sharing listically
                        </p>
                        <Link to="/single-courses" className="readmore">
                            Read More <i className="fal fa-long-arrow-right" />
                        </Link>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12">
                    <div className="services-box mb-30 text-center wow fadeInUp animated" data-animation="fadeInUp" data-delay=".4s" >
                    <div className="sr-contner">
                        <div className="icon">
                            <img src="assets/img/icon/sve-icon3.png" alt="icon01" />
                        </div>
                        <div className="text">
                        <h3>Music &amp; Art</h3>
                        <p>
                            Seamlessly visualize quality ellectual capital without superior
                            collaboration and idea such and asser sharing listically
                        </p>
                        <Link to="/single-courses" className="readmore">
                            Read More <i className="fal fa-long-arrow-right" />
                        </Link>
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