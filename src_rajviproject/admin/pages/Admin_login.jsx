import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import axios from 'axios'

function Admin_login() {
    const redirect = useNavigate();
    
    useEffect(()=>{
        if(localStorage.getItem('aid'))
        {
            redirect('/dashboard');
        }
    });
    const [formvalue, setFormvalue] = useState({
        email: "",
        password: "",
    })

    const changeHandel = (e) => {
        setFormvalue({ ...formvalue, [e.target.name]: e.target.value });
        console.log(formvalue);
    }

    function validation() {
        let ans = true;

        if (formvalue.email == "") {
            toast.error("Email Field is Required");
            ans = false;
            return false;
        }
        if (formvalue.password == "") {
            toast.error("password Field is Required");
            ans = false;
            return false;
        }

        return ans;
    }

    const submitHandel = async (e) => {
        e.preventDefault();
        if (validation()) {
            const res = await axios.get(`http://localhost:3000/admin?email=${formvalue.email}`);
            console.log(res.data);
            if (res.data.length > 0) {
                if (res.data[0].password == formvalue.password) {
                    // session 
                    localStorage.setItem('aid', res.data[0].id);
                    localStorage.setItem('aname', res.data[0].name);

                    toast.success('Login Succees');
                    redirect('/dashboard');
                }
                else {
                    toast.error('Password incorrect!');
                }
            }
            else {
                toast.error('Email does nor exist !');
            }
        }
    }
    return (
        <div>
            {/* Topbar Start */}
            <div className="container-fluid bg-light d-none d-lg-block">
                <div className="row py-2 px-lg-5">
                    <div className="col-lg-6 text-left mb-2 mb-lg-0">
                        <div className="d-inline-flex align-items-center">
                            <small><i className="fa fa-phone-alt mr-2" />+012 345 6789</small>
                            <small className="px-3">|</small>
                            <small><i className="fa fa-envelope mr-2" />info@example.com</small>
                        </div>
                    </div>
                    <div className="col-lg-6 text-right">
                        <div className="d-inline-flex align-items-center">
                            <a className="text-primary px-2" href>
                                <i className="fab fa-facebook-f" />
                            </a>
                            <a className="text-primary px-2" href>
                                <i className="fab fa-twitter" />
                            </a>
                            <a className="text-primary px-2" href>
                                <i className="fab fa-linkedin-in" />
                            </a>
                            <a className="text-primary px-2" href>
                                <i className="fab fa-instagram" />
                            </a>
                            <a className="text-primary pl-2" href>
                                <i className="fab fa-youtube" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            {/* Topbar End */}
            {/* Navbar Start */}
            <div className="container-fluid p-0">
                <nav className="navbar navbar-expand-lg bg-white navbar-light py-3 py-lg-0 px-lg-5">
                    <a href="index.html" className="navbar-brand ml-lg-3">
                        <h1 className="m-0 text-primary"><span className="text-dark">SPA</span> Center</h1>
                    </a>

                </nav>
            </div>
            {/* Navbar End */}
            {/* Header Start */}
            <div className="jumbotron jumbotron-fluid bg-jumbotron" style={{ marginBottom: 90 }}>
                <div className="container text-center py-5">
                    <h3 className="text-white display-3 mb-4">Admin Login</h3>
                    <div className="d-inline-flex align-items-center text-white">
                        <p className="m-0"><a className="text-white" href>Home</a></p>
                        <i className="far fa-circle px-3" />
                        <p className="m-0">Admin Login</p>
                    </div>
                </div>
            </div>
            {/* Header End */}
            {/* Contact Start */}
            <div className="container-fluid py-5">
                <div className="container py-5">
                    <div className="row">
                        <div className="col-lg-6" style={{ minHeight: 500 }}>
                            <div className="position-relative h-100">
                                <iframe className="position-absolute w-100 h-100" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3001156.4288297426!2d-78.01371936852176!3d42.72876761954724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ccc4bf0f123a5a9%3A0xddcfc6c1de189567!2sNew%20York%2C%20USA!5e0!3m2!1sen!2sbd!4v1603794290143!5m2!1sen!2sbd" frameBorder={0} style={{ border: 0 }} allowFullScreen aria-hidden="false" tabIndex={0} />
                            </div>
                        </div>
                        <div className="col-lg-6 pt-5 pb-lg-5">
                            <div className="contact-form bg-light p-4 p-lg-5 my-lg-5">
                                <h6 className="d-inline-block text-white text-uppercase bg-primary py-1 px-2">Admin Login</h6>
                                <h1 className="mb-4">Admin Login</h1>
                                <div id="success" />
                                <form id="contactForm" method='post' onSubmit={submitHandel}>
                                    <div className="form-row">

                                        <div className="col-sm-12 control-group">
                                            <input type="email" value={formvalue.email} onChange={changeHandel} className="form-control border-0 p-4" name="email" id="email" placeholder="Your Email" />
                                            <p className="help-block text-danger" />
                                        </div>
                                        <div className="col-sm-12 control-group">
                                            <input type="text" value={formvalue.password} onChange={changeHandel} className="form-control border-0 p-4" name="password" id="password" placeholder="Your Password" />
                                            <p className="help-block text-danger" />
                                        </div>

                                    </div>

                                    <div>
                                        <button className="btn btn-primary py-3 px-4" type="submit" id="sendMessageButton">Login</button>

                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Contact End */}
            {/* Footer Start */}
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
                                    <div className="d-flex flex-column justify-content-start">
                                        <a className="text-white-50 mb-2" href="#"><i className="fa fa-angle-right mr-2" />Home</a>
                                        <a className="text-white-50 mb-2" href="#"><i className="fa fa-angle-right mr-2" />About Us</a>
                                        <a className="text-white-50 mb-2" href="#"><i className="fa fa-angle-right mr-2" />Our Services</a>
                                        <a className="text-white-50 mb-2" href="#"><i className="fa fa-angle-right mr-2" />Pricing Plan</a>
                                        <a className="text-white-50" href="#"><i className="fa fa-angle-right mr-2" />Contact Us</a>
                                    </div>
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

export default Admin_login