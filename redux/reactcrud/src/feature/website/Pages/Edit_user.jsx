import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify';
import Footer from '../Component/Footer';
import Header from '../Component/Header';
import { Link, redirect, useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { userget, userupdate } from '../../UserSlice';



function Edit_user() {
  
    const [formvalue, setFormvalue] = useState({
        name: "",
        mobile: "",
        img: "",
    });

    const {user}=useSelector((state)=>state.user);

    const dispatch=useDispatch();
    useEffect(()=>{
        dispatch(userget());
        editdata();
    },[]);

    const {id}=useParams();
    const editdata=()=>{
        const singledata=user.filter((value)=>{ return value.id==id});
        setFormvalue(singledata[0]);
    }

    const changeHandel = (e) => {
        setFormvalue({ ...formvalue, [e.target.name]: e.target.value });
        console.log(formvalue);
    }

    const vadidation = () => {
        var result = true;
        if (formvalue.name == "") {
            toast.error('Name Field is required !')
            result = false;
            return false;
        }
      
        if (formvalue.mobile == "") {
            toast.error('mobile Field is required !')
            result = false;
            return false;
        }
        if (formvalue.img == "") {
            toast.error('img Field is required !')
            result = false;
            return false;
        }
        return result;
    }

    const redirect=useNavigate();
    const submitHandel = async (e) => {
        e.preventDefault();
        if (vadidation()) {
            dispatch(userupdate(formvalue))
            toast.success('User Updated success');
            redirect('/');
        }
    }



    return (
        <>
        <Header/>
        <div class="container mt-5">
            <div class="row">
                <div class="col-sm-12">
                    <h2>Edit User</h2>
                    <Link to="/" className='btn btn-primary float-end mb-5'>Back</Link>
                    <form action="" method='post' onSubmit={submitHandel} >
                        <div className="mb-3 mt-3">
                            <label htmlFor="email" className="form-label">Name:</label>
                            <input type="text" value={formvalue.name} onChange={changeHandel} className="form-control"  placeholder="Enter Name" name="name" />
                        </div>
                      
                        <div className="mb-3 mt-3">
                            <label htmlFor="email" className="form-label">Mobile:</label>
                            <input type="number" value={formvalue.mobile} onChange={changeHandel} className="form-control"  placeholder="Enter Mobile" name="mobile" />
                        </div>
                        <div className="mb-3 mt-3">
                            <label htmlFor="email" className="form-label">Upload Image:</label>
                            <input type="url" value={formvalue.img} onChange={changeHandel} className="form-control" name="img" />
                        </div>
                       
                        <button type="submit" className="btn btn-primary">Save</button>
                    </form>

                </div>
            </div>
        </div>
        <Footer/>
        </>
    )
}

export default Edit_user