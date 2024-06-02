import React, { useEffect, useState } from 'react'
import AHeader from '../component/AHeader'
import AFooter from '../component/AFooter'
import axios from 'axios';
import { toast } from 'react-toastify';



function Manage_services() {

    const [data, setData] = useState([]);
    useEffect(() => {
        fetch();
    });
    const fetch = async () => {
        const res = await axios.get(`http://localhost:3000/services`);
        console.log(res.data);
        setData(res.data)
    }
    const deletehandel = async (id) => {
        const res = await axios.delete(`http://localhost:3000/services/${id}`);
        toast.success('Services Delete success');
    }

    return (
        <div>
            <AHeader title="Manage Services" />
            < div className="container-fluid" >
                <div className="container">
                    <div className="row">

                        <div className=" col-lg-12 ">
                            <div className="bg-light  p-lg-5">
                                <h6 className="d-inline-block text-white text-uppercase bg-primary py-1 px-2">Services</h6>
                                <h1 className="mb-4">Manage Services</h1>
                                <div id="success" />

                                <table className="table">
                                    <thead className="table-dark">
                                        <tr>
                                            <th>ID</th>
                                            <th>Categories ID</th>
                                            <th>Service Image</th>
                                            <th>Service Name</th>
                                            <th>Main Price</th>
                                            <th>Discounted Price</th>
                                            <th>Discription</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            data && data.map((value, index, arr) => {
                                                return (
                                                    <tr>
                                                        <td>{value.id}</td>
                                                        <td>{value.cate_id}</td>
                                                        <td><img src={value.ser_img} alt="" width="50px" /></td>
                                                        <td>{value.service_name}</td>
                                                        <td>{value.main_price}</td>
                                                        <td>{value.dis_price}</td>
                                                        <td>{value.desc}</td>
                                                        <td>
                                                            <button className='btn btn-info mr-2'>Edit</button>
                                                            <button className='btn btn-danger' onClick={()=>deletehandel(value.id)}>Delete</button>
                                                        </td>
                                                    </tr>
                                                )
                                            })
                                        }
                                    </tbody>
                                </table>

                            </div>
                        </div>
                    </div>
                </div>
            </div >

            <AFooter />
        </div>
    )
}

export default Manage_services