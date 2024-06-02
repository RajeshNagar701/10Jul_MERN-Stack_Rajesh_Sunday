import React from 'react'
import { Helmet } from 'react-helmet'

function AFooter() {
    return (
        <div>
            <div className="footer container-fluid position-relative bg-dark py-5" style={{ marginTop: 90 }}>
                <div className="container pt-5">
                    <div className="row">
                        <div className="col-lg-6 pr-lg-5 mb-5">
                            <a href="index.html" className="navbar-brand">
                                <h1 className="mb-3 text-white"><span className="text-primary">SPA</span> Center</h1>
                            </a>
                            <p>Aliquyam sed elitr elitr erat sed diam ipsum eirmod eos lorem nonumy. Tempor sea ipsum diam  sed clita dolore eos dolores magna erat dolore sed stet justo et dolor.</p>
                            <p><i className="fa fa-map-marker-alt mr-2" />123 Street, New York, USA</p>
                            <p><i className="fa fa-phone-alt mr-2" />+012 345 67890</p>
                            <p><i className="fa fa-envelope mr-2" />info@example.com</p>
                            <div className="d-flex justify-content-start mt-4">
                                <a className="btn btn-lg btn-primary btn-lg-square mr-2" href="#"><i className="fab fa-twitter" /></a>
                                <a className="btn btn-lg btn-primary btn-lg-square mr-2" href="#"><i className="fab fa-facebook-f" /></a>
                                <a className="btn btn-lg btn-primary btn-lg-square mr-2" href="#"><i className="fab fa-linkedin-in" /></a>
                                <a className="btn btn-lg btn-primary btn-lg-square" href="#"><i className="fab fa-instagram" /></a>
                            </div>
                        </div>
                        <div className="col-lg-6 pl-lg-5">
                            <div className="row">
                                <div className="col-sm-6 mb-5">
                                    <h5 className="text-white text-uppercase mb-4">Quick Links</h5>
                                    
                                </div>
                                <div className="col-sm-6 mb-5">
                                    <h5 className="text-white text-uppercase mb-4">Our Services</h5>
                                    <div className="d-flex flex-column justify-content-start">
                                        <a className="text-white-50 mb-2" href="#"><i className="fa fa-angle-right mr-2" />Body Massage</a>
                                        <a className="text-white-50 mb-2" href="#"><i className="fa fa-angle-right mr-2" />Stone Therapy</a>
                                        <a className="text-white-50 mb-2" href="#"><i className="fa fa-angle-right mr-2" />Facial Therapy</a>
                                        <a className="text-white-50 mb-2" href="#"><i className="fa fa-angle-right mr-2" />Skin Care</a>
                                        <a className="text-white-50" href="#"><i className="fa fa-angle-right mr-2" />Nail Care</a>
                                    </div>
                                </div>
                                <div className="col-sm-12 mb-5">
                                    <h5 className="text-white text-uppercase mb-4">Newsletter</h5>
                                    <div className="w-100">
                                        <div className="input-group">
                                            <input type="text" className="form-control border-light" style={{ padding: 30 }} placeholder="Your Email Address" />
                                            <div className="input-group-append">
                                                <button className="btn btn-primary px-4">Sign Up</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid bg-dark text-light border-top py-4" style={{ borderColor: 'rgba(256, 256, 256, .15) !important' }}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 text-center text-md-left mb-3 mb-md-0">
                            <p className="m-0 text-white">© <a href="#">Your Site Name</a>. All Rights Reserved.</p>
                        </div>
                        <div className="col-md-6 text-center text-md-right">
                            <p className="m-0 text-white">Designed by <a href="https://htmlcodex.com">HTML Codex</a></p>
                        </div>
                    </div>
                </div>
            </div>
            {/* Footer End */}
            {/* Back to Top */}
            <a href="#" className="btn btn-lg btn-primary back-to-top"><i className="fa fa-angle-double-up" /></a>
       
          
        </div>

    )
}

export default AFooter