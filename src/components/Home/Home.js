import React from 'react';
import './Home.css'
import banner from '../../img/banner2.jpg'
import InventoryItems from './InventoryItems/InventoryItems';
import LogoCarousel from './LogoCarousel/LogoCarousel';
import About from './About/About';
import Contact from './Contact/Contact';

const Home = () => {
    return (
        <>
            <div className=''>
                <div className='position-relative banner'>

                    <img style={{ height: '90vh' }} className='w-100' src={banner} alt="" />
                </div>

                <div className='position-absolute text-white' style={{ left: '20%', top: '30%' }}>
                    <div className="">
                        <h1 className='fw-bold'>The rhythm</h1>
                        <h1>of happiness</h1>
                        <p>Modern & Powerfull Furniture <br />
                            High quality furniture rentals available
                        </p>
                        <button className='btn btn-success fw-bold px-4 my-3'>Sign up for free</button>
                    </div>
                </div>


            </div>

            <InventoryItems></InventoryItems>


            <About></About>

            <Contact></Contact>

            <LogoCarousel></LogoCarousel>
        </>


    );
};

export default Home;