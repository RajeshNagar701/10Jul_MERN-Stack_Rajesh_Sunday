import React, { useEffect, useState } from 'react'
import AHeader from '../component/AHeader'
import AFooter from '../component/AFooter'
import axios from 'axios';
import { toast } from 'react-toastify';
import $ from "jquery";

function Manage_categories() {

    const [data, setData] = useState([]);

    useEffect(() => {
        fetch();
    });
    const fetch = async () => {
        const res = await axios.get(`http://localhost:3000/categories`);
        console.log(res.data);
        setData(res.data)
    }

    const deletehandel = async (id) => {
        const res = await axios.delete(`http://localhost:3000/categories/${id}`);
        toast.success('Categories Delete success');
        fetch();
    }


    const [form, setForm] = useState({
        cate_name: "",
        cate_img: ""
    })


    const edithandel = async (id) => {
        const res = await axios.get(`http://localhost:3000/categories/${id}`);
        console.log(res.data);
        setForm(res.data);
    }

  
    const changeHandel = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
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
            const res = await axios.patch(`http://localhost:3000/categories/${form.id}`, form);
            setForm({ ...form, cate_name: "", cate_img: "" });
            document.getElementById('myModal').style.display="none";
            toast.success('Categories Update success'); 
        }
    }





    return (
        <div>
            <AHeader title="Manage Categories" />
            < div className="container-fluid" >
                <div className="container">
                    <div className="row">

                        <div className=" col-lg-12 ">
                            <div className="bg-light  p-lg-5">
                                <h6 className="d-inline-block text-white text-uppercase bg-primary py-1 px-2">Contact</h6>
                                <h1 className="mb-4">Manage Categories</h1>
                                <div id="success" />

                                <table className="table">
                                    <thead className="table-dark">
                                        <tr>
                                            <th>ID</th>
                                            <th>Categories Name</th>
                                            <th>Image</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            data && data.map((value, index, arr) => {
                                                return (
                                                    <tr>
                                                        <td>{value.id}</td>
                                                        <td>{value.cate_name}</td>
                                                        <td><img src={value.cate_img} width="50px" /></td>
                                                        <td>
                                                            <button className='btn btn-info mr-2'  data-toggle="modal" data-target="#myModal" onClick={() => edithandel(value.id)}>Edit</button>
                                                            <button className='btn btn-danger' onClick={() => deletehandel(value.id)} >Delete</button>
                                                        </td>
                                                    </tr>
                                                )
                                            })
                                        }
                                    </tbody>
                                </table>


                                <div className="modal" id="myModal">
                                    <div className="modal-dialog" >
                                        <div className="modal-content">
                                            {/* Modal Header */}
                                            <div className="modal-header">
                                                <h4 className="modal-title">Edit Categories</h4>
                                                <button type="button" className="close" data-dismiss="modal">×</button>
                                            </div>
                                            {/* Modal body */}
                                            <div className="modal-body">

                                                <form method='post'  name="sentMessage" id="contactForm" noValidate="novalidate">
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
                                                        <button className="btn btn-primary py-3 px-4" onClick={submithandel} data-dismiss="modal" type="submit" id="sendMessageButton">Submit</button>
                                                    </div>
                                                </form>
                                            </div>
                                            {/* Modal footer */}
                                            <div className="modal-footer">
                                                <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>




                            </div>
                        </div>
                    </div>
                </div>
            </div >

            <AFooter />
        </div>
    )
}

export default Manage_categories