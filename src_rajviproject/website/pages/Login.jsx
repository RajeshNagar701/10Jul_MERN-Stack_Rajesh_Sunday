import React, { useState } from 'react'
import Footer from '../component/Footer'
import Header2 from '../component/Header2'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import axios from 'axios'

function Login() {

    const redirect=useNavigate();
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
            const res = await axios.get(`http://localhost:3000/user?email=${formvalue.email}`);
            console.log(res.data);
            if (res.data.length > 0) {
                if (res.data[0].password == formvalue.password) {
                    if (res.data[0].status == "Unblock") {
                       
                        // session 
                        localStorage.setItem('uid',res.data[0].id);
                        localStorage.setItem('uname',res.data[0].name);

                        toast.success('Login Succees');
                        redirect('/');
                    }
                    else {
                        toast.error('User Blocked so Contact rajvi!');
                    }
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
        <>
            <Header2 title="Login Here" />
            {/* Contact Start */}
            < div className="container-fluid py-5" >
                <div className="container py-5">
                    <div className="row">
                        <div className="col-lg-6" style={{ minHeight: 500 }}>
                            <div className="position-relative h-100">
                                <iframe className="position-absolute w-100 h-100" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3001156.4288297426!2d-78.01371936852176!3d42.72876761954724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ccc4bf0f123a5a9%3A0xddcfc6c1de189567!2sNew%20York%2C%20USA!5e0!3m2!1sen!2sbd!4v1603794290143!5m2!1sen!2sbd" frameBorder={0} style={{ border: 0 }} allowFullScreen aria-hidden="false" tabIndex={0} />
                            </div>
                        </div>
                        <div className="col-lg-6 pt-5 pb-lg-5">
                            <div className="contact-form bg-light p-4 p-lg-5 my-lg-5">
                                <h6 className="d-inline-block text-white text-uppercase bg-primary py-1 px-2">Login</h6>
                                <h1 className="mb-4">Login Here</h1>

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
                                        <Link to='/signup' className='float-right'>If you not registered then Signup Here</Link>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
            {/* Contact End */}
            <Footer />
        </>
    )
}

export default Login