import React, { useState } from 'react'

import { toast } from 'react-toastify';
import Footer from '../Component/Footer';
import Header from '../Component/Header';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { userinsert } from '../../UserSlice';

function Add_user() {

    const [formvalue, setFormvalue] = useState({
        id: "",
        name: "",
        email: "",
        password: "",
        mobile: "",
        img: "",
    });

    const changeHandel = (e) => {
        setFormvalue({ ...formvalue, id: new Date().getTime().toString(),status:"Unblock", [e.target.name]: e.target.value });
        console.log(formvalue);
    }

    const vadidation = () => {
        var result = true;
        if (formvalue.name == "") {
            toast.error('Name Field is required !')
            result = false;
            return false;
        }
        if (formvalue.email == "") {
            toast.error('email Field is required !')
            result = false;
            return false;
        }

        if (formvalue.password == "") {
            toast.error('password Field is required !')
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
    
    const dispatch=useDispatch();

    const submitHandel = async (e) => {
        e.preventDefault();
        if (vadidation()) {
            dispatch(userinsert(formvalue));
            toast.success('Data Inserted success');
            setFormvalue({ ...formvalue,name:"",email:"",password:"",mobile:"",img:""});
        }
    }



    return (
        <>
        <Header/>
        <div class="container mt-5">
            <div class="row">
                <div class="col-sm-12">
                    <h2>Add User</h2>
                    <Link to="/" className='btn btn-primary float-end mb-5'>Back</Link>
                    <form action="" method='post' onSubmit={submitHandel} >
                        <div className="mb-3 mt-3">
                            <label htmlFor="email" className="form-label">Name:</label>
                            <input type="text" value={formvalue.name} onChange={changeHandel} className="form-control"  placeholder="Enter Name" name="name" />
                        </div>
                        <div className="mb-3 mt-3">
                            <label htmlFor="email" className="form-label">Email:</label>
                            <input type="email" value={formvalue.email} onChange={changeHandel} className="form-control"  placeholder="Enter email" name="email" />
                        </div>
                        <div className="mb-3 mt-3">
                            <label htmlFor="email" className="form-label">Password:</label>
                            <input type="password" value={formvalue.password} onChange={changeHandel} className="form-control"  placeholder="Enter Password" name="password" />
                        </div>
                        <div className="mb-3 mt-3">
                            <label htmlFor="email" className="form-label">Mobile:</label>
                            <input type="number" value={formvalue.mobile} onChange={changeHandel} className="form-control"  placeholder="Enter Mobile" name="mobile" />
                        </div>
                        <div className="mb-3 mt-3">
                            <label htmlFor="email" className="form-label">Upload Image:</label>
                            <input type="url" value={formvalue.img} onChange={changeHandel} className="form-control" name="img" />
                        </div>
                       
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>

                </div>
            </div>
        </div>
        <Footer/>
        </>
    )
}

export default Add_user