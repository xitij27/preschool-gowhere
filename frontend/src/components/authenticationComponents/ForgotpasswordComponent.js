
// import css styles
import styles from "../../styles/authenticationStyles/signup.module.css";

import React, { useRef,useState } from "react";

import { Form, Button, Alert, Card } from "react-bootstrap";

import { motion } from "framer-motion";

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

const ForgotpasswordComponent = () => {

  const emailRef = useRef();
  const newPasswordRef = useRef();
  const newConfirmPasswordRef = useRef();
  const otpRef = useRef();

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);


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

    //post user data to backeend
    

    // if successfully registered
    successAlert("Password reset successfully!");
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
                <button type="button" className={"w-100 mt-1" + " " + styles["login-btn"]}>
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
                  Sign up
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