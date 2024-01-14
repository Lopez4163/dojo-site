import React, { useState, useEffect } from 'react';
import { auth } from './firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';

const AuthDetails = () => {
    const [authUser, setAuthUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        console.log('AuthDetails useEffect: Subscribing to auth state changes');

        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                console.log('AuthDetails onAuthStateChanged: User is signed in');
                setAuthUser(user);
            } else {
                console.log('AuthDetails onAuthStateChanged: User is signed out');
                setAuthUser(null);
            }
            setLoading(false);
        });

        return () => {
            console.log('AuthDetails useEffect Cleanup: Unsubscribing from auth state changes');
            unsubscribe();
            console.log('Cleanup function executed.');
        };
    }, []);

    const userSignOut = () => {
        console.log('userSignOut: Logging out');
        setLoading(true);

        signOut(auth).then(() => {
            console.log('userSignOut: Sign-out successful.');
        }).catch((error) => {
            console.log('userSignOut: Error in signOut:', error);
        });
    }

    return (
        <div>
            {loading ? (
                <p>Loading...</p>
            ) : (
                <>
                    {authUser ? (
                        <div className='signed-out-in'>
                            <p>{`Signed In as: ${authUser.email}`}</p>
                            <button onClick={userSignOut}>Logout</button>
                        </div>
                    ) : (
                        <p>Signed Out</p>
                    )}
                </>
            )}
        </div>
    );
};

export default AuthDetails;
