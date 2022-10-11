import React, { useRef,useState } from "react";

import { Form, Button, Alert, Card } from "react-bootstrap";

import { motion } from "framer-motion";

// react routing import
import { Link, useNavigate } from "react-router-dom";

import { successAlert, failedAlert } from "../../helpers/sweetalerthelper";

// import css styles
import styles from "../../styles/authenticationStyles/login.module.css";

//Testing with dummy data
import {users} from  "../../dummyData/userData" ;

const LoginComponent = () => {


  //state variables
  const emailRef = useRef();
  const passwordRef = useRef();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  //navigate
  const navigate = useNavigate();


  //custom styling objects
  const link = 
  {
    fontSize: "16px",
    fontWeight: "620",
    marginLeft: "0px",
    float: "right",
  }

  const handleSubmit = async(e)=>
  {
    e.preventDefault();
    setError("");

    //Proceed to do more input validation 


    //Authenticate user details with backend 
    

    //Testing with dummy data
    const emailInput = emailRef.current.value;
    const passwordInput = passwordRef.current.value;

    if (emailInput == users[0].email && passwordInput == users[0].password)
    {
      console.log("successfully authenticated");
      successAlert("Login Success", "Succesfully logged in! Redirecting you to home page");
      await sleep(2000);
      navigate("/home");

    }
    else
    {
      failedAlert("Log in unsuccessful!", "Please retry again!") 
    }

    //if login authentication succeeds, set authContext user's status as authenticated. Show success popup
    //successAlert("Login Success", "Succesfully logged in! Redirecting to home page");
  }



  return (
    <div className={styles.login}>
      <Card className={styles["login-card"]}>
            <Card.Body>
              <p className="mb-1" style={{fontSize:  "46px", fontWeight: "650", textAlign: "center"}}>Welcome Back</p>
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
                <p style = {link}>Forgot password</p>
                <button
                
                  disabled={loading}
                  type="submit"
                  className={"w-100 mt-1" + " " + styles["login-btn"]}
                  whileHover={{
                    backgroundColor: "#f95738",
                    boxShadow: "0px 0px 8px #ff9f1c", 
                  }}
                >
                  Sign In
                </button>
              </Form>
              
              <div className="w-100 text-center mt-2">
                Don't have an account? <span ><Link style={{fontWeight: "600", fontSize: "1"}} to="/signup">Sign up</Link></span>
              </div>
            </Card.Body>
          </Card>
      
       
    </div>
  )
}

const sleep = (milliseconds) => {
  return new Promise(resolve => setTimeout(resolve, milliseconds))
}

export default LoginComponent