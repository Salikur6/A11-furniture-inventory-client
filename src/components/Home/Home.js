import React from 'react';
import './Home.css'
import banner from '../../img/banner2.jpg'
import InventoryItems from './InventoryItems/InventoryItems';
import LogoCarousel from './LogoCarousel/LogoCarousel';
import About from './About/About';
import Contact from './Contact/Contact';
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../Firebase.init';

const Home = () => {
    const [user] = useAuthState(auth);
    return (
        <>
            <div className=''>
                <div className='position-relative banner'>

                    <img style={{ height: '95vh' }} className='w-100' src={banner} alt="" />
                </div>

                <div className='position-absolute text-white' style={{ left: '20%', top: '30%' }}>
                    <div className="">
                        <h1 className='fw-bold'>The rhythm</h1>
                        <h1>of happiness</h1>
                        <p>Modern & Powerfull Furniture <br />
                            High quality furniture rentals available
                        </p>
                        {user ? <Link to='/manageinventory' className='btn btn-success fw-bold px-4 my-3'>Manage All Items</Link> : <Link to='/register' className='btn btn-success fw-bold px-4 my-3'>Sign up for free</Link>}
                    </div>
                </div>


            </div>

            <LogoCarousel></LogoCarousel>
            <InventoryItems></InventoryItems>


            <About></About>

            <Contact></Contact>

            <div className="row"></div>

        </>


    );
};

export default Home;