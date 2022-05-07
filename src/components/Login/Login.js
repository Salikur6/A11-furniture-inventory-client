import React from 'react';
import { useForm } from 'react-hook-form';

const Login = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = data => {
        console.log(data)

    };
    console.log(errors);
    return (
        <div>
            <div>
                <h2 className='text-primary fw-bold text-center my-5'>Please Login To Continue</h2>

                <div className='container'>

                    <form onSubmit={handleSubmit(onSubmit)}>

                        <div className='my-4 w-50 mx-auto'>
                            <label className="form-label fw-bold">Email address</label>
                            <input className=' form-control' type="text" placeholder="Email" {...register("Email", { required: true, pattern: /^\S+@\S+$/i })} />
                            <p className='fw-bold text-danger'>
                                {errors.Email && "*Enter a Valid Email"}
                            </p>
                        </div>


                        <div className='my-4 w-50 mx-auto'>
                            <label className="form-label fw-bold">Password</label>
                            <input className='form-control' name='password' type="password" placeholder="Password" {...register("Password", { required: true, max: 0, min: 6, maxLength: 12, pattern: /.{6,}/i })} />

                            <p className='fw-bold text-danger'>
                                {errors.Password && "*Enter a Valid Password"}
                            </p>
                        </div>


                        <div className='w-50 mx-auto mt-4 mb-5'>
                            <button className='form-control btn btn-primary fw-bold' type="submit">Login</button>
                        </div>
                    </form>
                </div>

            </div>
        </div>
    );
};

export default Login;