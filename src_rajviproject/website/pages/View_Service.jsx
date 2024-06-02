import React, { useState,useEffect } from 'react'
import Footer from '../component/Footer'
import Header2 from '../component/Header2'
import { useParams } from 'react-router-dom';
import axios from 'axios';

function View_service() {
    const { id } = useParams(); // get id from url which we provided in routes 
    useEffect(() => {
        editdata();
    }, []);

    const [data, setData] = useState([]);
    const editdata = async () => {
        const res = await axios.get(`http://localhost:3000/services?cate_id=${id}`);
        console.log(res.data);
        setData(res.data);
    }
    return (
        <>
            <Header2 title="View Services" />
            <div>
                {/* Open Hours Start */}
                <div className="container-fluid py-5">
                    <div className="container py-5">
                        {
                            data && data.map((value) => {
                                return (
                                    <div className="row">
                                        <div className="col-lg-6" style={{ minHeight: 500 }}>
                                            <div className="position-relative h-100">
                                                <img className="position-absolute w-100 h-100" src="website/img/opening.jpg" style={{ objectFit: 'cover' }} />
                                            </div>
                                        </div>
                                        <div className="col-lg-6 pt-5 pb-lg-5">
                                            <div className="hours-text bg-light p-4 p-lg-5 my-lg-5">
                                                <h6 className="d-inline-block text-white text-uppercase bg-primary py-1 px-2">Open Hours</h6>
                                                <h1 className="mb-4">{value.service_name}</h1>
                                                <p>Dolores lorem lorem ipsum sit et ipsum. Sadip sea amet diam dolore sed et. Sit rebum labore sit sit ut vero no sit. Et elitr stet dolor sed sit et sed ipsum et kasd ut. Erat duo eos et erat sed diam duo</p>
                                                <ul className="list-inline">
                                                    <li className="h6 py-1"><i className="far fa-circle text-primary mr-3" />Mon – Fri : 9:00 AM - 7:00 PM</li>
                                                    <li className="h6 py-1"><i className="far fa-circle text-primary mr-3" />Saturday : 9:00 AM - 6:00 PM</li>
                                                    <li className="h6 py-1"><i className="far fa-circle text-primary mr-3" />Sunday : Closed</li>
                                                </ul>
                                                <a href className="btn btn-primary mt-2">Book Now</a>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }

                    </div>
                </div>
                {/* Open Hours End */}
            </div>


            <Footer />
        </>
    )
}

export default View_service