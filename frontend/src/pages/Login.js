// Login Page : User will be prompted to login as an authenticated user before trying to access the application's features
import React from 'react'
import LoginComponent from "../components/authenticationComponents/LoginComponent"

//dummy data
import {users} from "../utilities/userData"

const loginPage = 
{
   display: "flex",
   flexDirection: "row",
   height: "100vh",
}



const Login = () => {


  return (
    <>

      <div style={loginPage}>

          <div className = "authentication-card">
              <div style={{position: "absolute", top: "25px","zIndex": 10}} className ="logofont">PreSchool <br></br> GoWhere</div>
              {/* <div className = "logofont">PreSchool </div>
              <div className = "logofont">GoWhere </div> */}
              <LoginComponent />
          </div>
          <div className='side-image'>
              <div className='side-image-background'></div>
          </div>
      </div>
    </>
  )
}

export default Login