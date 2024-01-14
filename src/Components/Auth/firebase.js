// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDCSnmktC2dx8-NI7htUIm7JINd9yFtRfI",
    authDomain: "dojoapp-6e682.firebaseapp.com",
    projectId: "dojoapp-6e682",
    storageBucket: "dojoapp-6e682.appspot.com",
    messagingSenderId: "878668898989",
    appId: "1:878668898989:web:53a2478778069363dd9c24",
    measurementId: "G-C9EH7SZPSC",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const analytics = getAnalytics(app);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);


export { db };
export default app;
