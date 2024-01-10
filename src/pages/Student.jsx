import React from 'react'
import StudentLoginForm from "../Componenets/StudentLoginForm.jsx";

const Student = () => {
    return (
        <div className='student-login-container'>
            <div className='student-login-content'>
                <section>
                    <div className='student-login-form'>
                        <StudentLoginForm/>
                    </div>
                </section>
            </div>
        </div>
    )
}
export default Student
