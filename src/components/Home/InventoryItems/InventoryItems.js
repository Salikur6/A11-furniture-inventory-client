import { useQuery } from 'react-query';
import { Link, useNavigate } from 'react-router-dom';
import Spinner from '../../../Hooks/Spinner';
// import useInventory from '../../Hooks/useInventory';

const InventoryItems = () => {
    // const [products] = useInventory();
    // console.log(products)
    const navigate = useNavigate();


    const { data: products, isLoading } = useQuery('products', () => fetch('https://still-chamber-50520.herokuapp.com/inventory').then(res => res.json()))


    // spin if product not loaded
    if (isLoading) {
        return <Spinner></Spinner>
    }



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

            {/* home page 6 items products slice and map */}
            {/* {load} */}
            <div className='row g-5'>


                {products.slice(0, 6).map(pd =>

                    <div className='col-md-6 col-lg-4 col-12' key={pd?._id}>
                        <div style={{
                            background: '#e0e0e0',
                            boxShadow: '33px 33px 67px #acacac, -33px -33px 67px #fff',
                            borderRadius: '20px'


                        }} className="card">
                            <img style={{ height: '300px', borderRadius: '20px 20px 0 0' }} src={pd?.img} className="card-img-top w-100" alt="furniture images..." />
                            <div className="card-body">
                                <h5 className="card-title fw-bold my-2">{pd?.name}</h5>

                                <p style={{ fontFamily: "'Roboto', sans-serif" }} className="card-text my-3 ">{pd?.description.slice(0, 60) + '.....'} </p>

                                <div className='my-3'>
                                    <h6 style={{ fontFamily: "'Roboto', sans-serif" }} className='fw-bold mb-3'>Price: ${pd?.price}</h6>
                                    <p style={{ fontFamily: "'Roboto', sans-serif" }} className='fw-bold'>Quantity: {pd?.quantity}</p>
                                </div>

                                <h6 style={{ fontFamily: "'Roboto', sans-serif" }} className='fw-bold mb-4'>Supplier Name: {pd?.supplier}</h6>

                                <div className='text-center'>
                                    <Link to={`/inventory/${pd?._id}`} className="btn btn-warning fw-bold">Stock Update</Link>
                                </div>
                            </div>
                        </div>
                    </div>

                )}
                <div className='text-center my-5'>
                    <button onClick={() => navigate('/manageinventory')} className='btn btn-dark fw-bold p-2 px-5 rounded-pill'>Manage Inventories</button>
                </div>
            </div>


        </div>
    );
};

export default InventoryItems;