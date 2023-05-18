import React from 'react'

import img1 from "../../assets/img/icon/fea-icon01.png"
import img2 from "../../assets/img/icon/fea-icon02.png"
import img3 from "../../assets/img/icon/fea-icon03.png"
import img4 from "../../assets/images/ShepComponentImages/BicIsbLib.jpg"



function Shep() {
  return (
    <>
        <section className="steps-area p-relative" style={{ backgroundColor: "#274078" }} >
            <div className="animations-10">
                <img src="assets/img/bg/an-img-10.png" alt="an-img-01" />
            </div>
            <div className="container">
                <div className="row align-items-center">
                <div className="col-lg-6 col-md-12">
                    <div className="section-title mb-35 wow fadeInDown animated" data-animation="fadeInDown" data-delay=".4s" >
                    <h2>Our Best Features</h2>
                    <p>
                        Special wedding garments are often worn, and the ceremony is
                        sometimes followed by a wedding reception. Music, poetry.
                    </p>
                    </div>
                    <ul className="pr-20">
                    <li>
                        <div className="step-box wow fadeInUp animated" data-animation="fadeInUp" data-delay=".4s" >
                        <div className="dnumber">
                            <div className="date-box">
                                <img src={img1} alt="icon" />
                            </div>
                        </div>
                        <div className="text">
                            <h3>Skilled Teachers</h3>
                            <p>
                            Special wedding garments are often worn, and the ceremony is
                            sttimes followed by a wedding reception. Music, poetry,
                            prayers, or readings from.
                            </p>
                        </div>
                        </div>
                    </li>
                    <li>
                        <div className="step-box wow fadeInUp animated" data-animation="fadeInUp" data-delay=".4s" >
                        <div className="dnumber">
                            <div className="date-box">
                                <img src={img2} alt="icon" />
                            </div>
                        </div>
                        <div className="text">
                            <h3>Affordable Courses</h3>
                            <p>
                            Special wedding garments are often worn, and the ceremony is
                            sttimes followed by a wedding reception. Music, poetry,
                            prayers, or readings from.
                            </p>
                        </div>
                        </div>
                    </li>
                    <li>
                        <div className="step-box wow fadeInUp animated" data-animation="fadeInUp" data-delay=".4s" >
                        <div className="dnumber">
                            <div className="date-box">
                                <img src={img3} alt="icon" />
                            </div>
                        </div>
                        <div className="text">
                            <h3>Efficient &amp; Flexible</h3>
                            <p>
                            Special wedding garments are often worn, and the ceremony is
                            sttimes followed by a wedding reception. Music, poetry,
                            prayers, or readings from.
                            </p>
                        </div>
                        </div>
                    </li>
                    </ul>
                </div>
                <div className="col-lg-6 col-md-12">
                    <div className="step-img wow fadeInLeft animated" data-animation="fadeInLeft" data-delay=".4s"  >
                        <img src={img4} alt="class image"/>
                    </div>
                </div>
                </div>
            </div>
        </section>

    </>
  )
}

export default Shep