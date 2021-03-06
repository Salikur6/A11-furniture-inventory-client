import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import useSingleIventory from '../Hooks/useSingleIventory';
import './InventoryItemDetails.css'
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';


const InventoryItem = () => {
    const { register, handleSubmit } = useForm();
    const { itemId } = useParams();
    const { item, refetch } = useSingleIventory(itemId);
    // console.log(item)
    // const [reload, setReload] = useState(false);
    // const [q, setQ] = useState([]);
    const [sold, setSold] = useState(false);
    // console.log(item)

    useEffect(() => {
        fetch(`https://still-chamber-50520.herokuapp.com/inventory/${itemId}`)
            .then(res => res.json())
            .then(data => {
                // console.log(data.quantity)
                // setItem(data)

                if (data.quantity === 0) {
                    setSold(true);
                } else {
                    setSold(false);
                }
            })
    }, [itemId, refetch, sold]);

    //handleing deliverd button for quantity reduce 

    const handleDelivered = (id) => {

        const quantity = parseInt(item.quantity) - 1;

        if (quantity >= 0) {
            const url = `https://still-chamber-50520.herokuapp.com/inventory/${id}`;
            fetch(url, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify({ quantity })
            })
                .then(res => res.json())
                .then(data => {
                    // console.log(data)

                    if (data.modifiedCount === 1) {
                        // setQ(item?.quantity)
                        // setReload(!reload);
                        refetch();
                        toast('Quantity decrease')
                    }

                })
        }
    }
    // const handleDelivered = () => {

    //     const quantity = parseInt(item.quantity) - 1;

    //     if (quantity >= 0) {
    //         const url = `https://still-chamber-50520.herokuapp.com/inventory/${itemId}`;
    //         fetch(url, {
    //             method: 'PUT',
    //             headers: {
    //                 'content-type': 'application/json'
    //             },
    //             body: JSON.stringify({ quantity })
    //         })
    //             .then(res => res.json())
    //             .then(data => {
    //                 // console.log(data)
    //                 setQ(item?.quantity)
    //                 setReload(!reload);
    //             })
    //     }
    // }


    // quantity restock form 

    const onSubmit = (data, e) => {
        const quantity = data?.quantity;
        // console.log(data)
        const url = `https://still-chamber-50520.herokuapp.com/stockinventory/${itemId}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ quantity })
        })
            .then(res => res.json())
            .then(data => {


                // setQ(item?.quantity)
                // setReload(!reload);
                refetch();
                toast('Quantity Added')
                // setSold(false);

            })
    };


    return (
        <div className='container my-5 py-5'>

            <div className="row g-5 align-items-center">
                <div className="col-lg-6">
                    <div><img style={{
                        height: '400px',
                    }} className='w-100 details-img' src={item?.img} alt="" /></div>
                </div>
                <div className="col-lg-6 ps-sm-5">
                    <p style={{ fontSize: '14px' }} className='mt-3 '>Furniture Id: {itemId}</p>
                    <h3 className='fw-bold'>{item?.name}</h3>
                    <p className='my-4 fw-bolder'>{item?.description}</p>
                    <h5 className='fw-bold'>Price: ${item?.price}</h5>
                    <h5 className='my-4' style={{ fontFamily: "'Roboto', sans-serif" }} >Suppiler Name: {item?.supplier}</h5>
                    <h5 className=' fw-bold bg-dark text-white d-inline px-3 rounded-pill'>Quantity: {item?.quantity}</h5>

                    <div className='my-5 d-flex justify-content-evenly'>

                        {
                            sold ? <button className='btn btn-danger fw-bold p-2 rounded-pill' onClick={handleDelivered}>Sold Out</button> : <button className='btn btn-primary fw-bold p-2 rounded-pill' onClick={() => handleDelivered(item?._id)}>Delivered</button>
                        }
                        {/* <button className='btn btn-primary fw-bold p-2 rounded-pill' onClick={handleDelivered}>Delivered</button> */}


                        <Link to='/manageinventory' className='btn btn-dark fw-bold p-2 rounded-pill'>Manage Inventories</Link>
                    </div>
                </div>

                <div className='py-4 text-center'>
                    <h2 className='fw-bold'>Restock Furniture</h2>
                    <div className='my-2'>

                        <form onSubmit={handleSubmit(onSubmit)}>

                            <input type="number" {...register("quantity", { min: 1, max: 999 })} placeholder='Number of Furniture' />
                            <div className='my-3'>
                                <input className='btn btn-info fw-bold' type="submit" value='Increase Quantity' />
                            </div>
                        </form>

                    </div>
                </div>
            </div>



        </div>
    );
};

export default InventoryItem;