
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

const SignupComponent = () => {

  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);


  const handleSubmit = async(e)=>
  {
    e.preventDefault();
    setError("");
    
    //proceed to do form validation here before calling api



    // if successfully registered
    successAlert("Registration Success", "Succesfully registered an account! Redirecting you to home page!");
  }



  return (
    <div className={styles.signup}>
      <Card className={styles["signup-card"]}>
            <Card.Body>
              <p className="mb-1" style={{fontSize:  "46px", fontWeight: "650", textAlign: "center"}}>Register Account</p>
              <p style={{ color: "#495057", fontSize: "17px",textAlign: "center", fontWeight: '500' }}>
                Please enter your details
              </p>
              {error && <Alert variant="danger">{error}</Alert>}
              <Form>
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
                <p style = {link}>Forgot password</p>
                <button
                  onClick={handleSubmit}
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