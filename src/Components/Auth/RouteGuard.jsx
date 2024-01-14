// src/components/RouteGuard.jsx
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import { db } from './firebase.js';
import { auth } from './firebase.js';
const RouteGuard = ({ children }) => {
    const navigate = useNavigate();
    const [userRole, setUserRole] = useState(null);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (user) => {
            if (user) {
                const userDoc = await getDoc(doc(db, 'users', user.uid));
                if (userDoc.exists()) {
                    const role = userDoc.data().role;
                    setUserRole(role);

                    switch (role) {
                        case 'student':
                            navigate('/student-dashboard');
                            break;
                        case 'instructor':
                            navigate('/instructor-dashboard');
                            break;
                        default:
                            // Redirect to a default route if the user's role is not recognized
                            navigate('/'); // Change this to your default route
                    }
                }
            } else {
                // Redirect to login if the user is not authenticated
                navigate('/login');
            }
        });

        return () => unsubscribe();
    }, [navigate]);

    return userRole ? children : null;
};

export default RouteGuard;
