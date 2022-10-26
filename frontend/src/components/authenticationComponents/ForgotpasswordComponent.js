
// import css styles
import styles from "../../styles/authenticationStyles/forgotpassword.module.css";
import React, { useRef,useState } from "react";
import axios from "axios";
import { Form, Button, Alert, Card } from "react-bootstrap";
import CryptoJS from "crypto-js";
import { motion } from "framer-motion";

// react routing import
import { Link, Navigate,useNavigate } from "react-router-dom";

import { successAlert, failedAlert } from "../../helpers/sweetalerthelper";

//import context
import {useAuth} from "../../context/AuthContext";
import { SERVER_URL } from './../../utilities/deployment';
//custom styling objects
const link = 
{
    fontSize: "16px",
    fontWeight: "620",
    marginLeft: "0px",
    float: "right",
}

const ForgotpasswordComponent = () => {

  //context state variables (for auth)
  const {setAuthenticated,currentUser, setCurrentUser} = useAuth();
  
  const emailRef = useRef();
  const newPasswordRef = useRef();
  const newConfirmPasswordRef = useRef();
  const otpRef = useRef();
  const [otpCorrect, setOtpCorrect] = useState();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  //navigation using react router
  const navigate = useNavigate();
  const clearInputFields = ()=>
  {
    emailRef.current.value = "";
    newConfirmPasswordRef.current.value = "";
    newPasswordRef.current.value = "";
  }

  const handleSubmit = async(e)=>
  {
    e.preventDefault();
    setError("");

    //proceed to do more form validation here
    if (newPasswordRef.current.value !== newConfirmPasswordRef.current.value )
    {

      failedAlert("Reset unsuccessful!", "Passwords do not match. Please try again!");
      //console.log(newPasswordRef.current.value,newConfirmPasswordRef.current.value)
      return;
    }

    console.log("Email -> ",emailRef.current.value);
    console.log("Pwd -> ",newPasswordRef.current.value);
    console.log("CfmPwd -> ",newConfirmPasswordRef.current.value);

    //post user data to backend
    const emailInput = (emailRef.current.value).toLowerCase();
    const hash = CryptoJS.SHA256(newPasswordRef.current.value).toString();
    console.log("hashed password is : ", hash);
    
    axios.post(`${SERVER_URL}/api/updatepassword`,{"password": hash, "email": emailRef.current.value, "OTP": otpRef.current.value})
    .then((res)=>{
      //console.log(res.data);
      
      if (res.data === "Successfully updated!")
      {
        successAlert("Password reset successful", "Redirecting you to home page!");
        //setAuthenticated(true);
        const user = currentUser;
        user.password = newPasswordRef.current.value;
        console.log(user);
        setCurrentUser(user);
        localStorage.setItem(`Authenticated`, JSON.stringify("true"));  //setAuthenticated(true);
        localStorage.setItem("UserData", JSON.stringify({"email": emailRef.current.value})); // store user password into localstorage

        navigate("/app/home");
      }
      else
      {
        failedAlert("ERROR: Password reset failed", res.data);
      }
    })
  }

    const sendOtp = () =>
    {
      
      if (emailRef.current.value ==="" || newPasswordRef.current.value ==="" || newConfirmPasswordRef.current.value === "")
      {
        failedAlert("Input fields not filled up!", "Please check that you have filled up both the email and password fields!");
        return;
      }
      //check for user signup inputs
      if (newPasswordRef.current.value !== newConfirmPasswordRef.current.value )
      {
        
        failedAlert("Passwords do not match!", "Please try again before generating OTP!");
        newPasswordRef.current.value = "";
        newConfirmPasswordRef.current.value = "";
        return;
      }
  
  
      console.log(emailRef.current.value);
      axios.post(`${SERVER_URL}/api/sendOTP`,{"email": emailRef.current.value})
      .then((res)=>{console.log(res.data);    
      //clearInputFields();
      successAlert("OTP successfully sent!", "Please enter the one time password that is sent to your email!");
      })
      .catch((err)=>{console.log(err);
      failedAlert("Something went wrong", "Please try again!")});
  
    }
    
  




  return (
    <div className={styles.signup}>
      <motion.div
          initial={{ x: -250, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            ease: "easeOut",
            duration: 0.8,
          }}
      >

      <Card className={styles["signup-card"]}>
            <Card.Body>
              <p className="mb-1" style={{fontSize:  "46px", fontWeight: "650", textAlign: "center"}}>Reset Password</p>
              <p style={{ color: "#495057", fontSize: "17px",textAlign: "center", fontWeight: '500' }}>
                Please enter the details
              </p>
              {error && <Alert variant="danger">{error}</Alert>}
              <Form onSubmit={handleSubmit}>
                <Form.Group id="email" className={styles.fields}>
                    <Form.Control type="email" required ref={emailRef} placeholder="Enter email"/>
                </Form.Group>
                <Form.Group id="password" className={styles.fields}>
                    <Form.Control type="password" required ref={newPasswordRef} placeholder="Enter new password"/>
                </Form.Group>
                <Form.Group id="confirmpassword" className={styles.fields}>
                    <Form.Control type="password" required ref={newConfirmPasswordRef} placeholder="Confirm password"/>
                </Form.Group>
                <button type="button" className={"w-100 mt-1" + " " + styles["login-btn"]} onClick={sendOtp}>
                    Send OTP
                </button>
                <Form.Group id="otp" className={styles.fields}>
                    <Form.Control type="number" required ref={otpRef} placeholder="Enter OTP"/>
                </Form.Group>
                
                <button
                  disabled={loading}
                  type="submit"
                  className={"w-100 mt-1" + " " + styles["login-btn"]}
                  whileHover={{
                    backgroundColor: "#f95738",
                    boxShadow: "0px 0px 8px #ff9f1c", 
                  }}>
                  Submit
                </button>
              </Form>
              
              <div className="w-100 text-center mt-2">
                {/*Already have an account?*/} <span style={{fontWeight: "600"}}><Link to="/login">Go back to log in</Link></span>
              </div>
            </Card.Body>
          </Card>
          </motion.div>
       
    </div>
  )
}

export default ForgotpasswordComponent