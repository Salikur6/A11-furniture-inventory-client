import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import auth from '../../Firebase.init';
import Spinner from '../../Hooks/Spinner';
import { Link } from 'react-router-dom';
import arrow from '../../img/arrow.svg';

const ResetPassword = () => {
    const [email, setEmail] = useState('');


    const [sendPasswordResetEmail, sending, resetPasswordError] = useSendPasswordResetEmail(auth);

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (resetPasswordError?.message) {
            event.target.reset();
            return toast.warning('Enter a valid email');

        }
        else {

            await sendPasswordResetEmail(email);
            toast.success('Sent code via email')
            console.log(sendPasswordResetEmail(email))
        }


        event.target.reset();

    }




    return (
        <div className='bg-dark text-white'>
            <div className='container text-center min-vh-100 d-flex justify-content-center align-items-center'>
                <div>
                    <h2>Forgot Your Password?</h2>
                    <h6 className='mt-4'>Enter your email and we will send you a link to reset your password.</h6>

                    <form className='my-5' onSubmit={handleSubmit}>
                        <div className='my-4 w-75 mx-auto'>
                            <input className='form-control fw-bold' type="email" name="email" placeholder='Email' onChange={(e) => setEmail(e.target.value)} required />


                            {sending && <Spinner className='my-3'></Spinner>}
                            {resetPasswordError ? <p className='mt-3 mb-2 text-danger fw-bold'>{resetPasswordError?.message}</p> : ""}

                            {resetPasswordError && <Link className='d-block fw-bold' onClick={() => window.location.reload()} to=''>Refresh page</Link>}

                            <input type='submit' className='fw-bold btn btn-info mt-3 px-4' value='Reset Password' />

                        </div>

                        <h6 className='fw-bold mt-5'>Return to <Link className='text-decoration-none' to='/login'>Sign In <img style={{ width: '15px' }} src={arrow} alt="" /></Link></h6>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ResetPassword;