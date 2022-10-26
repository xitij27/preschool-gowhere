
// import css styles
import styles from "../../styles/authenticationStyles/signup.module.css";

import React, { useRef,useState } from "react";

import { Form, Button, Alert, Card } from "react-bootstrap";

import { motion } from "framer-motion";

import axios from "axios"
// react routing import
import { Link, Navigate, useNavigate } from "react-router-dom";

import { successAlert, failedAlert } from "../../helpers/sweetalerthelper";

//import context
import {useAuth} from "../../context/AuthContext";

import CryptoJS from "crypto-js";




const SignupComponent = () => {

  //context state variables (for auth)
  const {setAuthenticated,currentUser, setCurrentUser} = useAuth();


  //use State variables
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();
  const otpRef = useRef();
  const [otpCorrect, setOtpCorrect] = useState();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  //navigation using react router
  const navigate = useNavigate();

  const clearInputFields = ()=>
  {
    emailRef.current.value = "";
    confirmPasswordRef.current.value = "";
    passwordRef.current.value = "";
  }

  const handleSubmit = async(e)=>
  {
    e.preventDefault();
    setError("");

    //proceed to do more form validation here
    if (passwordRef.current.value !== confirmPasswordRef.current.value )
    {
      failedAlert("Sign up unsuccessful!", "Passwords do not match. Please try again!") 
      return;
    }

    const hash = CryptoJS.SHA256(passwordRef.current.value).toString();
    console.log("hashed password is : ", hash);

    //post user data to backeend
    const emailInput = (emailRef.current.value).toLowerCase();
    axios.post("https://us-central1-lucky-sphinx-365408.cloudfunctions.net/app/api/signup",{"password": hash,"email": emailInput, "OTP": otpRef.current.value})
    .then((res)=>{
      console.log(res.data);
      
      if (res.data === "Account succesfully created!")
      {
        successAlert("Registration Success", "Succesfully registered an account! Redirecting you to home page!");
        //setAuthenticated(true);
        const user = currentUser;
        user.email = emailRef.current.value;
        console.log(user);
        setCurrentUser(user);
        localStorage.setItem(`Authenticated`, JSON.stringify("true"));  //setAuthenticated(true);
        localStorage.setItem("UserData", JSON.stringify({"email": emailRef.current.value})); // store user email into localstorage

        navigate("/app/home");
      }
      else
      {
        failedAlert("Registration Failed", res.data);
      }

    })


  }

  const sendOtp = () =>
  {
    
    if (emailRef.current.value ==="" || passwordRef.current.value ==="" || confirmPasswordRef.current.value === "")
    {
      failedAlert("Input fields not filled up!", "Please check that you have filled up both the email and password fields!");
      return;
    }
    //check for user signup inputs
    if (passwordRef.current.value !== confirmPasswordRef.current.value )
    {
      
      failedAlert("Passwords do not match!", "Please try again before generating OTP!");
      passwordRef.current.value = "";
      confirmPasswordRef.current.value = "";
      return;
    }


    console.log(emailRef.current.value);
    axios.post("https://us-central1-lucky-sphinx-365408.cloudfunctions.net/app/api/sendOTP",{"email": emailRef.current.value})
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
          initial={{ x: 250, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            ease: "easeOut",
            duration: 0.8,
          }}
      >

      <Card className={styles["signup-card"]}>
            <Card.Body>
              <p className="mb-1" style={{fontSize:  "40px", fontWeight: "650", textAlign: "center"}}>Register Account</p>
              <p style={{ color: "#495057", fontSize: "17px",textAlign: "center", fontWeight: '500' }}>
                Please enter your details
              </p>
              {error && <Alert variant="danger">{error}</Alert>}
              <Form onSubmit={handleSubmit}>
                <Form.Group id="email" className={styles.fields}>
                  <Form.Label><p className={styles.title}>Email</p></Form.Label>
                  <Form.Control type="email" required ref={emailRef} />
                </Form.Group>
                <Form.Group id="passwordsignup" className={styles.fields}>
                  <Form.Label><p className={styles.title} >Password</p></Form.Label>
                  <Form.Control type="password" required ref={passwordRef} />
                </Form.Group>
                <Form.Group id="confirmpassword" className={styles.fields}>
                  <Form.Label><p className={styles.title} >Confirm Password</p></Form.Label>
                  <Form.Control type="password" required ref={confirmPasswordRef} />
                </Form.Group>
                <Form.Group id={styles.otp} className={styles.fields}>
                  <Form.Label><p className={styles.title} >Enter OTP</p></Form.Label>
                  <Form.Control required ref={otpRef}/>
                  <div onClick={sendOtp} className="btn" id={styles.otpBtn} >Send OTP</div>
                </Form.Group>

                <button
                  disabled={loading}
                  type="submit"
                  className={"w-100 mt-1" + " " + styles["login-btn"]}
                  whileHover={{
                    backgroundColor: "#f95738",
                    boxShadow: "0px 0px 8px #ff9f1c", 
                  }}
                >
                  Sign up
                </button>
              </Form>
              
              <div className="w-100 text-center mt-2">
                Already have an account? <span style={{fontWeight: "600"}}><Link to="/login">Log in</Link></span>
              </div>
            </Card.Body>
        </Card>
      </motion.div>
      
       
    </div>
  )
}

//custom styling objects
const link = 
{
    fontSize: "16px",
    fontWeight: "620",
    marginLeft: "0px",
    float: "right",
}

export default SignupComponent
