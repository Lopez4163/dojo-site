import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Styling/StudentLoginForm.css';
import CreatAccountForm from './CreatAccountForm.jsx';
import { auth } from '../Auth/firebase.js';
import { signInWithEmailAndPassword } from 'firebase/auth';
import AuthDetails from "../Auth/AuthDetails.jsx";
import SignOutComponent from "./SignOutComponent.jsx";
import {AuthProvider} from "../Auth/AuthContext.jsx";



const LoginForm = ({ title }) => {
    const [formData, setFormData] = useState(false);
    const [isChecked, setChecked] = useState(false);
    const [name, setName] = useState('')
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({})
    const [showOverlay, setShowOverlay] = useState(false);
    const navigate = useNavigate(); // Add useNavigate



    const handleSignUp = () => {
        setShowOverlay(true);
    };

    const signIn = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword( auth, email, password)
            .then((userCredential) => {
                    console.log('SignIn Component HIT:', userCredential);
                    navigate('/gymportal')
                    console.log('Successfully navigated to /StudentDashBoard');


            }).catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log('errorCode:', errorCode);
            console.log('errorMessage:', errorMessage);
        });
    }
        return (
        <div
            className='form-container'
            style={{ backgroundColor: '#040D12'}}
        >
            <div className='form-wrapper'>
                <div className='form-title'>
                    <h1>Login</h1>
                </div>
                <form  className='form' onSubmit={signIn}>
                    <div className='input-wrapper'>
                        <input
                            className='transparent-input'
                            type="text"
                            placeholder="Email"
                            id="password1"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        {errors.email && <span className="error">{errors.email}</span>}

                        <input
                            className='transparent-input'
                            type="password"
                            placeholder="Password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        {errors.password && <span className="error">{errors.password}</span>}


                        <div className='remember-me-section'>
                            <div className='checkbox-div'>
                                <input
                                    type='checkbox'
                                    id='rememberMe'
                                    checked={isChecked}
                                    onChange={() => setChecked(!isChecked)}
                                />
                                <label htmlFor='rememberMe'>Remember Me</label>
                            </div>
                            <button type='button' className='forgot-password-button'>
                                Forgot Password
                            </button>
                        </div>
                    </div>
                    <button type="submit" className="create-signin-button">Sign In</button>

                    <div className='sign-up-link'>
                        <p>
                            Don't have an account?{' '}
                            <button
                                type='button'
                                className='sign-up-button'
                                onClick={handleSignUp}
                            >
                                Sign Up
                            </button>
                        </p>
                    </div>
                </form>
                <br></br>
                {/*<AuthProvider>*/}
                {/*    <AuthDetails/>*/}
                {/*    <SignOutComponent/>*/}
                {/*</AuthProvider>*/}
            </div>
            {showOverlay && (
                <div className='overlay'>
                    <CreatAccountForm onClose={() => setShowOverlay(false)} />
                </div>
            )}
        </div>
    );
};

export default LoginForm;
