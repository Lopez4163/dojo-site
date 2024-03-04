import React from 'react'
import { auth } from '../Auth/firebase.js'
import { signOut } from 'firebase/auth'
import { useAuth } from "../Auth/AuthContext.jsx";

const SignOutComponent = () => {
    const authUser = useAuth();
    // console.log(`SignOutComponent HIT: ${authUser}...`)
    if(authUser === null) {
        console.log(`SignOutComponent HITOnSignOut: ${authUser}...`)
    }
    else {
        console.log(`SignOutComponent HITonSignIn ${authUser}...`)
    }

    const userSignOut = () => {
        signOut(auth).then(() => {
            console.log(`sign out successful ${authUser}`)
        }).catch(error => console.log(error))

    }

    return (
        <div>
            <div className='signout-btn icon-wrapper'>
                <div className="material-symbols-outlined">
                    <span onClick={userSignOut} >logout</span>
                </div>
                <div>
                    <span className='icon-details'>
                        Sign Out
                    </span>
                </div>
                {/*<div className='logout-details'>*/}
                {/*    Sign Out {authUser ? authUser.email : ''}*/}
                {/*</div>*/}
            </div>
        </div>
    )
}
export default SignOutComponent
