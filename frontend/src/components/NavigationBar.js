import React from 'react';

// react-bootstrap import
import { Navbar, Container, Nav } from "react-bootstrap";
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

// react routing import
import { Link } from "react-router-dom";

//import context
import {useAuth} from "../context/AuthContext";
import {useFilter} from "../context/FilterContext";


import { successAlert, failedAlert } from "../helpers/sweetalerthelper";


const NavigationBar = () => {

  const {setAuthenticated} = useAuth();
  const {setFilteredPreschools} = useFilter();

  
  return (

    <Navbar style ={{backgroundColor: "#FC575E" , paddingTop:"10px", paddingBottom: "10px", paddingLeft: "20px", paddingRight: "40px"}} expand="lg">
        <Container>
          <Navbar.Brand className='logofont-navbar' style ={{ textDecoration: "none", fontWeight: "600", color:  "white", fontSize: "24px", marginRight: "45px"}}>PreSchool GoWhere</Navbar.Brand>
          
          <Navbar.Toggle aria-controls="navbarScroll"/>
              <Navbar.Collapse id="navbarScroll" >
                <Nav

                  className="me-auto my-2 my-lg-0"
                  style={{ maxHeight: '150px', width: "100%" }}
                  navbarScroll
                >
                  <Nav.Link ><Link className="navbarlink" to="/app/home" style ={{ textDecoration: "none", fontWeight: "400", color:  "white", fontSize: "18px"}}>  Home</Link></Nav.Link>
                  <Nav.Link ><Link style ={{ textDecoration: "none", fontWeight: "400", color:  "white", fontSize: "18px"}} className="navbarlink" to="/app/about">About</Link></Nav.Link>
                  <Nav.Link ><Link onClick={()=>
                  {
                    setAuthenticated(false);
                    setFilteredPreschools(null);
                    successAlert("Logged out successfully", "Return to where you were by logging back in!")
                                          
                  }} 
                  style ={{ textDecoration: "none", fontWeight: "400", color:  "white", fontSize: "18px"}} className="navbarlink" to="/login">Logout</Link></Nav.Link>

                </Nav>
                
              </Navbar.Collapse>

        </Container>
    </Navbar>
  
  )
}

export default NavigationBar