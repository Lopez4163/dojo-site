import React, { useState } from 'react';
import '../Styling/CreateAccountForm.css';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, db } from './Auth/firebase.js';
import 'firebase/firestore';
import { doc, setDoc } from 'firebase/firestore';


const CreatAccountForm = ({ onClose }) => {
    console.log('onClose prop:', onClose);

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({});
    const [selectedRole, setSelectedRole] = useState('');


    const validateForm = () => {
        let newErrors = {};

        if (!name.trim()) {
            newErrors.name = 'Name is required';
        }

        if (!email.trim()) {
            newErrors.email = 'Email is required';
        }

        if (!password.trim()) {
            newErrors.password = 'Password is required';
        }

        setErrors(newErrors);

        return Object.keys(newErrors).length === 0;
    };

    const signUp = (e) => {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                console.log(userCredential)
                // const user = userCredential.user;
                // const userRef = doc(db, 'users', user.uid);
                // setDoc(userRef, {
                //     name: name,
                //     email: email,
                //     role: selectedRole,
                // });
            })
            .catch((error) => {
                console.log(error)
            })


        //     createUserWithEmailAndPassword(auth, email, password)
        //         .then((userCredential) => {
        //             const user = userCredential.user;
        //             const userRef = doc(db, 'users', user.uid);
        //             setDoc(userRef, {
        //                 name: name,
        //                 email: email,
        //                 role: selectedRole,
        //             });
        //             console.log(user);
        //             // console.log(selectedRole);
        //         })
        //         .catch((error) => {
        //             const errorCode = error.code;
        //             let errorMessage = '';
        //
        //             switch (errorCode) {
        //                 case 'auth/email-already-in-use':
        //                     errorMessage = 'The email address is already in use by another account.';
        //                     break;
        //                 case 'auth/invalid-email':
        //                     errorMessage = 'The email address is not valid.';
        //                     break;
        //                 case 'auth/operation-not-allowed':
        //                     errorMessage = 'The given sign-in provider is disabled for this Firebase project.';
        //                     break;
        //                 case 'auth/weak-password':
        //                     errorMessage = 'The password must be at least 6 characters long.';
        //                     break;
        //                 case 'auth/network-request-failed':
        //                     errorMessage = 'A network error has occurred. Please check your internet connection and try again.';
        //                     break;
        //                 case 'auth/too-many-requests':
        //                     errorMessage = 'Too many unsuccessful login attempts. Please try again later.';
        //                     break;
        //                 case 'auth/user-disabled':
        //                     errorMessage = 'The user account has been disabled by an administrator.';
        //                     break;
        //                 case 'auth/user-not-found':
        //                     errorMessage = 'There is no user record corresponding to this email. The user may have been deleted.';
        //                     break;
        //                 case 'auth/wrong-password':
        //                     errorMessage = 'The password is invalid for the given email.';
        //                     break;
        //                 default:
        //                     errorMessage = 'An error occurred during account creation. Please try again later.';
        //             }
        //
        //             console.error(errorCode, errorMessage);
        //         });
        // };
    }
    return (
        <div className="create-account-overlay">
            <div className="overlay-content">
        <span className="overlay-close-button">
          <button className="exit-button" onClick={onClose}>
            X
          </button>
        </span>
                <div className='create-account-title'>
                    <h1>Create Account</h1>
                </div>
                <form className="form" onSubmit={signUp}>
                    <input
                        className='transparent-input'
                        type="text"
                        placeholder="Name"
                        id="username"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    {errors.name && <span className="error">{errors.name}</span>}
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
                    <select className='role-select' onChange={
                        (e) => setSelectedRole(e.target.value)}>
                        <option value="" disabled defaultValue>Select a role</option>
                        <option value="student">Student</option>
                        <option value="instructor">Instructor</option>
                    </select>
                    <button type="submit" value="Create Account" className="create-button">
                        Create Account
                    </button>
                </form>
            </div>
        </div>
    );
};

export default CreatAccountForm;