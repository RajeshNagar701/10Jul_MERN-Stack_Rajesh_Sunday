import React, { useState, useEffect } from 'react'
import AHeader from '../component/AHeader'
import AFooter from '../component/AFooter'
import axios from 'axios'
import { toast } from 'react-toastify'

function Add_services() {

    const [data, setData] = useState([]);
    useEffect(() => {
        fetch();
    });
    const fetch = async () => {
        const res = await axios.get(`http://localhost:3000/categories`);
        console.log(res.data);
        setData(res.data)
    }


    const [form, setForm] = useState({
        cate_id: "",
        service_name: "",
        desc: "",
        main_price: "",
        dis_price: "",
        ser_img: ""
    })

    const changeHandel = (e) => {
        setForm({ ...form, id: new Date().getTime().toString(), [e.target.name]: e.target.value });
        console.log(form);
    }

    function validation() {
        let ans = true;
        if (form.cate_id == "") {
            toast.error("Categories Field is Required");
            ans = false;
            return false;
        }
        if (form.service_name == "") {
            toast.error("Service Name Field is Required");
            ans = false;
            return false;
        }
        if (form.ser_img == "") {
            toast.error("Service Image Field is Required");
            ans = false;
            return false;
        }
        if (form.main_price == "") {
            toast.error("Main Price Field is Required");
            ans = false;
            return false;
        }
        if (form.dis_price == "") {
            toast.error("Discounted Price Field is Required");
            ans = false;
            return false;
        }

       
        if (form.desc == "") {
            toast.error("Discription Field is Required");
            ans = false;
            return false;
        }
        return ans;
    }




    const submithandel = async (e) => {
        if (validation()) {
            e.preventDefault(); // not page refresh
            const res = await axios.post(`http://localhost:3000/services`, form);
            setForm({ ...form, service_name: "", desc: "", main_price: "", dis_price: "", ser_img: "" });
            toast.success('Services Add success');
        }
    }


    return (
        <div>
            <AHeader title="Add Services" />
            < div className="container-fluid" >
                <div className="container">
                    <div className="row">

                        <div className="col-lg-12">
                            <div className="bg-light  p-lg-5 ">
                                <h6 className="d-inline-block text-white text-uppercase bg-primary py-1 px-2">Services</h6>
                                <h1 className="mb-4">Add Services</h1>
                                
                                <form method='post' onSubmit={submithandel} name="sentMessage" id="contactForm" >
                                    <div className="form-row">
                                        <div className="col-sm-12 control-group">
                                            <select onChange={changeHandel} value={form.cate_id} name="cate_id" className="form-control border-0" placeholder="Services Name"  >
                                                <option value="" selected>-------- Select Categories ---------</option>
                                                {
                                                    data && data.map((value, index, arr) => {
                                                        return (
                                                            <option value={value.id}>{value.cate_name}</option>
                                                        )
                                                    })
                                                }


                                            </select>
                                            <p className="help-block text-danger" />
                                        </div>
                                        <div className="col-sm-12 control-group">
                                            <input type="text" className="form-control border-0 p-4" onChange={changeHandel} value={form.service_name} name="service_name" placeholder="Services Name" />
                                            <p className="help-block text-danger" />
                                        </div>
                                        <div className="col-sm-12 control-group">
                                            <input type="url" className="form-control border-0 p-4" onChange={changeHandel} value={form.ser_img} name="ser_img" placeholder="Service Image"/>
                                            <p className="help-block text-danger" />
                                        </div>
                                        <div className="col-sm-12 control-group">
                                            <input type="number" className="form-control border-0 p-4" onChange={changeHandel} value={form.main_price} name="main_price" placeholder="Main Price" />
                                            <p className="help-block text-danger" />
                                        </div>
                                        <div className="col-sm-12 control-group">
                                            <input type="number" className="form-control border-0 p-4" onChange={changeHandel} value={form.dis_price} name="dis_price" placeholder="Discounted Price"/>
                                            <p className="help-block text-danger" />
                                        </div>
                                    </div>

                                    <div className="control-group">
                                        <textarea className="form-control border-0 py-3 px-4" onChange={changeHandel} value={form.desc} name="desc" rows={3} id="message" placeholder="Service Description" defaultValue={""} />
                                        <p className="help-block text-danger" />
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

export default Add_services