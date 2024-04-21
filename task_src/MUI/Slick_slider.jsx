import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function Slick_slider() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <Slider {...settings}>
            <div>  
             <img src="https://www.w3schools.com/bootstrap5/la.jpg" alt="" width="100%" height="200px" />
            </div>
            <div>  
             <img src="https://www.w3schools.com/bootstrap5/la.jpg" alt="" width="100%"  height="200px" />
            </div>
            <div>  
             <img src="https://www.w3schools.com/bootstrap5/la.jpg" alt="" width="100%"  height="200px" />
            </div>
            <div>  
             <img src="https://www.w3schools.com/bootstrap5/la.jpg" alt="" width="100%"  height="200px" />
            </div>
            <div>  
             <img src="https://www.w3schools.com/bootstrap5/la.jpg" alt="" width="100%"  height="200px" />
            </div>
            
        </Slider>
    )
}

export default Slick_slider