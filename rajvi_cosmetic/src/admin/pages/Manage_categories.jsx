import React, { useEffect, useState } from 'react'
import AHeader from '../component/AHeader'
import AFooter from '../component/AFooter'
import axios from 'axios';
import { toast } from 'react-toastify';

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
                                                        <td><img src={value.cate_img} width="50px"/></td>
                                                        <td>
                                                            <button className='btn btn-info mr-2'>Edit</button>
                                                            <button className='btn btn-danger' onClick={()=>deletehandel(value.id)} >Delete</button>
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

export default Manage_categories