import React from 'react';
import { useAuthState, useSendEmailVerification } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../Firebase.init';
import Spinner from '../../Hooks/Spinner';

const PrivetRoute = ({ children }) => {
    const [user, loading, error] = useAuthState(auth);
    let location = useLocation();

    const [sendEmailVerification, sending, emailVerifiyError] = useSendEmailVerification(auth);

    console.log(user)

    if (loading) {
        return <Spinner></Spinner>
    }



    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    // user.providerData === 'password'

    <h6>{error && <h6>{error?.message}</h6>}</h6>



    if (!user?.emailVerified) {
        return <div className=' bg-dark text-white text-center'>
            <div className='container pt-5'>
                <h3 className='fw-bold mt-4 text-primary'>Hello "{user?.displayName}"</h3>
                <h4 className='fw-bold my-5'>Welcome to Homely Furniture</h4>
                <h3><span className='text-warning d-block my-3'>please verify your email address.</span></h3>
            </div>
            <div className='text-center pb-5'>
                <h6 className='fw-bold'>{sending && <p>Email Sending...</p>}</h6>
                <h6 className='fw-bold'>{emailVerifiyError && <p>{emailVerifiyError.message}</p>}</h6>

                <button className='btn btn-primary fw-bold mt-4' onClick={async () => {
                    await sendEmailVerification();
                    toast('Sent email');
                }}>Resend Email</button>
            </div>
        </div>
    }


    return children;
};

export default PrivetRoute;