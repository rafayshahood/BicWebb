import React from 'react'
import Slider from "react-slick";
import img1 from "../../assets/img/bg/an-img-03.png";
import img2 from "../../assets/img/bg/an-img-04.png";
import img3 from "../../assets/img/testimonial/invertedCommaIcon.png";
//
import img4 from "../../assets/images/TestimonialImages/myImage.jpeg"  
import img5 from "../../assets/img/testimonial/invertedCommaIcon.png";
import img6 from "../../assets/images/TestimonialImages/FaizanImage.jpeg"  
import img7 from "../../assets/img/testimonial/invertedCommaIcon.png";
import img8 from "../../assets/images/TestimonialImages/tahaImage.jpeg"  
import img9 from "../../assets/img/testimonial/invertedCommaIcon.png";
import img10 from "../../assets/images/TestimonialImages/FaizanImage.jpeg"  
import img11 from "../../assets/img/testimonial/invertedCommaIcon.png";
import img12 from "../../assets/images/TestimonialImages/myImage.jpeg"  







function Testimonial() {

     let settings = {
        dots: true,
        infinite: true,
        arrows: false,
        speed: 1000,
        slidesToShow:3,
        slidesToScroll: 2,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2,
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
       <section className="testimonial-area pt-120 pb-115 p-relative fix">
            <div className="animations-01">
                <img src={img1} alt="an-img-01" />
            </div>
            <div className="animations-02">
                <img src={img2} alt="contact-bg-an-01" />
            </div>
            <div className="container">
                <div className="row">
                <div className="col-lg-12">
                    <div className="section-title text-center mb-50 wow fadeInDown animated" data-animation="fadeInDown" data-delay=".4s" >
                    <h5>
                        <i className="fal fa-graduation-cap" /> Testimonial
                    </h5>
                    <h2>What Our Alumni Says</h2>
                    </div>
                </div>
                <div className="col-lg-12">

                    <Slider  className="testimonial-active wow fadeInUp animated" data-animation="fadeInUp" data-delay=".4s" {...settings}>

                        <div className="single-testimonial text-center">
                            <div className="qt-img">
                                <img src={img3} alt="img" />
                            </div>
                            <p> 
                                "The university provided me with an exceptional education that shaped my future. 
                                Grateful for the knowledge and experiences gained. Forever indebted to my alma mater."
                            </p>
                            <div className="testi-author">
                                <img src={img4} className='Testimonial-image'  alt="img" />
                            </div>
                            <div className="ta-info">
                            <h6>Rafay Shahood</h6>
                            <span>Web Developer</span>
                            </div>
                        </div>
                        <div className="single-testimonial text-center">
                            <div className="qt-img">
                                <img src={img5} alt="img" />
                            </div>
                            <p>
                            "As an alumni of this university, I can confidently say that it laid a strong foundation for my career. The supportive faculty, rigorous curriculum, and vibrant campus environment were instrumental in my success."
                            </p>
                            <div className="testi-author">
                                <img src={img6} className='Testimonial-image'  alt="img" />
                            </div>
                            <div className="ta-info">
                            <h6>Ahmad Usman</h6>
                            <span>AI Specialist</span>
                            </div>
                        </div>
                        <div className="single-testimonial text-center">
                            <div className="qt-img">
                                <img src={img7} alt="img" /> 
                            </div>
                            <p>
                            "Being a part of this university was truly transformative. The diverse community, cutting-edge research opportunities, and valuable mentorship prepared me for the challenges of the real world. Proud to be a graduate of such an esteemed institution."
                            </p>
                            <div className="testi-author">
                                <img src={img8} className='Testimonial-image'  alt="img" />
                            </div>
                            <div className="ta-info">
                            <h6>Taha Pervaiz</h6>
                            <span>Accountant</span>
                            </div>
                        </div>
                        <div className="single-testimonial text-center">
                            <div className="qt-img">
                                <img src={img9} alt="img" />
                            </div>
                            <p>
                            "As an alumni of this university, I can confidently say that it laid a strong foundation for my career. The supportive faculty, rigorous curriculum, and vibrant campus environment were instrumental in my success."
                            </p>
                            <div className="testi-author">
                                <img src={img10} className='Testimonial-image' alt="img" />
                            </div>
                            <div className="ta-info">
                            <h6>Ahmad Usman</h6>
                            <span>Web Developer</span>
                            </div>
                        </div>
                        <div className="single-testimonial text-center">
                            <div className="qt-img">
                                <img src={img11} alt="img" />
                            </div>
                            <p>
                            
                                "The university provided me with an exceptional education that shaped my future. 
                                Grateful for the knowledge and experiences gained. Forever indebted to my alma mater."
                            </p>
                            <div className="testi-author">
                                <img src={img12} className='Testimonial-image'  alt="img" />
                            </div>
                            <div className="ta-info">
                            <h6>Rafay Shahood</h6>
                            <span>Web Developer</span>
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