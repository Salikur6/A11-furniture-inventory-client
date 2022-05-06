import React from 'react';
import useInventory from '../Hooks/useInventory';
import './ManageInventory.css'

const ManageInventory = () => {
    const [products] = useInventory();
    console.log(products)
    return (
        <div className='container'>
            <div className='row g-4'>

                <div>
                    <div className="tbl-header" >
                        <table className='' cellPadding="0" cellSpacing="0" border="0">
                            <thead>
                                <tr>
                                    <th className='p-3 text-white'>Product Name</th>
                                    <th className='p-3 text-white'>Email</th>
                                    <th className='p-3 text-white'>Quantity</th>
                                    <th className='p-3 text-white'>Price</th>
                                    <th className='p-3 text-white'>Supplier</th>
                                </tr>
                            </thead>
                        </table>
                    </div><div className="tbl-content">
                        <table cellPadding="0" cellSpacing="0" border="0">


                            <tbody>
                                {products.map(pd =>
                                    <tr key={pd?._id}>
                                        <td className='fw-bold'>{pd.name}</td>
                                        <td className='fw-bold'>Email</td>
                                        <td className='fw-bold'>{pd.quantity}</td>
                                        <td className='fw-bold'>${pd.price}</td>
                                        <td className='fw-bold'>{pd.supplier}</td>
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

