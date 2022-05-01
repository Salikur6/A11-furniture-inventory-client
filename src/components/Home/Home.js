import React from 'react';
import './Home.css'
import banner from '../../img/banner2.jpg'

const Home = () => {
    return (
        <div className=''>
            <div className='position-relative banner'>

                <img style={{ height: '100vh' }} className='w-100' src={banner} alt="" />
            </div>

            <div className='position-absolute text-white' style={{ left: '20%', top: '40%' }}>
                <div className="">
                    <h1 className='fw-bold'>The rhythm</h1>
                    <h1>of happiness</h1>
                    <p>Modern & Powerfull Furniture <br />
                        High quality furniture rentals available
                    </p>
                </div>
            </div>
        </div>


    );
};

export default Home;