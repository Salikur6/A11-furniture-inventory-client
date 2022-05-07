import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const Register = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [active, setActive] = useState(false);


    const handleCheck = e => {
        const checkBox = e.target.checked;
        console.log(checkBox)
        if (checkBox === true) {
            setActive(true);
        } else {
            setActive(false)
        }
    }


    const onSubmit = (data) => {
        console.log(data)

    };
    console.log(errors);

    return (
        <div>
            <h2 className='text-primary fw-bold text-center my-5'>Please Register To Continue</h2>


            <div className='container'>

                <form onSubmit={handleSubmit(onSubmit)}>

                    <div className='my-4 w-50 mx-auto'>
                        <label className="form-label fw-bold">Full Name</label>
                        <input className='form-control' name='fullName' type="text" placeholder="fullName" {...register("fullName", {})} required />

                        {/* <input className='form-control' type="text" placeholder="Full name" {...register("fullName", { pattern: /^[a-z][a-z]+\s[a-z][a-z]+$/i })} /> */}
                        {/* {errors.fullName && "Enter a Valid Full Name"} */}

                    </div>

                    <div className='my-4 w-50 mx-auto'>
                        <label className="form-label fw-bold">Email address</label>
                        <input className=' form-control' name='email' type="text" placeholder="Email" {...register("Email", { required: true, pattern: /^\S+@\S+$/i })} />
                        <p className='fw-bold text-danger'>
                            {errors.Email && "*Enter a Valid Email"}
                        </p>
                    </div>


                    <div className='my-4 w-50 mx-auto'>
                        <label className="form-label fw-bold">Password</label>
                        <input className='form-control' name='password' type="password" placeholder="Password" {...register("Password", { required: true, max: 0, min: 6, maxLength: 12, pattern: /.{6,}/i })} />
                        <p className='fw-bold text-danger'>
                            {errors.Password && "*Minimum 6 Characters, At Least One Letter."}
                        </p>

                    </div>


                    <div className='form-check w-50 mx-auto'>

                        <input className=' form-check-input me-2' type="checkbox" id="flexCheckDefault" onClick={handleCheck} placeholder="Checkbox" {...register("Checkbox", {})} />
                        <label style={{ cursor: 'pointer', userSelect: 'none' }} className="fw-bold form-check-label" htmlFor="flexCheckDefault">Check me out</label>
                    </div>



                    <div className='w-50 mx-auto mt-4 mb-5'>
                        <button className={active ? 'form-control btn btn-primary fw-bold' : ' disabled form-control btn btn-primary fw-bold'} type="submit">Register</button>
                    </div>
                </form>
            </div>

        </div>
    );
};

export default Register;