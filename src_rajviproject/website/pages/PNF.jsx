import React, { useEffect } from 'react'
import Footer from '../component/Footer'
import Header2 from '../component/Header2'
import { Link, useNavigate } from 'react-router-dom'

function PNF() {

    const redirect=useNavigate();
    
    useEffect(()=>{
        setTimeout(back,'5000');
    })

    const back=()=>{
        redirect('/'); 
    }

    return (
        <>
            <Header2 title="Page Not Found"/>
            <div>
              
                {/* Open Hours Start */}
                <div className="container-fluid py-5">
                    <div className="container py-5">
                        <div className="row">
                            <div className="col-lg-12" style={{ minHeight: 500 }}>
                                <div className="position-relative h-100">
                                    <h2>Page Not Found</h2>
                                    <Link to="/">Back</Link>
                                </div>
                            </div>
                        
                        </div>
                    </div>
                </div>
                {/* Open Hours End */}
            </div>


            <Footer />
        </>
    )
}

export default PNF