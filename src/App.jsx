// src/App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar.jsx';
import HomePage from './pages/HomePage.jsx';
import AboutUs from './pages/AboutUs';
import AboutBjj from './pages/AboutBJJ';
import Schedule from './pages/Schedule';
import AffiliateProgram from './pages/AffiliateProgram';
import ContactUsPage from './pages/ContactUsPage.jsx';
import Login from './pages/Login.jsx';
import Footer from './Components/Footer';
import RouteGuard from './Components/Auth/RouteGuard.jsx';
import StudentDashboard from './GymApp/StudentDashboard.jsx';
import InstructorDashboard from './GymApp/InstructorDashboard.jsx';



function App() {
    return (
        <div className='app'>
            <Routes>
                <Route
                    path="/"
                    element={
                        <>
                            <Navbar />
                            <HomePage />
                            <Footer />
                        </>
                    }
                />
                <Route
                    path="/AboutUs"
                    element={
                        <>
                            <Navbar />
                            <AboutUs />
                            <Footer />
                        </>
                    }
                />
                <Route
                    path="/AboutBJJ"
                    element={
                        <>
                            <Navbar />
                            <AboutBjj />
                            <Footer />
                        </>
                    }
                />
                <Route
                    path="/Schedule"
                    element={
                        <>
                            <Navbar />
                            <Schedule />
                            <Footer />
                        </>
                    }
                />
                <Route
                    path="/AffiliateProgram"
                    element={
                        <>
                            <Navbar />
                            <AffiliateProgram />
                            <Footer />
                        </>
                    }
                />
                <Route
                    path="/ContactUsPage"
                    element={
                        <>
                            <Navbar />
                            <ContactUsPage />
                            <Footer />
                        </>
                    }
                />
                <Route
                    path="/Login"
                    element={
                        <>
                            <Navbar />
                            <Login />
                            <Footer />
                        </>
                    }
                />
                <Route
                    path="/student-dashboard"
                    element={
                        <RouteGuard>
                            {/* Render Student Dashboard component */}
                            <StudentDashboard />
                        </RouteGuard>
                    }
                />
                <Route
                    path="/instructor-dashboard"
                    element={
                        <RouteGuard>
                            {/* Render Instructor Dashboard component */}
                            <InstructorDashboard />
                        </RouteGuard>
                    }
                />
            </Routes>
        </div>
    );
}

export default App;
