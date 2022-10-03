// User will be prompted to sign up for an account before beign able to use our application
// Login Page : User will be prompted to login as an authenticated user before trying to access the application's features
import React from 'react'
import SignupComponent from '../components/authenticationComponents/SignupComponent'

const signupPage = 
{
   display: "flex",
   flexDirection: "row",
   height: "100vh",
}



const Signup = () => {

  return (
    <div style={signupPage}>
        <div className = "authentication-card">
            <div style={{position: "absolute", top: "20px", "zIndex": 10}} className ="logofont">PreSchool <br></br> GoWhere</div>
            <SignupComponent />
        </div>
        <div className='side-image'>
            <div className='side-image-background'></div>
        </div>
    </div>
  )
}

export default Signup