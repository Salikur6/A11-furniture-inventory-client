import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../Firebase.init';
import Spinner from '../../Hooks/Spinner';

const PrivetRoute = ({ children }) => {
    const [user, loading, error] = useAuthState(auth);
    let location = useLocation();

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
        return <div>
            <h2>Hi {user?.displayName}</h2>
            <h3>Welcome to Homely Furniture, please verify your email address.</h3>
        </div>
    }


    return children;
};

export default PrivetRoute;