import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../Firebase.init';
import Spinner from '../../Hooks/Spinner';
import { Link, useLocation, useNavigate } from 'react-router-dom';


const Register = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [active, setActive] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();


    const from = location.state?.from?.pathname || "/";

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    console.log(error)

    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);

    const handleGoogleSignIn = () => {
        signInWithGoogle();
    }


    const handleCheck = e => {
        const checkBox = e.target.checked;
        if (checkBox === true) {
            setActive(true);
        } else {
            setActive(false)
        }
    }

    if (user || googleUser) {
        navigate(from, { replace: true });
    }

    const onSubmit = (data) => {
        console.log(data)

        createUserWithEmailAndPassword(data.email, data.password)

    };


    // console.log(errors);

    return (
        <div>
            <h2 className='text-primary fw-bold text-center my-5'>Please Register To Continue</h2>


            <div className='container'>

                <form onSubmit={handleSubmit(onSubmit)}>

                    <div className='my-4 w-50 mx-auto'>
                        <label className="form-label fw-bold">Full Name</label>
                        <input className='form-control' name='name' type="text" placeholder="name" {...register("name", {})} required />

                        {/* <input className='form-control' type="text" placeholder="Full name" {...register("name", { pattern: /^[a-z][a-z]+\s[a-z][a-z]+$/i })} /> */}
                        {/* {errors.name && "Enter a Valid Full Name"} */}

                    </div>

                    <div className='my-4 w-50 mx-auto'>
                        <label className="form-label fw-bold">Email address</label>
                        <input className='form-control' name='email' type="text" placeholder="email" {...register("email", { required: true, pattern: /^\S+@\S+$/i })} />
                        <p className='fw-bold text-danger'>
                            {errors.email && "*Enter a Valid Email"}
                        </p>
                    </div>


                    <div className='my-4 w-50 mx-auto'>
                        <label className="form-label fw-bold">Password</label>
                        <input className='form-control' name='password' type="password" placeholder="Password" {...register("password", { required: true, max: 0, min: 6, maxLength: 12, pattern: /.{6,}/i })} />
                        <p className='fw-bold text-danger'>
                            {errors.password && "*Minimum 6 Characters, At Least One Letter."}
                        </p>

                    </div>


                    <div className='form-check w-50 mx-auto'>

                        <input className=' form-check-input me-2' type="checkbox" id="flexCheckDefault" onClick={handleCheck} placeholder="Checkbox" {...register("Checkbox", {})} />
                        <label style={{ cursor: 'pointer', userSelect: 'none' }} className="fw-bold form-check-label" htmlFor="flexCheckDefault">Check me out</label>
                    </div>


                    <div className='text-center my-3'>
                        {loading && <Spinner></Spinner>}
                    </div>

                    {error && <h6 className='fw-bold text-danger text-center'>{error.message}</h6>}

                    <div className='w-50 mx-auto mt-4 mb-5'>
                        <button className={active ? 'form-control btn btn-primary fw-bold' : ' disabled form-control btn btn-primary fw-bold'} type="submit">Register</button>
                    </div>
                </form>


                <div className='text-center'>
                    <p className='fw-bold fs-5'>Already have an account, <Link to='/login'>Click on Login</Link></p>
                </div>


                <div className='d-flex justify-content-center my-5'>
                    <div style={{ height: '2px' }} className='w-25 bg-danger mt-2 me-1'></div>
                    <span className=''>or</span>
                    <div style={{ height: '2px' }} className='w-25 bg-danger mt-2 me-1'></div>
                </div>


                <div className='text-center my-2'>
                    {googleLoading && <Spinner></Spinner>}
                </div>
                {googleError && <h6 className='fw-bold text-danger text-center my-2'>{googleError?.message}</h6>}


                <div className='text-center mb-5'>
                    <button className='btn btn-danger fw-bold' onClick={handleGoogleSignIn}>Sign in with Google</button>
                </div>
            </div>

        </div>
    );
};

export default Register;