import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <>
            <div style={{ backgroundColor: 'rgb(13, 17, 23)', color: 'rgb(88, 166, 255)' }}>
                <div className='container py-5'>
                    <div className="row">
                        <div className="col-lg-4">
                            <h4 className='text-white'>pages</h4>
                            <ul>
                                <li><Link className='text-decoration-none fw-bold' to='/'>Home</Link></li>
                                <li><Link className='text-decoration-none fw-bold' to=''>Services</Link></li>
                                <li><Link className='text-decoration-none fw-bold' to=''>Blogs</Link></li>
                                <li><Link className='text-decoration-none fw-bold' to=''>About Me</Link></li>

                            </ul>
                        </div>
                        <div className="col-lg-4">

                            <h4 className='text-white'>pages</h4>
                            <ul>
                                <li><Link className='text-decoration-none fw-bold' to='/'>Home</Link></li>
                                <li><Link className='text-decoration-none fw-bold' to=''>Services</Link></li>
                                <li><Link className='text-decoration-none fw-bold' to=''>Blogs</Link></li>
                                <li><Link className='text-decoration-none fw-bold' to=''>About Me</Link></li>

                            </ul>
                        </div>
                        <div className="col-lg-4">

                            <h4 className='text-white'>pages</h4>
                            <ul>
                                <li><Link className='text-decoration-none fw-bold' to='/'>Home</Link></li>
                                <li><Link className='text-decoration-none fw-bold' to=''>Services</Link></li>
                                <li><Link className='text-decoration-none fw-bold' to=''>Blogs</Link></li>
                                <li><Link className='text-decoration-none fw-bold' to=''>About Me</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>


            <div style={{ backgroundColor: 'rgb(55, 65, 81)', marginBottom: '-16px' }}>
                <div className='container'>
                    <p className='fw-bold text-center py-3 pt-4 text-white'>	&#169; {(new Date().getFullYear())} Homely. All Right Reserved By <a href='https://github.com/Salikur6' target='_blank' rel="noreferrer">Salikur Islam</a></p>
                </div>
            </div>
        </>

    );
};

export default Footer;