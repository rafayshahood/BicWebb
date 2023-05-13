import React from 'react'
import Slider from "react-slick";


function Testimonial() {

    const settings = {
        dots: true,
        arrows: false,
        prevArrow: '<button type="button" className="slick-prev"><i className="fas fa-arrow-left"></i></button>',
        nextArrow: '<button type="button" className="slick-next"><i className="fas fa-arrow-right"></i></button>',
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
      };

  return (
    <>
        <section className="testimonial-area text-center pt-120 pb-120" style={{ background: "url(assets/img/bg/testimonial-bg.png) no-repeat", backgroundSize: "cover" }} >
            <div className="container">
                <div className="row justify-content-center">
                <div className="col-lg-10">
                    <Slider className="testimonial-active2 wow fadeInUp  animated" data-animation="fadeInUp" data-delay=".4s" {...settings}>
                        <div className="single-testimonial-outer">
                            <div className="single-testimonial">
                            <div className="qt-img">
                                <img src="assets/img/testimonial/qt-icon.png" alt="img" />
                            </div>
                            <p>
                                “Etiam sodales congue consequat. Aenean vitae ullamcorper leo.
                                Pellentesque condimentum ex ut erat posuere, quis tincidunt
                                augue semper. Cras congue nulla sed quam hendrerit euismod”
                            </p>
                            <div className="testi-author">
                                <img src="assets/img/testimonial/testi_avatar.png" alt="img" />
                                <div className="ta-info">
                                <h6>Alexis browni JR.</h6>
                                <span>founder of alxis co.</span>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="single-testimonial-outer">
                            <div className="single-testimonial">
                            <div className="qt-img">
                                <img src="assets/img/testimonial/qt-icon.png" alt="img" />
                            </div>
                            <p>
                                “Etiam sodales congue consequat. Aenean vitae ullamcorper leo.
                                Pellentesque condimentum ex ut erat posuere, quis tincidunt
                                augue semper. Cras congue nulla sed quam hendrerit euismod”.
                            </p>
                            <div className="testi-author">
                                <img src="assets/img/testimonial/testi_avatar.png" alt="img" />
                                <div className="ta-info">
                                <h6>Paul M. Matney</h6>
                                <span>Lawyer</span>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="single-testimonial-outer">
                            <div className="single-testimonial">
                            <div className="qt-img">
                                <img src="assets/img/testimonial/qt-icon.png" alt="img" />
                            </div>
                            <p>
                                “Etiam sodales congue consequat. Aenean vitae ullamcorper leo.
                                Pellentesque condimentum ex ut erat posuere, quis tincidunt
                                augue semper. Cras congue nulla sed quam hendrerit euismod”
                            </p>
                            <div className="testi-author">
                                <img src="assets/img/testimonial/testi_avatar.png" alt="img" />
                                <div className="ta-info">
                                <h6>Alexis browni JR.</h6>
                                <span>founder of alxis co.</span>
                                </div>
                            </div>
                            </div>
                        </div>
                    </Slider>
                </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Testimonial