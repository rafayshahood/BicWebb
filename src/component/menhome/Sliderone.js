import React from 'react'
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import Background from '../../assets/img/slider/slider1.jpg'
import Backgroundtwo from '../../assets/img/slider/slider4.jpeg'
import Backgroundthree from '../../assets/img/slider/slider3.jpeg'



function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <button type="button" className={ `slick-next ${className}`} style={{ ...style }} onClick={onClick} ><i className="far fa-angle-right"></i></button>
    );
}
  
function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
    <button type="button" className={ `slick-prev ${className}`} style={{ ...style }} onClick={onClick} ><i className="far fa-angle-left"></i></button>
      
    );
}

function Sliderone() {

    const settings = {
        autoplay: true,
		autoplaySpeed: 10000,
		dots:false ,
		fade: true,
		arrows: true,
		prevArrow: <SamplePrevArrow/>,
		nextArrow: <SampleNextArrow/>,
		responsive: [
			{ breakpoint: 1200, settings: { dots: false, arrows: false } }
		]
      };


  return (
    <>
        <section id="home" className="slider-area fix p-relative">
            <Slider className="slider-active" style={{ background: "#141b22" }} {...settings}>
                <div>
                    <div className="single-slider slider-bg"  style={{ backgroundImage: `url(${Background})` , backgroundSize: "cover" }} >
                    <div className="container">
                        <div className="row">
                        <div className="col-lg-7 col-md-7">
                            <div className="slider-content s-slider-content mt-130">
                            <h5 data-animation="fadeInUp" data-delay=".4s">
                                Welcome to BIC Official Website
                            </h5>
                            <h3 data-animation="fadeInUp" data-delay=".4s">
                                Insightful and inspiring briefing from David Hodgson on NCUK's global impact in higher education! 
                            </h3>
                            <p data-animation="fadeInUp" data-delay=".6s">
                            Excited to see how we can help students worldwide achieve their academic goals.
                            </p>
                            <div className="slider-btn mt-30">
                                <Link to="/about" className="btn ss-btn mr-15" data-animation="fadeInLeft" data-delay=".4s" >
                                    Discover More <i className="fal fa-long-arrow-right" />
                                </Link>
                                <Link to="/contact" className="btn ss-btn active" data-animation="fadeInLeft" data-delay=".4s" >
                                    Contact Us <i className="fal fa-long-arrow-right" />
                                </Link>
                            </div>
                            </div>
                        </div>
                        <div className="col-lg-5 col-md-5 p-relative"></div>
                        </div>
                    </div>
                    </div>
                </div>



                <div>    
                <div className="single-slider slider-bg" style={{ backgroundImage: `url(${Backgroundtwo})`, backgroundSize: "cover" }} >
                    <div className="container">
                        <div className="row">
                        <div className="col-lg-7 col-md-7">
                            <div className="slider-content s-slider-content mt-130">
                            <h5 data-animation="fadeInUp" data-delay=".4s">
                            Welcome to BIC Official Website
                            </h5>
                            <h3 data-animation="fadeInUp" data-delay=".4s">
                                Introducing EPCAD - Employment, Placement, and Career Advancement Department
                            </h3>
                            <p data-animation="fadeInUp" data-delay=".6s">
                            Attention all students! We are thrilled to announce the launch of Employment, Placement, and Career Advancement Department (EPCAD) at Beaconhouse 
                            International College! we are here to guide you every step of the way. 
                            Join us in this exciting journey towards your professional success!
                            </p>
                            <div className="slider-btn mt-30">
                                <Link to="/about" className="btn ss-btn mr-15" data-animation="fadeInLeft" data-delay=".4s" >
                                Discover More <i className="fal fa-long-arrow-right" />
                                </Link>
                                <Link to="/contact" className="btn ss-btn active" data-animation="fadeInLeft" data-delay=".4s" >
                                Contact Us <i className="fal fa-long-arrow-right" />
                                </Link>
                            </div>
                            </div>
                        </div>
                        <div className="col-lg-5 col-md-5 p-relative"></div>
                        </div>
                    </div>
                    
                </div>
                </div>

                <div>
                    <div className="single-slider slider-bg"  style={{ backgroundImage: `url(${Backgroundthree})` , backgroundSize: "cover" }} >
                    <div className="container">
                        <div className="row">
                        <div className="col-lg-7 col-md-7">
                            <div className="slider-content s-slider-content mt-130">
                            <h5 data-animation="fadeInUp" data-delay=".4s">
                                Welcome to BIC Official Website
                            </h5>
                            <h3 data-animation="fadeInUp" data-delay=".4s">
                                Insightful and inspiring briefing from David Hodgson on NCUK's global impact in higher education! 
                            </h3>
                            <p data-animation="fadeInUp" data-delay=".6s">
                            Beaconhouse Group's School Evaluation Unit visited the BIC LHR campus under the supervision of Ms. Afshan Khalid, Deputy Director 
                            and Head of School Evaluation. During their visit they reviewed academic and non academic practices at BIC. The purpose of the visit was
                            to ensure Quality Assurance procedures and practices. We appreciate your support in developing the quality assurance department at BIC.
                            </p>
                            <div className="slider-btn mt-30">
                                <Link to="/about" className="btn ss-btn mr-15" data-animation="fadeInLeft" data-delay=".4s" >
                                Discover More <i className="fal fa-long-arrow-right" />
                                </Link>
                                <Link to="/contact" className="btn ss-btn active" data-animation="fadeInLeft" data-delay=".4s" >
                                Contact Us <i className="fal fa-long-arrow-right" />
                                </Link>
                            </div>
                            </div>
                        </div>
                        <div className="col-lg-5 col-md-5 p-relative"></div>
                        </div>
                    </div>
                    </div>
                </div>

            </Slider>
        </section>

        <section className="service-details-two p-relative">
            <div className="container">
                <div className="row">
                <div className="col-lg-4 col-md-12 col-sm-12">
                    <div className="services-box07">
                    <div className="sr-contner">
                        <div className="icon">
                            <img src="assets/img/icon/sve-icon4.png" alt="icon01" />
                        </div>
                        <div className="text">
                        <h5>
                            <Link to="/about">Education Services</Link>
                        </h5>
                        <p>
                            Seamlessly visualize quality ellectual capital without superior
                            collaboration and idea sharing listically
                        </p>
                        <Link to="/about">
                            Read More <i className="fal fa-long-arrow-right" />
                        </Link>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-12 col-sm-12">
                    <div className="services-box07 active">
                    <div className="sr-contner">
                        <div className="icon">
                            <img src="assets/img/icon/sve-icon5.png" alt="icon01" />
                        </div>
                        <div className="text">
                        <h5>
                            <Link to="/about">International Hubs</Link>
                        </h5>
                        <p>
                            Seamlessly visualize quality ellectual capital without superior
                            collaboration and idea sharing listically
                        </p>
                        <Link to="/about">
                            Read More <i className="fal fa-long-arrow-right" />
                        </Link>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-12 col-sm-12">
                    <div className="services-box07">
                    <div className="sr-contner">
                        <div className="icon">
                            <img src="assets/img/icon/sve-icon6.png" alt="icon01" />
                        </div>
                        <div className="text">
                        <h5>
                            <Link to="/about">Bachelor’s and Master’s</Link>
                        </h5>
                        <p>
                            Seamlessly visualize quality ellectual capital without superior
                            collaboration and idea sharing listically
                        </p>
                        <Link to="/about">
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

export default Sliderone