import React from 'react'
import { Link } from 'react-router-dom'

function First() {
  return (
    <>
        <section id="pricing" className="pricing-area pt-150 pb-60 fix p-relative">
            <div className="container">
                <div className="row">
                <div className="col-lg-4 col-md-6">
                    <div className="pricing-box pricing-box2 mb-60">
                    <div className="pricing-head text-center">
                        <h3>Basic</h3>
                        <div className="price-count">
                        <h2>
                            $150 <strong>/ Per Month Fee</strong>
                        </h2>
                        </div>
                        <p>Proin vehicula elit a dui rutrum, ac posuere magna auctor.</p>
                        <hr />
                    </div>
                    <div className="pricing-body mt-20 mb-30 text-left">
                        <ul>
                        <li>Aliquam quis justo at lorem</li>
                        <li>Fusce sodales, urna et tempus</li>
                        <li>Vestibulum blandit lorem quis</li>
                        <li>Orci varius natoque penatibus</li>
                        <li>Aliquam a nisl congue, auctor</li>
                        </ul>
                    </div>
                    <div className="pricing-btn">
                        <Link to="/contact" className="btn ss-btn">
                        Join Now <i className="fal fa-long-arrow-right" />
                        </Link>
                    </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="pricing-box pricing-box2 active mb-60">
                    <div className="pricing-head text-center">
                        <h3>Standard</h3>
                        <div className="price-count">
                        <h2>
                            $200 <strong>/ Per Month Fee</strong>
                        </h2>
                        </div>
                        <p>Proin vehicula elit a dui rutrum, ac posuere magna auctor.</p>
                        <hr />
                    </div>
                    <div className="pricing-body mt-20 mb-30 text-left">
                        <ul>
                        <li>Aliquam quis justo at lorem</li>
                        <li>Fusce sodales, urna et tempus</li>
                        <li>Vestibulum blandit lorem quis</li>
                        <li>Orci varius natoque penatibus</li>
                        <li>Aliquam a nisl congue, auctor</li>
                        </ul>
                    </div>
                    <div className="pricing-btn">
                        <Link to="/contact" className="btn ss-btn">
                        Join Now <i className="fal fa-long-arrow-right" />
                        </Link>
                    </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="pricing-box pricing-box2 mb-60">
                    <div className="pricing-head text-center">
                        <h3>Unlimited</h3>
                        <div className="price-count">
                        <h2>
                            $350 <strong>/ Per Month Fee</strong>
                        </h2>
                        </div>
                        <p>Proin vehicula elit a dui rutrum, ac posuere magna auctor.</p>
                        <hr />
                    </div>
                    <div className="pricing-body mt-20 mb-30 text-left">
                        <ul>
                        <li>Aliquam quis justo at lorem</li>
                        <li>Fusce sodales, urna et tempus</li>
                        <li>Vestibulum blandit lorem quis</li>
                        <li>Orci varius natoque penatibus</li>
                        <li>Aliquam a nisl congue, auctor</li>
                        </ul>
                    </div>
                    <div className="pricing-btn">
                        <Link to="/contact" className="btn ss-btn">
                        Join Now <i className="fal fa-long-arrow-right" />
                        </Link>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default First