import React from 'react'
import Footer from '../component/Footer'
import Header2 from '../component/Header2'
import { Helmet } from 'react-helmet'

function Services() {
    return (
        <>
            <Header2 title="Services" />
            <div>
                <div className="container-fluid px-0 py-5 my-5">
                    <div className="row mx-0 justify-content-center text-center">
                        <div className="col-lg-6">
                            <h6 className="d-inline-block bg-light text-primary text-uppercase py-1 px-2">Our Service</h6>
                            <h1>Spa &amp; Beauty Services</h1>
                        </div>
                    </div>
                    <div className="owl-carousel service-carousel">
                        <div className="service-item position-relative">
                            <img className="img-fluid" src="website/img/service-1.jpg" alt />
                            <div className="service-text text-center">
                                <h4 className="text-white font-weight-medium px-3">Body Massage</h4>
                                <p className="text-white px-3 mb-3">Elitr labore sit dolor erat est lorem diam sea ipsum diam dolor duo sit ipsum</p>
                                <div className="w-100 bg-white text-center p-4">
                                    <a className="btn btn-primary" href>Make Order</a>
                                </div>
                            </div>
                        </div>
                        <div className="service-item position-relative">
                            <img className="img-fluid" src="website/img/service-2.jpg" alt />
                            <div className="service-text text-center">
                                <h4 className="text-white font-weight-medium px-3">Stone Therapy</h4>
                                <p className="text-white px-3 mb-3">Elitr labore sit dolor erat est lorem diam sea ipsum diam dolor duo sit ipsum</p>
                                <div className="w-100 bg-white text-center p-4">
                                    <a className="btn btn-primary" href>Make Order</a>
                                </div>
                            </div>
                        </div>
                        <div className="service-item position-relative">
                            <img className="img-fluid" src="website/img/service-3.jpg" alt />
                            <div className="service-text text-center">
                                <h4 className="text-white font-weight-medium px-3">Facial Therapy</h4>
                                <p className="text-white px-3 mb-3">Elitr labore sit dolor erat est lorem diam sea ipsum diam dolor duo sit ipsum</p>
                                <div className="w-100 bg-white text-center p-4">
                                    <a className="btn btn-primary" href>Make Order</a>
                                </div>
                            </div>
                        </div>
                        <div className="service-item position-relative">
                            <img className="img-fluid" src="website/img/service-4.jpg" alt />
                            <div className="service-text text-center">
                                <h4 className="text-white font-weight-medium px-3">Skin Care</h4>
                                <p className="text-white px-3 mb-3">Elitr labore sit dolor erat est lorem diam sea ipsum diam dolor duo sit ipsum</p>
                                <div className="w-100 bg-white text-center p-4">
                                    <a className="btn btn-primary" href>Make Order</a>
                                </div>
                            </div>
                        </div>
                        <div className="service-item position-relative">
                            <img className="img-fluid" src="website/img/service-5.jpg" alt />
                            <div className="service-text text-center">
                                <h4 className="text-white font-weight-medium px-3">Stream Bath</h4>
                                <p className="text-white px-3 mb-3">Elitr labore sit dolor erat est lorem diam sea ipsum diam dolor duo sit ipsum</p>
                                <div className="w-100 bg-white text-center p-4">
                                    <a className="btn btn-primary" href>Make Order</a>
                                </div>
                            </div>
                        </div>
                        <div className="service-item position-relative">
                            <img className="img-fluid" src="website/img/service-6.jpg" alt />
                            <div className="service-text text-center">
                                <h4 className="text-white font-weight-medium px-3">Face Masking</h4>
                                <p className="text-white px-3 mb-3">Elitr labore sit dolor erat est lorem diam sea ipsum diam dolor duo sit ipsum</p>
                                <div className="w-100 bg-white text-center p-4">
                                    <a className="btn btn-primary" href>Make Order</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center bg-appointment mx-0">
                        <div className="col-lg-6 py-5">
                            <div className="p-5 my-5" style={{ background: 'rgba(33, 30, 28, 0.7)' }}>
                                <h1 className="text-white text-center mb-4">Make Appointment</h1>
                                <form>
                                    <div className="form-row">
                                        <div className="col-sm-6">
                                            <div className="form-group">
                                                <input type="text" className="form-control bg-transparent p-4" placeholder="Your Name" required="required" />
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="form-group">
                                                <input type="email" className="form-control bg-transparent p-4" placeholder="Your Email" required="required" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-row">
                                        <div className="col-sm-6">
                                            <div className="form-group">
                                                <div className="date" id="date" data-target-input="nearest">
                                                    <input type="text" className="form-control bg-transparent p-4 datetimepicker-input" placeholder="Select Date" data-target="#date" data-toggle="datetimepicker" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="form-group">
                                                <div className="time" id="time" data-target-input="nearest">
                                                    <input type="text" className="form-control bg-transparent p-4 datetimepicker-input" placeholder="Select Time" data-target="#time" data-toggle="datetimepicker" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-row">
                                        <div className="col-sm-6">
                                            <div className="form-group">
                                                <select className="custom-select bg-transparent px-4" style={{ height: 47 }}>
                                                    <option selected>Select A Service</option>
                                                    <option value={1}>Service 1</option>
                                                    <option value={2}>Service 1</option>
                                                    <option value={3}>Service 1</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <button className="btn btn-primary btn-block" type="submit" style={{ height: 47 }}>Make Appointment</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Service End */}
                {/* Testimonial Start */}
                <div className="container-fluid py-5">
                    <div className="container py-5">
                        <div className="row align-items-center">
                            <div className="col-lg-6 pb-5 pb-lg-0">
                                <img className="img-fluid w-100" src="website/img/testimonial.jpg" alt />
                            </div>
                            <div className="col-lg-6">
                                <h6 className="d-inline-block text-primary text-uppercase bg-light py-1 px-2">Testimonial</h6>
                                <h1 className="mb-4">What Our Clients Say!</h1>
                                <div className="owl-carousel testimonial-carousel">
                                    <div className="position-relative">
                                        <i className="fa fa-3x fa-quote-right text-primary position-absolute" style={{ top: '-6px', right: 0 }} />
                                        <div className="d-flex align-items-center mb-3">
                                            <img className="img-fluid rounded-circle" src="website/img/testimonial-1.jpg" style={{ width: 60, height: 60 }} alt />
                                            <div className="ml-3">
                                                <h6 className="text-uppercase">Client Name</h6>
                                                <span>Profession</span>
                                            </div>
                                        </div>
                                        <p className="m-0">Aliquyam sed elitr elitr erat sed diam ipsum eirmod eos lorem nonumy. Tempor sea ipsum diam  sed clita dolore eos dolores magna erat dolore sed stet justo et dolor.</p>
                                    </div>
                                    <div className="position-relative">
                                        <i className="fa fa-3x fa-quote-right text-primary position-absolute" style={{ top: '-6px', right: 0 }} />
                                        <div className="d-flex align-items-center mb-3">
                                            <img className="img-fluid rounded-circle" src="website/img/testimonial-2.jpg" style={{ width: 60, height: 60 }} alt />
                                            <div className="ml-3">
                                                <h6 className="text-uppercase">Client Name</h6>
                                                <span>Profession</span>
                                            </div>
                                        </div>
                                        <p className="m-0">Aliquyam sed elitr elitr erat sed diam ipsum eirmod eos lorem nonumy. Tempor sea ipsum diam  sed clita dolore eos dolores magna erat dolore sed stet justo et dolor.</p>
                                    </div>
                                    <div className="position-relative">
                                        <i className="fa fa-3x fa-quote-right text-primary position-absolute" style={{ top: '-6px', right: 0 }} />
                                        <div className="d-flex align-items-center mb-3">
                                            <img className="img-fluid rounded-circle" src="website/img/testimonial-3.jpg" style={{ width: 60, height: 60 }} alt />
                                            <div className="ml-3">
                                                <h6 className="text-uppercase">Client Name</h6>
                                                <span>Profession</span>
                                            </div>
                                        </div>
                                        <p className="m-0">Aliquyam sed elitr elitr erat sed diam ipsum eirmod eos lorem nonumy. Tempor sea ipsum diam  sed clita dolore eos dolores magna erat dolore sed stet justo et dolor.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Helmet>
                <script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
                <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.bundle.min.js"></script>
                <script src="/website/lib/easing/easing.min.js"></script>
                <script src="/website/lib/waypoints/waypoints.min.js"></script>
                <script src="/website/lib/counterup/counterup.min.js"></script>
                <script src="/website/lib/owlcarousel/owl.carousel.min.js"></script>
                <script src="/website/lib/tempusdominus/js/moment.min.js"></script>
                <script src="/website/lib/tempusdominus/js/moment-timezone.min.js"></script>
                <script src="/website/lib/tempusdominus/js/tempusdominus-bootstrap-4.min.js"></script>


                <script src="/website/mail/jqBootstrapValidation.min.js"></script>
                <script src="/website/mail/contact.js"></script>


                <script src="/website/js/main.js"></script>
            </Helmet>
            <Footer />
        </>
    )
}
export default Services