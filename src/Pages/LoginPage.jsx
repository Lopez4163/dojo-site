// src/pages/LoginPage.jsx
import React from 'react';
import LoginForm from '../Components/LoginForm.jsx';

const LoginPage = () => {


    return (
        <div className="student-login-container">
            <div className="student-login-content">
                <section>
                    <div className="student-login-form">
                        <LoginForm/>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default LoginPage;
