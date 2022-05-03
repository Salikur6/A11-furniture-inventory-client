import React from 'react';
import './Contact.css'

const Contact = () => {
    return (
        <div className='contact'>
            <div className='container my-5'>


                <div className="row">
                    <div className='my-5 text-white' style={{
                        zIndex: '999'
                    }}>
                        <h2 className='text-center fw-bold'>We'd Love to know what you think</h2>


                        <div className='d-flex justify-content-center'>
                            <div style={{ height: '2px', width: '20%' }} className='bg-danger'>
                            </div>
                        </div>

                        <div className='d-flex justify-content-center'>
                            <div style={{ height: '2px', width: '15%' }} className='bg-danger my-1'>
                            </div>
                        </div>

                        <div className='d-flex justify-content-center'>
                            <div style={{ height: '2px', width: '10%' }} className='bg-danger'>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='row'>


                    <div className="col-lg-6 col-md-6 p-4" style={{
                        zIndex: '999',

                        borderTop: '1px solid rgba(255, 255, 255, 0.2)',
                        borderLeft: '1px solid rgba(255, 255, 255, 0.2)',
                        boxShadow: '5px 5px 30px rgb(0 0 0 / 20%)',
                        backgroundColor: '#54635c61'
                    }}>


                        <form >
                            <div className="mb-4">
                                <label className="form-label fw-bold text-white">Full Name</label>
                                <input type="text" className="form-control custom"
                                    name='name'
                                    placeholder='Full Name'
                                />

                            </div>
                            <div className="mb-4">
                                <label className="form-label fw-bold text-white">Email address</label>
                                <input type="email" className="form-control custom"
                                    name='email' aria-describedby="emailHelp" placeholder='Email' />

                            </div>
                            <div className="mb-4">
                                <label className="form-label fw-bold text-white">Message</label>
                                <input type="text" className="form-control custom"
                                    name='message'
                                    placeholder='How can we improve?'
                                />

                            </div>

                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form>
                    </div>
                    <div className="col-lg-6 col-md-6 d-flex justify-content-center" style={{ zIndex: '999' }}>
                        <div>
                            <div className='mt-5'>
                                <h3 className='fw-bold text-white'>Contact</h3>
                                <address>
                                    <a className='fw-bold' href="mailto:xyz@abc.com">salikur6@gmail.com</a>
                                </address>

                            </div>
                            <div className='mt-4 text-white'>
                                <h3 className='fw-bold'>Based in</h3>
                                <address>
                                    <p>Sylhet, Bangladesh</p>
                                </address>
                            </div>

                            <div className='my-5'>
                                <a href="https://www.facebook.com/Salikur/" target='blank'><img style={{ width: '25px' }} src="https://i.ibb.co/KxL2GdD/facebook.png" alt="" /></a>

                                <a className='mx-3' href="https://www.instagram.com/salikur_islam_salik/" target='blank'><img style={{ width: '25px' }} src="https://i.ibb.co/yWcpBgF/instagram.png" alt="" /></a>

                                <a href="https://github.com/Salikur6" target='blank'><img style={{ width: '25px' }} src="https://i.ibb.co/7Js8Bk0/github.png" alt="" /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;