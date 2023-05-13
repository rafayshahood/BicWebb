import React from 'react'

function Frequently() {
  return (
    <>
        <section className="faq-area pt-120 pb-120 p-relative fix">
            <div className="animations-10">
                <img src="assets/img/bg/an-img-04.png" alt="an-img-01" />
            </div>
            <div className="animations-08">
                <img src="assets/img/bg/an-img-05.png" alt="contact-bg-an-01" />
            </div>
            <div className="container">
                <div className="row justify-content-center  align-items-center">
                <div className="col-lg-7">
                    <div
                    className="section-title wow fadeInLeft animated"
                    data-animation="fadeInDown animated"
                    data-delay=".2s"
                    >
                    <h2>Get every single answer here.</h2>
                    <p>
                        A business or organization established to provide a particular
                        service, typically one that involves a organizing transactions.
                    </p>
                    </div>
                    <div
                    className="faq-wrap mt-30 pr-30 wow fadeInUp animated"
                    data-animation="fadeInUp"
                    data-delay=".4s"
                    >
                    <div className="accordion" id="accordionExample">
                        <div className="card">
                        <div className="card-header" id="headingThree">
                            <h2 className="mb-0">
                            <button
                                className="faq-btn"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseThree"
                            >
                                01 Cras turpis felis, elementum sed mi at arcu ?
                            </button>
                            </h2>
                        </div>
                        <div
                            id="collapseThree"
                            className="collapse show"
                            data-bs-parent="#accordionExample"
                        >
                            <div className="card-body">
                            Our community is being called to reimagine the future. As the
                            only university where a renowned design school comes together
                            with premier colleges, we are making learning more relevant
                            and transformational. We are enriched by the wide range.
                            </div>
                        </div>
                        </div>
                        <div className="card">
                        <div className="card-header" id="headingOne">
                            <h2 className="mb-0">
                            <button
                                className="faq-btn collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseOne"
                            >
                                02 Vestibulum nibh risus, in neque eleifendulputate sem ?
                            </button>
                            </h2>
                        </div>
                        <div
                            id="collapseOne"
                            className="collapse"
                            data-bs-parent="#accordionExample"
                        >
                            <div className="card-body">
                            Our community is being called to reimagine the future. As the
                            only university where a renowned design school comes together
                            with premier colleges, we are making learning more relevant
                            and transformational. We are enriched by the wide range.
                            </div>
                        </div>
                        </div>
                        <div className="card">
                        <div className="card-header" id="headingTwo">
                            <h2 className="mb-0">
                            <button
                                className="faq-btn collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseTwo"
                            >
                                03 Donec maximus, sapien id auctor ornare ?
                            </button>
                            </h2>
                        </div>
                        <div
                            id="collapseTwo"
                            className="collapse"
                            data-bs-parent="#accordionExample"
                        >
                            <div className="card-body">
                            Our community is being called to reimagine the future. As the
                            only university where a renowned design school comes together
                            with premier colleges, we are making learning more relevant
                            and transformational. We are enriched by the wide range.
                            </div>
                        </div>
                        </div>
                        <div className="card">
                        <div className="card-header">
                            <h2 className="mb-0">
                            <button
                                className="faq-btn collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseFour"
                            >
                                04 Vestibulum nibh risus, in neque eleifendulputate sem ?
                            </button>
                            </h2>
                        </div>
                        <div
                            id="collapseFour"
                            className="collapse"
                            data-bs-parent="#accordionExample"
                        >
                            <div className="card-body">
                            Our community is being called to reimagine the future. As the
                            only university where a renowned design school comes together
                            with premier colleges, we are making learning more relevant
                            and transformational. We are enriched by the wide range.
                            </div>
                        </div>
                        </div>
                        <div className="card">
                        <div className="card-header" id="headingFour">
                            <h2 className="mb-0">
                            <button
                                className="faq-btn collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseFive"
                            >
                                05 Donec maximus, sapien id auctor ornare ?
                            </button>
                            </h2>
                        </div>
                        <div
                            id="collapseFive"
                            className="collapse"
                            data-bs-parent="#accordionExample"
                        >
                            <div className="card-body">
                            Our community is being called to reimagine the future. As the
                            only university where a renowned design school comes together
                            with premier colleges, we are making learning more relevant
                            and transformational. We are enriched by the wide range.
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="col-lg-5">
                    <div className="contact-bg02">
                    <div
                        className="section-title wow fadeInDown animated"
                        data-animation="fadeInDown"
                        data-delay=".4s"
                    >
                        <h2>Make An Contact</h2>
                    </div>
                    <form
                        action="mail.php"
                        method="post"
                        className="contact-form mt-30 wow fadeInUp animated"
                        data-animation="fadeInUp"
                        data-delay=".4s"
                    >
                        <div className="row">
                        <div className="col-lg-12">
                            <div className="contact-field p-relative c-name mb-20">
                            <input
                                type="text"
                                id="firstn"
                                name="firstn"
                                placeholder="First Name"
                                required=""
                            />
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="contact-field p-relative c-subject mb-20">
                            <input
                                type="text"
                                id="email"
                                name="email"
                                placeholder="Email"
                                required=""
                            />
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="contact-field p-relative c-subject mb-20">
                            <input
                                type="text"
                                id="phone"
                                name="phone"
                                placeholder="Phone No."
                                required=""
                            />
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="contact-field p-relative c-message mb-30">
                            <textarea
                                name="message"
                                id="message"
                                cols={30}
                                rows={10}
                                placeholder="Write comments"
                                defaultValue={""}
                            />
                            </div>
                            <div className="slider-btn">
                            <button
                                className="btn ss-btn"
                                data-animation="fadeInRight"
                                data-delay=".8s"
                            >
                                <span>Submit Now</span>{" "}
                                <i className="fal fa-long-arrow-right" />
                            </button>
                            </div>
                        </div>
                        </div>
                    </form>
                    </div>
                </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Frequently