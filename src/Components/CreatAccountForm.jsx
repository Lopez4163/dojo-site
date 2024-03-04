import React, { useState } from 'react';
import '../Styling/CreateAccountForm.css';
import 'firebase/firestore'
import { auth } from '../Auth/firebase.js';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { collection, addDoc, doc, setDoc } from 'firebase/firestore';
import { db } from '../Auth/firebase.js'; // Import your Firebase configuration


const CreatAccountForm = ({ onClose }) => {
    console.log('onClose prop:', onClose);

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({});
    const [selectedRole, setSelectedRole] = useState('');

    // const signUp = (e) => {
    //     e.preventDefault();
    //     createUserWithEmailAndPassword( auth, email, password)
    //         .then((userCredential) => {
    //             console.log('userCredential:', userCredential);``
    //         }).catch((error) => {
    //         const errorCode = error.code;
    //         const errorMessage = error.message;
    //         console.log('errorCode:', errorCode);
    //         console.log('errorMessage:', errorMessage);
    //     });
    // }
    const signUp = async (e, name, email, password) => {
        e.preventDefault();

        try {
            // Create user
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;

            // Update Firestore with additional information
            const userDocRef = doc(db, 'users', user.uid);
            await setDoc(userDocRef, {
                name: name,
                email: email,
                role: 'student', // Assign the role 'student'
                birthday: '',
                gender: '',
                phoneNumber: '',
                address: '',
                beltGrade: 'White', // Set a default belt grade, for example
                profileImage: '', // Set a default or empty string for the profile image URL
            });

            console.log('User created and Firestore updated successfully:', userCredential);
        } catch (error) {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.error('Error creating user:', errorCode, errorMessage);
        }
    };
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
                    {/*<select className='role-select' onChange={*/}
                    {/*    (e) => setSelectedRole(e.target.value)}>*/}
                    {/*    <option value="" disabled defaultValue>Select a role</option>*/}
                    {/*    <option value="student">Student</option>*/}
                    {/*    <option value="instructor">Instructor</option>*/}
                    {/*</select>*/}
                    {/*<button type="submit" value="Create Account" className="create-button">*/}
                    {/*    Create Account*/}
                    {/*</button>*/}
                    <button type="submit" onClick={(e) => signUp(e, name, email, password)}>Sign Up</button>

                </form>
            </div>
        </div>
    );
};

export default CreatAccountForm;