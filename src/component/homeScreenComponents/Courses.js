import React from 'react'
import { Link } from 'react-router-dom';
import Slider from "react-slick";

import img1 from "../../assets/img/bg/an-img-03.png"
import img2 from "../../assets/images/CoursesImages/bba2.jpeg"
import img3 from "../../assets/images/CoursesImages/business2.jpg"
import iconimg from "../../assets/img/icon/cou-icon.png"
import img4 from "../../assets/images/CoursesImages/hnc.jpg"
import img5 from "../../assets/images/CoursesImages/computer-science.jpeg"
import img6 from "../../assets/images/CoursesImages/software-engineering.jpeg"
import img7 from "../../assets/images/CoursesImages/ir.jpeg"
import img8 from "../../assets/images/CoursesImages/psychology.jpg"
import img9 from "../../assets/images/CoursesImages/sociology.jpg"
import img10 from "../../assets/img/bg/couress-img-5.jpg"
import img11 from "../../assets/img/icon/cou-icon.png"
import img12 from "../../assets/img/bg/couress-img-6.jpg"
import img13 from "../../assets/img/icon/cou-icon.png"


function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <button type="button" className={ `slick-next ${className}`} style={{ ...style }} onClick={onClick} ><i className="fal fa-angle-right"></i></button>
    );
}
  
function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
    <button type="button" className={ `slick-prev ${className}`} style={{ ...style }} onClick={onClick} ><i className="fal fa-angle-left"></i></button>
      
    );
}



function Courses() {

    const settings = {
        dots: false,
        infinite: true,
        arrows: true,
        prevArrow: <SamplePrevArrow/>,
		nextArrow: <SampleNextArrow/>,
        speed: 1000,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
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


      const degree = [
        {
          img: img2,
          title: 'BBA',
          desc: 'Seamlessly visualize quality intellectual capital without superior collaboration and idea tically',
        },
        {
            img: img3,
            title: 'HND',
            desc: 'Seamlessly visualize quality intellectual capital without superior collaboration and idea tically',
        },
        {
            img: img4,
            title: 'HNC',
            desc: 'Seamlessly visualize quality intellectual capital without superior collaboration and idea tically',
        },
        {
            img: img5,
            title: 'Bsc Computer Science',
            desc: 'Seamlessly visualize quality intellectual capital without superior collaboration and idea tically',
        },
        {
            img: img6,
            title: 'Bsc Software Enigneering',
            desc: 'Seamlessly visualize quality intellectual capital without superior collaboration and idea tically',
        },
        {
            img: img7,
            title: 'Bsc International Relations',
            desc: 'Seamlessly visualize quality intellectual capital without superior collaboration and idea tically',
        },
        {
            img: img3,
            title: 'Bsc Pscychology',
            desc: 'Seamlessly visualize quality intellectual capital without superior collaboration and idea tically',
        },
        {
            img: img9,
            title: 'Bsc Sociology',
            desc: 'Seamlessly visualize quality intellectual capital without superior collaboration and idea tically',
        },
        {
            img: img3,
            title: 'Btc Level 3',
            desc: 'Seamlessly visualize quality intellectual capital without superior collaboration and idea tically',
        },
        {
            img: img3,
            title: 'International Foundation Year',
            desc: 'Seamlessly visualize quality intellectual capital without superior collaboration and idea tically',
        },
      ]
      

  return (
    <>
        <section className="courses pt-120 pb-120 p-relative fix">
            <div className="animations-01">
                <img src={img1} alt="an-img-01" />
            </div>
            <div className="container">
                <div className="row">
                <div className="col-lg-12 p-relative">
                    <div className="section-title center-align mb-50 wow fadeInDown animated" data-animation="fadeInDown" data-delay=".4s" >
                        <h5>
                            <i className="fal fa-graduation-cap" /> Our Courses
                        </h5>
                        <h2>Undergraduate Programs</h2>
                    </div>
                </div>
                </div>
                <Slider className="row class-active" {...settings}>
                {degree.map((item, index) => (
                    <div className="col-lg-4 col-md-6 ">
                        <div className="courses-item mb-30 hover-zoomin">
                            <div className="thumb fix">
                                <Link to="/single-courses">
                                    <img src={degree[index].img} alt="contact-bg-an-01" />
                                </Link>
                            </div>
                            <div className="courses-content">
                                <div className="cat">
                                <i className="fal fa-graduation-cap" /> Sciences
                                </div>
                                <h3>
                                <Link to="/single-courses"> {degree[index].title}</Link>
                                </h3>
                                <p>
                                 {degree[index].desc}
                                </p>
                                <Link to="/single-courses" className="readmore">
                                Read More <i className="fal fa-long-arrow-right" />
                                </Link>
                            </div>
                            <div className="icon">
                                <img src={iconimg} alt="img" />
                            </div>
                        </div>
                    </div>
                ))}

                </Slider>
            </div>
        </section>
    </>
  )
}

export default Courses