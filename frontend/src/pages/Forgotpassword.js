import React from "react";
import ForgotpasswordComponent from "../components/authenticationComponents/ForgotpasswordComponent"
// need to make 

const ForgotpasswordPage = 
{
   display: "flex",
   flexDirection: "row",
   height: "100vh",
}

const Forgotpassword = () => {
    return(
        <div style={ForgotpasswordPage}>
        <div className = "authentication-card">
            <div style={{position: "absolute", top: "25px","zIndex": 10}} className ="logofont">PreSchool <br></br> GoWhere</div>
            {/* <div className = "logofont">PreSchool </div>
            <div className = "logofont">GoWhere </div> */}
            <ForgotpasswordComponent />
        </div>
        <div className='side-image'>
            <div className='side-image-background'></div>
        </div>
        </div>
    )
}

export default Forgotpassword