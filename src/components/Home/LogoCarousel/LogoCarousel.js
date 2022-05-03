import React from 'react';
import Slider from "react-slick";
import './LogoCarousel.css'

const LogoCarousel = () => {

    const settings = {
        className: "center",
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 5,
        autoplay: true,
        autoplaySpeed: 2000,
        swipeToSlide: true,
        arrows: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ],
        afterChange: function (index) {
            // console.log(
            //     `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
            // );
        }

    };
    return (
        <div style={{ backgroundColor: '#E3EEF2' }}>
            <div className='container my-5 py-4'>

                <p className='fw-bold text-center mb-5'>Over 15000 businesses of all sizes trust us.</p>
                <Slider {...settings}>
                    <div className='text-center d-flex justify-content-center'>
                        <h3><img className='rounded rounded-pill' src="https://i.ibb.co/QmJRMT3/7.jpg" alt="" /></h3>
                    </div>
                    <div className='text-center d-flex justify-content-center'>
                        <h3><img className='rounded rounded-pill' src="https://i.ibb.co/JQdgPv6/6.jpg" alt="" /></h3>
                    </div>
                    <div className='text-center d-flex justify-content-center'>
                        <h3><img className='rounded rounded-pill' src="https://i.ibb.co/HYrv0bB/5.jpg" alt="" /></h3>
                    </div>
                    <div className='text-center d-flex justify-content-center'>
                        <h3><img className='rounded rounded-pill' src="https://i.ibb.co/BKM3z2z/4.jpg" alt="" /></h3>
                    </div>
                    <div className='text-center d-flex justify-content-center'>
                        <h3><img className='rounded rounded-pill' src="https://i.ibb.co/34qDgFK/3.jpg" alt="" /></h3>
                    </div>
                    <div className='text-center d-flex justify-content-center'>
                        <h3><img className='rounded rounded-pill' src="https://i.ibb.co/yXcFLGz/1.jpg" alt="" /></h3>
                    </div>
                    <div className='text-center d-flex justify-content-center'>
                        <h3><img className='rounded rounded-pill' src="https://i.ibb.co/YLS0HVb/logo.jpg" alt="" /></h3>
                    </div>
                    <div className='text-center d-flex justify-content-center'>
                        <h3><img className='rounded rounded-pill' src="https://i.ibb.co/JQdgPv6/6.jpg" alt="" /></h3>
                    </div>
                </Slider>
            </div>
        </div>
    );
};

export default LogoCarousel;