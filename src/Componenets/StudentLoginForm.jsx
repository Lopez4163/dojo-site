import React, { useState } from 'react'
import {  useForm } from 'react-hook-form';
import '../Styling/StudentLoginForm.css'
import stuLoginImgBg from '../assets/student-login-form.jpeg'
const StudentLoginForm = () => {
    const [formData, setFormData] = useState(false);
    const [isChecked, setChecked] = useState(false);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        setFormData(data)
        alert('Submitted')
    };

    return (
        <div className='form-container' style={{ backgroundImage: `url(${stuLoginImgBg})` }}
        >
            <div className='form-wrapper'>
                <div className='form-title'>
                    <h1>Student Login</h1>
                </div>
                <form onSubmit={handleSubmit(onSubmit)} className='form'>
                    <div className='input-wrapper'>
                        <input {...register('username', { required: true })} placeholder={'Email'} id='#username' />
                        {errors.username && <span className='error'>This field is required</span>}
                        <input {...register('password', { required: true })} placeholder={'Password'} id='password' />
                        {errors.password && <span className='error'>This field is required</span>}
                        <div className='remember-me-section'>
                            <div className='checkbox-div'>
                                <input
                                    type='checkbox'
                                    id='rememberMe'
                                    {...register('rememberMe')}
                                />
                                <label htmlFor='rememberMe'>Remember Me</label>
                            </div>
                            <button type='button' className='forgot-password-button'>
                                Forgot Password
                            </button>
                        </div>
                    </div>
                    <input type="submit" />
                    <div className='sign-up-link'>
                        <p>Don't have an account? <a href='/'>Sign Up</a></p>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default StudentLoginForm
