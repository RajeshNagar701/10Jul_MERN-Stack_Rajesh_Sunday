import React, { useState } from 'react'
import AHeader from '../component/AHeader'
import AFooter from '../component/AFooter'
import axios from 'axios'
import { toast } from 'react-toastify'

function Add_categories() {

    const [form, setForm] = useState({
        cate_name: "",
        cate_img: ""
    })
    const changeHandel = (e) => {
        setForm({ ...form, id: new Date().getTime().toString(), [e.target.name]: e.target.value });
        console.log(form);
    }
    function validation() {
        let ans = true;
        if (form.cate_name == "") {
            toast.error("Categories Image Field is Required");
            ans = false;
            return false;
        }
        if (form.cate_img == "") {
            toast.error("Categories image Field is Required");
            ans = false;
            return false;
        }
        return ans;
    }
    const submithandel = async (e) => {
        e.preventDefault(); // not page refresh
        if (validation()) {
            const res = await axios.post(`http://localhost:3000/categories`, form);
            setForm({ ...form, cate_name: "", cate_img: "" });
            toast.success('Categories Add success');
        }
    }
    return (
        <div>
            <AHeader title="Add Categories" />
            < div className="container-fluid" >
                <div className="container">
                    <div className="row">

                        <div className="col-lg-12">
                            <div className="bg-light  p-lg-5 ">
                                <h6 className="d-inline-block text-white text-uppercase bg-primary py-1 px-2">Categories</h6>
                                <h1 className="mb-4">Add Categories</h1>
                                <div id="success" />
                                <form method='post' onSubmit={submithandel} name="sentMessage" id="contactForm" noValidate="novalidate">
                                    <div className="form-row">
                                        <div className="col-sm-12 control-group">
                                            <input onChange={changeHandel} value={form.cate_name} name="cate_name" type="text" className="form-control border-0 p-4" id="name" placeholder="Categories Name" required="required" data-validation-required-message="Please enter Categories name" />
                                            <p className="help-block text-danger" />
                                        </div>
                                        <div className="col-sm-12 control-group">
                                            <input onChange={changeHandel} value={form.cate_img} name="cate_img" type="url" className="form-control border-0 p-4" id="cate_img" placeholder="Categories Image" required="required" data-validation-required-message="Please enter Categories Images" />
                                            <p className="help-block text-danger" />
                                        </div>
                                    </div>

                                    <div>
                                        <button className="btn btn-primary py-3 px-4" type="submit" id="sendMessageButton">Submit</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div >

            <AFooter />
        </div>
    )
}

export default Add_categories