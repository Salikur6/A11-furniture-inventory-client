import React, { useState } from 'react';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../Firebase.init';
import Spinner from '../../Hooks/Spinner';

const Login = () => {

    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || "/";
    const [formData, setFormData] = useState('');
    console.log(formData);
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);

    const handleGoogleSignIn = () => {
        signInWithGoogle();
    }


    const [sendPasswordResetEmail, sending, resetPasswordError] = useSendPasswordResetEmail(auth);
    const handlePasswordReset = async () => {

        if (error?.message === 'MISSING_EMAIL' || formData === '') {

            return <div>{resetPasswordError && resetPasswordError.message}

                <h6>{error && error.message}</h6>

            </div>

        } else {
            await sendPasswordResetEmail(formData);
            toast('sent email')
        }

        console.log(formData);
    }
    // console.log(formData);




    const { register, handleSubmit, formState: { errors } } = useForm();
    if (user || googleUser) {
        navigate(from, { replace: true });
    }


    const onSubmit = data => {
        console.log(data)
        setFormData(data.email);
        signInWithEmailAndPassword(data.email, data.password);

    };
    // console.log(errors);
    return (
        <div>
            <div>
                <h2 className='text-primary fw-bold text-center my-5'>Please Login To Continue</h2>

                <div className='container'>

                    <form onSubmit={handleSubmit(onSubmit)}>

                        <div className='my-4 w-50 mx-auto'>
                            <label className="form-label fw-bold">Email address</label>

                            {/* onChange={event => setEmail(event.target.value)}  */}
                            <input className='form-control' onChange={(e) => console.log(e.target.value)} name='email' type="email" placeholder="email" {...register("email", {
                                required: true, pattern: /^\S+@\S+$/i
                            })} />


                            <p className='fw-bold text-danger'>
                                {errors?.email && "*Enter a Valid Email"}
                            </p>
                        </div>


                        <div className='my-4 w-50 mx-auto'>
                            <label className="form-label fw-bold">Password</label>

                            <input className='form-control' name='password' type="password" placeholder="password" {...register("password", { required: false, max: 0, min: 6, maxLength: 12, pattern: /.{6,}/i })} />



                            <p className='fw-bold text-danger'>
                                {errors?.password && "*Enter a Valid Password"}
                            </p>
                        </div>


                        {error && <h6 className='fw-bold text-danger text-center my-2'>{error?.message}</h6>}

                        <div className='text-center text-center my-3'>
                            {loading && <Spinner></Spinner>}
                        </div>

                        <div className='w-50 mx-auto mt-4 mb-5'>
                            <button className='form-control btn btn-primary fw-bold' type="submit">Login</button>
                        </div>
                    </form>

                    <div className='text-center my-2'>
                        {sending && <Spinner></Spinner>}
                    </div>

                    <div className='text-center fw-bold text-danger mb-3'>
                        <p className=''>{resetPasswordError?.message && resetPasswordError?.message} </p>

                    </div>


                    <div className='text-center'>
                        <p className='fw-bold'>If you don't have an account, <Link to='/register'>Click on Register</Link></p>


                        <p className='fw-bold' onClick={handlePasswordReset}>Forget Password? <Link to>Reset Password</Link></p>
                    </div>



                    <div className='d-flex justify-content-center my-5'>
                        <div style={{ height: '2px' }} className='w-25 bg-danger mt-2 me-1'></div>
                        <span className=''>or</span>
                        <div style={{ height: '2px' }} className='w-25 bg-danger mt-2 me-1'></div>
                    </div>

                    {/* googleLoading, googleError */}

                    <div className='text-center my-2'>
                        {googleLoading && <Spinner></Spinner>}
                    </div>
                    {googleError && <h6 className='fw-bold text-danger text-center my-2'>{googleError?.message}</h6>}


                    <div className='text-center mb-5'>
                        <button className='btn btn-danger fw-bold' onClick={handleGoogleSignIn}>Sign in with Google</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;