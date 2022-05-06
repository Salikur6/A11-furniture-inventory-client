import React from 'react';
import { useNavigate } from 'react-router-dom';
import useInventory from '../Hooks/useInventory';
import './ManageInventory.css'

const ManageInventory = () => {
    const [products] = useInventory();
    const navigate = useNavigate();
    return (
        <div className='manageInventory'>
            <div className='container py-5'>
                <div className='row g-4 my-5'>

                    <div>
                        <div className="tbl-header" >
                            <table className='' cellPadding="0" cellSpacing="0" border="0">
                                <thead>
                                    <tr>
                                        <th className='p-3 fs-5'>Product Name</th>
                                        <th className='p-3 fs-5'>Email</th>
                                        <th className='p-3 fs-5'>Quantity</th>
                                        <th className='p-3 fs-5'>Price</th>
                                        <th className='p-3 fs-5'>Supplier</th>
                                        <th className='p-3 fs-5'>modification
                                        </th>
                                        <th className='p-3 fs-5'></th>

                                    </tr>
                                </thead>
                            </table>
                        </div><div className="tbl-content">
                            <table className='table table-hover' cellPadding="0" cellSpacing="0" border="0">


                                <tbody>
                                    {products.map(pd =>
                                        <tr key={pd?._id}>
                                            <td className='fw-bold py-4'>{pd.name}</td>
                                            <td className='fw-bold  py-4'>Email</td>
                                            <td className='fw-bold'>{pd.quantity}</td>
                                            <td className='fw-bold'>${pd.price}</td>
                                            <td className='fw-bold'>{pd.supplier}</td>
                                            <td className='fw-bold'>

                                                <button className='btn btn-warning' onClick={() => navigate(`/inventory/${pd._id}`)}>Update Stock</button>

                                            </td>
                                            <td className='fw-bold'>

                                                <button className='btn btn-danger'>Delete</button>

                                            </td>
                                        </tr>
                                    )}
                                </tbody>

                            </table>
                        </div>

                    </div>


                </div>
            </div>
        </div>
    );
};

export default ManageInventory;

