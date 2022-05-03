import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const InventoryItems = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/inventory')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div className='container my-5'>

            <div className='my-4'>
                <div className='text-center'>
                    <h2 className='fw-bold'>Featured Products</h2>
                    <p className='fw-bold'>Every Space has its unique needs.</p>
                </div>

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


            <div className='row g-4'>
                {products.slice(0, 6).map(pd =>

                    <div className='col-md-6 col-lg-4 col-12' key={pd._id}>
                        <div className="card">
                            <img style={{ height: '300px' }} src={pd.img} className="card-img-top w-100" alt="furniture images..." />
                            <div className="card-body">
                                <h5 className="card-title fw-bold my-2">{pd.name}</h5>

                                <p style={{ fontFamily: "'Roboto', sans-serif" }} className="card-text my-3 ">{pd.description}</p>

                                <div className='my-3'>
                                    <h6 style={{ fontFamily: "'Roboto', sans-serif" }} className='fw-bold mb-3'>Price: ${pd.price}</h6>
                                    <p style={{ fontFamily: "'Roboto', sans-serif" }} className='fw-bold'>Quantity: {pd.quantity}</p>
                                </div>

                                <h6 style={{ fontFamily: "'Roboto', sans-serif" }} className='fw-bold mb-4'>Supplier Name: {pd.supplier}</h6>

                                <div className='text-center'>
                                    <Link to="#" className="btn btn-warning fw-bold">Stock Update</Link>
                                </div>
                            </div>
                        </div>
                    </div>

                )}
            </div>
        </div>
    );
};

export default InventoryItems;