import React, { useState } from 'react';
import { signInWithEmailAndPassword } from "firebase/auth"
import { auth } from './Auth/firebase.js';
import '../Styling/StudentLoginForm.css';
import stuLoginImgBg from '../assets/student-login-form.jpeg';
import CreatAccountForm from './CreatAccountForm.jsx';
import AuthDetails from "./Auth/AuthDetails.jsx";

const LoginForm = ({ title }) => {
    const [formData, setFormData] = useState(false);
    const [isChecked, setChecked] = useState(false);
    const [name, setName] = useState('')
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({})
    const [showOverlay, setShowOverlay] = useState(false);


    const handleSignUp = () => {
        setShowOverlay(true);
    };

const signIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            console.log(user)
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage)
        });
}

    // const signIn = (e) => {
    //     e.preventDefault();
    //     signInWithEmailAndPassword(auth, email, password)
    //         .then((userCredential) => {
    //             // Signed in
    //             const user = userCredential.user;
    //             console.log(user);
    //         })
    //         .catch((error) => {
    //             const errorCode = error.code;
    //             let errorMessage = '';
    //
    //             switch (errorCode) {
    //                 case 'auth/invalid-email':
    //                     errorMessage = 'Invalid email address.';
    //                     break;
    //                 case 'auth/user-disabled':
    //                     errorMessage = 'User account is disabled.';
    //                     break;
    //                 case 'auth/user-not-found':
    //                     errorMessage = 'User not found. Please sign up first.';
    //                     break;
    //                 case 'auth/wrong-password':
    //                     errorMessage = 'Invalid password.';
    //                     break;
    //                 default:
    //                     errorMessage = 'An error occurred during login. Please try again later.';
    //             }
    //
    //             console.error(errorCode, errorMessage);
    //             // Set the errors state to display the error to the user
    //             setErrors({ login: errorMessage });
    //         });
    // };
    return (
        <div
            className='form-container'
            style={{ backgroundColor: '#040D12'}}
        >
            <div className='form-wrapper'>
                <div className='form-title'>
                    <h1>{title}</h1>
                </div>
                <form onSubmit={signIn} className='form'>
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
                    <div className='auth-details'>
                        <AuthDetails/>
                        {errors.login && <span className="error">{errors.login}</span>}
                    </div>
                </form>

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
