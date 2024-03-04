// AuthDetails.jsx
import React from 'react';
import { useAuth } from './AuthContext.jsx';

const AuthDetails = () => {
    const authUser = useAuth();
    console.log('AuthDetails authUser:', authUser);


    return <div>{authUser ? <p>Signed In</p> : <p>Signed Out</p>}</div>;
};

export default AuthDetails;
