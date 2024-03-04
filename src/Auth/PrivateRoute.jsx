import React from 'react';
import {Route, Navigate, BrowserRouter, Routes} from 'react-router-dom';
import { useAuth } from './AuthContext.jsx'; // Adjust the path based on your project structure

const PrivateRoute = ({ element, redirectTo }) => {
    const authUser = useAuth();
    console.log('PrivateRoute authUser:', authUser);

    return authUser ? (
        element
    ) : (
        <>
        <Navigate to={redirectTo} replace />
        {console.log(`Redirecting to: ${redirectTo}`)}
        </>
    );
};

export default PrivateRoute;
