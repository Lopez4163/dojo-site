import React, { useState } from 'react';
import { signInWithEmailAndPassword } from "firebase/auth"
import { auth } from './Auth/firebase.js';
import '../Styling/StudentLoginForm.css';
import stuLoginImgBg from '../assets/student-login-form.jpeg';
import CreatAccountForm from './CreatAccountForm.jsx';
import AuthDetails from "./Auth/AuthDetails.jsx";
import LoginForm from "./LoginForm.jsx";

const LoginPortal = () => {




    return (
        <div className='login-form-container'>
            <LoginForm title='Login' />
        </div>
    );
};

export default LoginPortal;






// const handleSignUp = () => {
//     console.log('OnClose called')
//     setShowOverlay(true);
// };
//
//
//
// const signIn = (e) => {
//     e.preventDefault();
//     signInWithEmailAndPassword(auth, email, password)
//         .then((userCredential) => {
//             // Signed in
//             const user = userCredential.user;
//             console.log(user)
//         })
//         .catch((error) => {
//             const errorCode = error.code;
//             const errorMessage = error.message;
//             console.log(errorCode, errorMessage)
//         });
// };
