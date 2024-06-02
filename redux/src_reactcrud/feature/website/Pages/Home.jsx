import React, { useEffect, useState } from 'react'
import { NavLink, Link, useNavigate } from 'react-router-dom'
import Header from '../Component/Header'
import Footer from '../Component/Footer'
import { toast } from 'react-toastify'
import { useDispatch, useSelector } from 'react-redux'
import { userget,userdelete, userupdate } from '../../UserSlice'

function Home() {

    const redirect=useNavigate();
    const {user}=useSelector((state)=>state.user);

    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(userget());
    });

    const statushandel=(id)=>{
        const statusdata=user.filter((value)=>{return value.id==id});
        if(statusdata[0].status=="Block")
        {
            const formvalue={id:statusdata[0].id,status:"Unblock"}
            dispatch(userupdate(formvalue));
            toast.success("User Unblock Success");
        }
        else
        {
            const formvalue={id:statusdata[0].id,status:"Block"}
            dispatch(userupdate(formvalue));
            toast.success("User Block Success");
        }
    }
    
    return (
        <>
            <Header />

            <div className="container mt-5">
                <div className="row">
                    <div className="col-sm-12">
                        <h2 align="center" className='mb-5'>Manage User </h2>
                        <Link to="/add_user" className='btn btn-primary float-end mb-5'>Add Data</Link>
                        <div className="container">
                           
                            <table className="table table-hover">
                                <thead>
                                    <tr>
                                        <th>Id</th>
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th>Password</th>
                                        <th>Mobile</th>
                                        <th>Image</th>
                                        <th align="center">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                   {
                                    user && user.map((value,index)=>{
                                        return(
                                            <tr>
                                                <td>{value.id}</td>
                                                <td>{value.name}</td>
                                                <td>{value.email}</td>
                                                <td>{value.password}</td>
                                                <td>{value.mobile}</td>
                                                <td><img src={value.img} width="100px" alt="" /></td>
                                                <td align="center">
                                                    <button className='btn btn-danger' onClick={()=>{
                                                        dispatch(userdelete(value.id))
                                                        toast.success('User Delete Success');
                                                    }}>Delete</button>
                                                    <button className='btn btn-info' onClick={() => redirect('/edit_user/'+ value.id)}>Edit</button>
                                                    <button className='btn btn-success' onClick={()=>statushandel(value.id)}>{value.status}</button>
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

            <div className="modal" id="myModal">
                <div className="modal-dialog">
                    <div className="modal-content">
                        {/* Modal Header */}
                        <div className="modal-header">
                            <h4 className="modal-title">Edit User</h4>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" />
                        </div>
                        {/* Modal body */}
                        <div className="modal-body">
                            <form action="" method='post'  >
                                <div className="mb-3 mt-3">
                                    <label htmlFor="email" className="form-label">Name:</label>
                                    <input type="text"  className="form-control" placeholder="Enter Name" name="name" />
                                </div>
                                <div className="mb-3 mt-3">
                                    <label htmlFor="email" className="form-label">Email:</label>
                                    <input type="email"  className="form-control" placeholder="Enter email" name="email" />
                                </div>
                                <div className="mb-3 mt-3">
                                    <label htmlFor="email" className="form-label">Mobile:</label>
                                    <input type="number"  className="form-control" placeholder="Enter Mobile" name="mobile" />
                                </div>
                                <div className="mb-3 mt-3">
                                    <label htmlFor="email" className="form-label">Upload Image:</label>
                                    <input type="url"  className="form-control" name="img" />
                                </div>

                                <button type="submit"  data-bs-dismiss="modal" className="btn btn-primary">Save</button>
                            </form>
                        </div>
                        {/* Modal footer */}
                        <div className="modal-footer">
                            <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
                         
            <Footer />
        </>

    )
}

export default Home