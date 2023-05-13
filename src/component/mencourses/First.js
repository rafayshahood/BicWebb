import React from 'react'
import { Link } from 'react-router-dom'

function First() {
  return (
    <>
        <section className="shop-area pt-120 pb-120 p-relative " data-animation="fadeInUp animated" data-delay=".2s" >
            <div className="container">
                <div className="row">
                <div className="col-lg-6 col-sm-6">
                    <h6 className="mt-20 mb-50">Showing 1–9 of 10 results</h6>
                </div>
                <div className="col-lg-6 col-sm-6 text-right">
                    <select name="orderby" className="orderby" aria-label="Shop order">
                    <option value="menu_order">
                        Default sorting
                    </option>
                    <option value="popularity">Sort by popularity</option>
                    <option value="rating">Sort by average rating</option>
                    <option value="date">Sort by latest</option>
                    <option value="price">Sort by price: low to high</option>
                    <option value="price-desc">Sort by price: high to low</option>
                    </select>
                </div>
                </div>
                <div className="row align-items-center">
                <div className="col-lg-4 col-md-6 ">
                    <div className="courses-item mb-30 hover-zoomin">
                    <div className="thumb fix">
                        <Link to="/single-courses">
                            <img src="assets/img/bg/couress-img-1.jpg" alt="contact-bg-an-01" />
                        </Link>
                    </div>
                    <div className="courses-content">
                        <div className="cat">
                            <i className="fal fa-graduation-cap" /> Sciences
                        </div>
                        <h3>
                        <Link to="/single-courses"> Biochemistry</Link>
                        </h3>
                        <p>
                        Seamlessly visualize quality ellectual capital without superior
                        collaboration and idea tically
                        </p>
                        <Link to="/single-courses" className="readmore">
                        Read More <i className="fal fa-long-arrow-right" />
                        </Link>
                    </div>
                    <div className="icon">
                        <img src="assets/img/icon/cou-icon.png" alt="img" />
                    </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 ">
                    <div className="courses-item mb-30 hover-zoomin">
                    <div className="thumb fix">
                        <Link to="/single-courses">
                            <img src="assets/img/bg/couress-img-2.jpg" alt="contact-bg-an-01" />
                        </Link>
                    </div>
                    <div className="courses-content">
                        <div className="cat">
                        <i className="fal fa-graduation-cap" /> Economics
                        </div>
                        <h3>
                        <Link to="/single-courses"> Major in Economics</Link>
                        </h3>
                        <p>
                        Seamlessly visualize quality ellectual capital without superior
                        collaboration and idea tically
                        </p>
                        <Link to="/single-courses" className="readmore">
                        Read More <i className="fal fa-long-arrow-right" />
                        </Link>
                    </div>
                    <div className="icon">
                        <img src="assets/img/icon/cou-icon.png" alt="img" />
                    </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 ">
                    <div className="courses-item mb-30 hover-zoomin">
                    <div className="thumb fix">
                        <Link to="/single-courses">
                            <img src="assets/img/bg/couress-img-3.jpg" alt="contact-bg-an-01" />
                        </Link>
                    </div>
                    <div className="courses-content">
                        <div className="cat">
                        <i className="fal fa-graduation-cap" /> Media
                        </div>
                        <h3>
                        <Link to="/single-courses"> Business Media</Link>
                        </h3>
                        <p>
                        Seamlessly visualize quality ellectual capital without superior
                        collaboration and idea tically
                        </p>
                        <Link to="/single-courses" className="readmore">
                        Read More <i className="fal fa-long-arrow-right" />
                        </Link>
                    </div>
                    <div className="icon">
                        <img src="assets/img/icon/cou-icon.png" alt="img" />
                    </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 ">
                    <div className="courses-item mb-30 hover-zoomin">
                    <div className="thumb fix">
                        <Link to="/single-courses">
                        <img src="assets/img/bg/couress-img-4.jpg" alt="contact-bg-an-01" />
                        </Link>
                    </div>
                    <div className="courses-content">
                        <div className="cat">
                        <i className="fal fa-graduation-cap" /> Public
                        </div>
                        <h3>
                        <Link to="/single-courses"> Public Administration </Link>
                        </h3>
                        <p>
                        Seamlessly visualize quality ellectual capital without superior
                        collaboration and idea tically
                        </p>
                        <Link to="/single-courses" className="readmore">
                        Read More <i className="fal fa-long-arrow-right" />
                        </Link>
                    </div>
                    <div className="icon">
                        <img src="assets/img/icon/cou-icon.png" alt="img" />
                    </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 ">
                    <div className="courses-item mb-30 hover-zoomin">
                    <div className="thumb fix">
                        <Link to="/single-courses">
                            <img src="assets/img/bg/couress-img-5.jpg" alt="contact-bg-an-01" />
                        </Link>
                    </div>
                    <div className="courses-content">
                        <div className="cat">
                        <i className="fal fa-graduation-cap" /> Sciences
                        </div>
                        <h3>
                        <Link to="/single-courses"> Biotechnology</Link>
                        </h3>
                        <p>
                        Seamlessly visualize quality ellectual capital without superior
                        collaboration and idea tically
                        </p>
                        <Link to="/single-courses" className="readmore">
                        Read More <i className="fal fa-long-arrow-right" />
                        </Link>
                    </div>
                    <div className="icon">
                        <img src="assets/img/icon/cou-icon.png" alt="img" />
                    </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 ">
                    <div className="courses-item mb-30 hover-zoomin">
                    <div className="thumb fix">
                        <Link to="/single-courses">
                            <img src="assets/img/bg/couress-img-6.jpg" alt="contact-bg-an-01" />
                        </Link>
                    </div>
                    <div className="courses-content">
                        <div className="cat">
                        <i className="fal fa-graduation-cap" /> Finance
                        </div>
                        <h3>
                        <Link to="/single-courses"> Corporate Finance</Link>
                        </h3>
                        <p>
                        Seamlessly visualize quality ellectual capital without superior
                        collaboration and idea tically
                        </p>
                        <Link to="/single-courses" className="readmore">
                        Read More <i className="fal fa-long-arrow-right" />
                        </Link>
                    </div>
                    <div className="icon">
                        <img src="assets/img/icon/cou-icon.png" alt="img" />
                    </div>
                    </div>
                </div>
                </div>
                <div className="row">
                <div className="col-12">
                    <div className="pagination-wrap mt-20 text-center">
                    <nav>
                        <ul className="pagination">
                        <li className="page-item">
                            <Link to="#">
                            <i className="fas fa-angle-double-left" />
                            </Link>
                        </li>
                        <li className="page-item active">
                            <Link to="#">1</Link>
                        </li>
                        <li className="page-item">
                            <Link to="#">2</Link>
                        </li>
                        <li className="page-item">
                            <Link to="#">3</Link>
                        </li>
                        <li className="page-item">
                            <Link to="#">...</Link>
                        </li>
                        <li className="page-item">
                            <Link to="#">10</Link>
                        </li>
                        <li className="page-item">
                            <Link to="#">
                            <i className="fas fa-angle-double-right" />
                            </Link>
                        </li>
                        </ul>
                    </nav>
                    </div>
                </div>
                <div />
                </div>
            </div>
        </section>
    </>
  )
}

export default First