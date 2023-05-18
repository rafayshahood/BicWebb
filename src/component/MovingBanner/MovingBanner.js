import React from 'react'
import Slider from "react-slick";

import img1 from "../../assets/images/MovingSliderComponentImages/PearsonLogo.jpeg";
import img2 from "../../assets/images//MovingSliderComponentImages/UolLogo.jpeg";
import img3 from "../../assets/images//MovingSliderComponentImages/LiverpoolJohn.jpeg";


function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <button type="button" className={ `slick-next ${className}`} style={{ ...style }} onClick={onClick} ><i className="fal fa-arrow-down"></i></button>
    );
}
  
function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
    <button type="button" className={ `slick-prev ${className}`} style={{ ...style }} onClick={onClick} ><i className="fal fa-arrow-up"></i></button>
      
    );
}


function MovingBanner() {

    const settings = {
        infinite: true,
        autoplay:true,
        autoplaySpeed:1500,
        arrows: false,
        speed: 1000,
        slidesToShow:4,
        slidesToScroll: 2,
        responsive: [
            {
                breakpoint: 1500,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 3,
                    infinite: true,
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
      };

  return (
    <>
        <div className="brand-area pt-60 pb-60" style={{ backgroundColor: "#f8c533" }}>
            <div className="container">
                <Slider className="row brand-active" {...settings}>
                    <div className="col-xl-2">
                        <div className="single-brand">
                            <img src={img1} alt="img" />
                        </div>
                    </div>
                    <div className="col-xl-2">
                        <div className="single-brand">
                            <img src={img2} alt="img" />
                        </div>
                    </div>
                    <div className="col-xl-2">
                        <div className="single-brand">
                            <img src={img3} alt="img" />
                        </div>
                    </div>
                    <div className="col-xl-2">
                        <div className="single-brand">
                            <img src={img1} alt="img" />
                        </div>
                    </div>
                    <div className="col-xl-2">
                        <div className="single-brand">
                            <img src={img2} alt="img" />
                        </div>
                    </div>
                    <div className="col-xl-2">
                        <div className="single-brand">
                            <img src={img3} alt="img" />
                        </div>
                    </div>
                </Slider>
            </div>
        </div>
    </>
  )
}

export default MovingBanner