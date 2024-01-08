import { useState } from 'react'
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import AboutUs from "./pages/AboutUs.jsx";
import AboutBjj from "./pages/AboutBJJ.jsx";
import Schedule from "./pages/Schedule.jsx";
import AffiliateProgram from "./pages/AffiliateProgram.jsx";
import ContactUsPge from "./pages/ContactUsPge.jsx";
import Navigation from "./Componenets/Navigation.jsx";
import Student from "./pages/Student.jsx";
import Instructor from "./pages/Instructor.jsx";
import Footer from "./Componenets/Footer.jsx";


function App() {
  return (
      <div>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/AboutUs" element={<AboutUs />}/>
          <Route path="/AboutBJJ" element={<AboutBjj />}/>
          <Route path="/Schedule" element={<Schedule />}/>
          <Route path="/AffiliateProgram" element={<AffiliateProgram />}/>
          <Route path="/ContactUsPge" element={<ContactUsPge />}/>
          <Route path="/Student" element={<Student />}></Route>
          <Route path="/Instructor" element={<Instructor/>}></Route>
        </Routes >
          <Footer/>
      </div>

)
}

export default App
