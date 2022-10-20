
// import css styles
import styles from "../../styles/authenticationStyles/signup.module.css";

import React, { useRef,useState } from "react";

import { Form, Button, Alert, Card } from "react-bootstrap";

import { motion } from "framer-motion";

import axios from "axios"
// react routing import
import { Link, useNavigate } from "react-router-dom";

import { successAlert, failedAlert } from "../../helpers/sweetalerthelper";

//custom styling objects
const link = 
{
    fontSize: "16px",
    fontWeight: "620",
    marginLeft: "0px",
    float: "right",
}

const SignupComponent = () => {

  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();
  const [otp,setOtp] = useState();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);


  const handleSubmit = async(e)=>
  {
    e.preventDefault();
    setError("");

    //proceed to do more form validation here
    if (passwordRef.current.value !== confirmPasswordRef.current.value )
    {

      failedAlert("Sign up unsuccessful!", "Passwords do not match. Please try again!") 
      //console.log(passwordRef.current.value,confirmPasswordRef.current.value)
      return;
    }

    //post user data to backeend


    // if successfully registered
    successAlert("Registration Success", "Succesfully registered an account! Redirecting you to home page!");
  }

  const sendOtp = () =>
  {
    console.log("test");
    console.log(emailRef.current.value)
    axios.post(`http://localhost:3005/api/sendOTP/${emailRef.current.value}`)
    .then((res)=>{console.log(res.data);    
    successAlert("OTP successfully sent!", "Please enter the one time password that is sent to your email!");
    })
    .catch((err)=>{console.log(err);
    failedAlert("Something went wrong", "Please try again!")})

  }

  return (
    <div className={styles.signup}>
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
                <Form.Group id="password" className={styles.fields}>
                  <Form.Label><p className={styles.title} >Password</p></Form.Label>
                  <Form.Control type="password" required ref={passwordRef} />
                </Form.Group>
                <Form.Group id="confirmpassword" className={styles.fields}>
                  <Form.Label><p className={styles.title} >Confirm Password</p></Form.Label>
                  <Form.Control type="password" required ref={confirmPasswordRef} />
                </Form.Group>
                <Form.Group id={styles.otp} className={styles.fields}>
                  <Form.Label><p className={styles.title} >Enter OTP</p></Form.Label>
                  <Form.Control />
                  <div onClick={sendOtp} className="btn" id={styles.otpBtn}>Generate OTP</div>
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
      
       
    </div>
  )
}

export default SignupComponent