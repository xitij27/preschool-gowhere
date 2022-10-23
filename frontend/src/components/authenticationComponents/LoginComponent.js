import React, { useRef,useState } from "react";

import { Form, Button, Alert, Card } from "react-bootstrap";

import { motion } from "framer-motion";

// react routing import
import { Link, useNavigate } from "react-router-dom";

import { successAlert, failedAlert } from "../../helpers/sweetalerthelper";

// import css styles
import styles from "../../styles/authenticationStyles/login.module.css";

//import context
import {useAuth} from "../../context/AuthContext";

//Testing with dummy data
import {users} from  "../../utilities/userData" ;

import axios from "axios";

const LoginComponent = () => {

  //useContext variables
  const {authenticated,setAuthenticated,currentUser, setCurrentUser} = useAuth();
  //state variables
  const emailRef = useRef();
  const passwordRef = useRef();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  //navigate
  const navigate = useNavigate();

  const clearInputFields = () =>
  {
    emailRef.current.value = "";
    passwordRef.current.value = "";
  }

  const handleSubmit = async(e)=>
  {
    e.preventDefault();
    setError("");

    //Authenticate user details with backend 
    const emailInput = emailRef.current.value;
    const passwordInput = passwordRef.current.value;
    axios.post("http://localhost:3005/api/login",{"email": emailInput,"password": passwordInput})
    .then(async(res)=>{
      console.log(res);
      if (res.data == "Succesfully logged in!")
      {
        successAlert("Login Success", "Succesfully logged in! Redirecting you to home page");
        const user = currentUser;
        user.email = emailInput;
        setCurrentUser(user);
        localStorage.setItem(`Authenticated`, JSON.stringify("true"));  //setAuthenticated(true);
        localStorage.setItem("UserData", JSON.stringify({"email": emailInput})); // store user email into localstorage
        
        //for loading success alert 2s
        await sleep(2000);
        navigate("/app/home");
      }
      else
      {
        failedAlert("Login unsuccessful!", "Did u enter the correct email and password?");
        clearInputFields();
      }
    })
    .catch((err)=>{
      failedAlert("Login unsuccessful!", "Oops something went wrong!");
      clearInputFields();
    });
    };

    
  
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
                <p style = {link}>
                  <Link style={{fontWeight: "600", fontSize: "1"}} to="/forgotpassword">
                    Forgot password
                  </Link>
                </p>
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

//custom styling objects
const link = 
{
  fontSize: "16px",
  fontWeight: "620",
  marginLeft: "0px",
  float: "right",
}

export default LoginComponent