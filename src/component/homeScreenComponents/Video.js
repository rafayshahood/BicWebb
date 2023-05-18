import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import Iframe from 'react-iframe';

import background from "../../assets/images/VideoComponentImages/NCUKLaunch.png";
import img1 from "../../assets/images/VideoComponentImages/play-button.png";

function Video() {

    const [video, setVideo] = useState(false);

  return (
    <>
        <section className="cta-area cta-bg pt-160 pb-160" style={{ backgroundImage: `url(${background})` }} >
            <div className="container">
                <div className="row justify-content-center  align-items-center">
                <div className="col-xl-6 col-lg-6 col-md-12">
                    <div className="section-title cta-title video-title wow fadeInLeft animated" data-animation="fadeInDown animated" data-delay=".2s" >
                    <h2 style={{color:'Black'}}>
                        Celebrating the launch of <span style={{color:'#f8c533'}}>NCUK</span> 
                    </h2>
                    <p style={{ color: `black`, fontWeight:'600', fontSize:'22px' }}>
                        he energy and excitement at the launch ceremony was palpable as we unveiled the incredible opportunities that NCUK offers students 
                        around the world. From top-notch academic programs to global connections, NCUK is the key to unlocking your potential. 
                    </p>
                    </div>
                </div>
                <div className="col-lg-2 col-md-2"></div>
                <div className="col-lg-4">
                    <div className="s-video-content">
                        <Link to="#" className="popup-video mb-50" onClick={() => setVideo(true)} >
                            <img src={img1} alt="circle_right" onClick={() => setVideo(true)} />
                        </Link>
                    </div>
                </div>
                </div>
            </div>
        </section>

        {video &&
        <>
            <div className="mfp-bg mfp-ready"></div>
            <div className="mfp-wrap mfp-close-btn-in mfp-auto-cursor mfp-ready" tabindex="-1" style={{overflow: "hidden"}}> 
            <div className="mfp-container mfp-s-ready mfp-iframe-holder">
                <div className="mfp-content">
                    <div className="mfp-iframe-scaler">
                        <button title="Close (Esc)" type="button" className="mfp-close" onClick={() => setVideo(false)} >×</button>
                        <iframe className="mfp-iframe" src="https://www.youtube.com/embed/Ke6NlaLPZmc" frameborder="1000" allowfullscreen=""></iframe>
                        </div>
                        </div>
                        <div className="mfp-preloader">Loading...</div>
                        </div>
            </div>
        </>
        }
    </>
  )
}

export default Video