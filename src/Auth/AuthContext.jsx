// import { createContext, useContext, useEffect, useState } from 'react';
// import { auth } from './firebase.js';
// import { onAuthStateChanged } from 'firebase/auth'
//
// const AuthContext = createContext();
//
// export const AuthProvider = ({ children }) => {
//     const [authUser, setAuthUser] = useState(null);
//     useEffect(() => {
//         const listen = onAuthStateChanged(auth, (user) => {
//             console.log('AuthProvider UE AuthChange User:', user);
//             if (user) {
//                 setAuthUser(user);
//             } else {
//                 setTimeout(() => {
//                     console.log('AuthProvider UE timeout HIT');
//                     setAuthUser(null);
//                 }, 1000);
//             }
//         });
//
//         return () => {
//             listen();
//         };
//     }, []);
//
//     // Use useEffect to handle actions based on updated state
//     useEffect(() => {
//         console.log('Inside useEffect AuthContext contents:', authUser);
//
//         // Perform actions or side effects based on the updated authUser state
//         // For example, you can navigate to another page here
//         if (authUser) {
//             // Example: navigate to another page
//             // navigate('/dashboard');
//         }
//
//     }, [authUser]); // Only run this effect when authUser changes
//
//
//     return <AuthContext.Provider value={authUser}>{children}</AuthContext.Provider>;
// };
//
// export const useAuth = () => {
//     const authUser = useContext(AuthContext);
//     console.log('useAuth authUser:', authUser); // Add this line for debugging
//     return authUser;
// };
// AuthContext.jsx
import { createContext, useContext, useEffect, useState } from 'react';
import { auth } from './firebase.js';
import { onAuthStateChanged } from 'firebase/auth';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [authUser, setAuthUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const listen = onAuthStateChanged(auth, (user) => {
            console.log('AuthProvider UE AuthChange User:', user);
            if (user) {
                setAuthUser(user);

            } else {
                setTimeout(() => {
                    console.log('AuthProvider UE timeout HIT');
                    setAuthUser(null);
                }, 1000);
            }
            setLoading(false); // Set loading to false when the authentication process is complete
        });

        return () => {
            listen();
        };
    }, []);

    return (
        <AuthContext.Provider value={{ authUser, loading }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const { authUser, loading } = useContext(AuthContext);
    console.log('useAuth authUser:', authUser);
    console.log('useAuth loading:', loading);
    return authUser;
};