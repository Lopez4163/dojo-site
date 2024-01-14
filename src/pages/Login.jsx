// src/pages/Login.jsx
import React from 'react';
import { Navigate } from 'react-router-dom';
import LoginPortal from '../Components/LoginPortal.jsx';

const Login = () => {


    return (
        <div className="student-login-container">
            <div className="student-login-content">
                <section>
                    <div className="student-login-form">
                        <LoginPortal/>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Login;
