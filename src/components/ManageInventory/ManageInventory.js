import React from 'react';
import { useNavigate } from 'react-router-dom';
import useInventory from '../Hooks/useInventory';
import './ManageInventory.css'

const ManageInventory = () => {
    const [products] = useInventory();
    const navigate = useNavigate();
    return (
        <div className='manageInventory'>
            <div className='py-5'>
                <div style={{ width: '95%' }} className='row g-4 my-5 mx-auto'>
                    <div className="tbl-header" >
                        <table className="table table-hover m-0">
                            <thead>
                                <tr>
                                    <th className='fw-bold p-3 fs-5'>Product Name</th>
                                    <th className='fw-bold p-3 fs-5' >Email</th>
                                    <th className='fw-bold p-3 fs-5' >Stock</th>
                                    <th className='fw-bold p-3 fs-5' >Price</th>
                                    <th className='fw-bold p-3 fs-5' >Supplier</th>
                                    <th className='fw-bold p-3 fs-5' >modifiy</th>
                                </tr>

                            </thead>
                        </table>
                    </div>

                    <div className="tbl-content">
                        <table className='table table-sm table-hover' cellPadding="0" cellSpacing="0" border="0">
                            <div className='mt-4'></div>
                            <tbody>
                                {products.map(pd =>
                                    <tr className='border-5' key={pd?._id}>
                                        <td data-label='Product Name' className='fw-bold py-4'>{pd.name}</td>
                                        <td data-label='Email' className='fw-bold  py-4'>Email</td>
                                        <td data-label='Stock' className='fw-bold text-center'>{pd.quantity}</td>
                                        <td data-label='Price' className='fw-bold text-center'>${pd.price}</td>
                                        <td data-label='Supplier' className='fw-bold text-center'>{pd.supplier}</td>
                                        <td data-label='modifiy' className='fw-bold text-center'>
                                            <div>
                                                <button className='btn btn-warning' onClick={() => navigate(`/inventory/${pd._id}`)}>Update Stock</button></div>
                                        </td>
                                        <td className='fw-bold'>
                                            <div>
                                                <button className='btn btn-danger'>Delete</button>
                                            </div>
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ManageInventory;

