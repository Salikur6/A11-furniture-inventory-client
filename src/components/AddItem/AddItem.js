import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../Firebase.init';

const AddItem = () => {
    const [user] = useAuthState(auth)
    const { register, handleSubmit, formState: { errors } } = useForm();



    const onSubmit = (data, e) => {

        console.log(data)
        const { name, email, description, price, quantity, supplier, img } = data;
        console.log(name)

        fetch('https://still-chamber-50520.herokuapp.com/addproduct', {
            method: 'POST',
            headers: {
                'authorization': `${user.email}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, email, description, price, quantity, supplier, img }),
        })
            .then(response => response.json())
            .then(d => {
                console.log('Success:', d);
                toast('New Item Added');
                e.target.reset();

            })
    };

    console.log(errors);


    return (
        <div>
            <h2 className='text-center mt-3'>Add Item Page</h2>





            <form className='w-50 mx-auto my-5' onSubmit={handleSubmit(onSubmit)}>
                <input type="text" className='form-control mb-2' placeholder="product Name" {...register("name", { required: true, maxLength: 80 })} />
                <input type="email" className='form-control mb-2' placeholder="email" value={user?.email} {...register("email", { required: true, pattern: /^\S+@\S+$/i })} />

                <input type="url" className='form-control mb-2' placeholder="img" {...register("img", {})} />
                <input type="text" className='form-control mb-2' placeholder="description" {...register("description", {})} />
                <input type="number" className='form-control mb-2' placeholder="price" {...register("price", {})} />
                <input type="text" className='form-control mb-2' placeholder="supplier" {...register("supplier", {})} />
                <input type="number" className='form-control mb-2' placeholder="quantity" {...register("quantity", {})} />

                <div className='text-center'>
                    <input type="submit" className='btn btn-primary fw-bold' />
                </div>
            </form>






        </div>
    );
};

export default AddItem;