// src/App.jsx
import React from 'react';
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import {AuthProvider} from "./Auth/AuthContext.jsx";
import PrivateRoute from "./Auth/PrivateRoute.jsx";
import NavbarComponent from './Components/NavbarComponent.jsx';
import HomePage from './Pages/HomePage.jsx';
import AboutUsPage from './Pages/AboutUsPage.jsx';
import AboutBJJPage from './Pages/AboutBJJPage.jsx';
import SchedulePage from './Pages/SchedulePage.jsx';
import AffiliateProgramPage from './Pages/AffiliateProgramPage.jsx';
import ContactUsPage from './Pages/ContactUsPage.jsx';
import LoginPage from './Pages/LoginPage.jsx';
import FooterComponent from './Components/FooterComponent.jsx';
import StudentDashboardPage from './GymApp/StudentDashboardPage.jsx';
import loginForm from "./Components/LoginForm.jsx";





function App() {
    return (
        <AuthProvider>
        <div className='app'>
            <Routes>
                <Route
                    path="/"
                    element={
                        <>
                            <NavbarComponent />
                            <HomePage />
                            <FooterComponent />
                        </>
                    }
                />
                <Route
                    path="/AboutUsPage"
                    element={
                        <>
                            <NavbarComponent />
                            <AboutUsPage />
                            <FooterComponent />
                        </>
                    }
                />
                <Route
                    path="/AboutBJJ"
                    element={
                        <>
                            <NavbarComponent />
                            <AboutBJJPage />
                            <FooterComponent />
                        </>
                    }
                />
                <Route
                    path="/SchedulePage"
                    element={
                        <>
                            <NavbarComponent />
                            <SchedulePage />
                            <FooterComponent />
                        </>
                    }
                />
                <Route
                    path="/AffiliateProgramPage"
                    element={
                        <>
                            <NavbarComponent />
                            <AffiliateProgramPage />
                            <FooterComponent />
                        </>
                    }
                />
                <Route
                    path="/ContactUsPage"
                    element={
                        <>
                            <NavbarComponent />
                            <ContactUsPage />
                            <FooterComponent />
                        </>
                    }
                />
                <Route
                    path="/LoginPage"
                    element={
                        <>
                            <NavbarComponent />
                            <LoginPage />
                            <FooterComponent />
                        </>
                    }
                />
                <Route
                    path="/gymportal"
                    element={<Navigate to="/StudentDashboardPage" />}
                />
                <Route
                    path="/StudentDashboardPage"
                    element={<PrivateRoute element={<StudentDashboardPage />} redirectTo="/LoginPage" />}
                />

            </Routes>
        </div>
        </AuthProvider>
    );
}

export default App;
