import React from 'react';

// react-bootstrap import
import { Navbar, Container, Nav } from "react-bootstrap";
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

// react routing import
import { Link } from "react-router-dom";


const NavigationBar = () => {
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
                  <Nav.Link ><Link style ={{ textDecoration: "none", fontWeight: "400", color:  "white", fontSize: "18px"}} className="navbarlink" to="/about">About</Link></Nav.Link>
                  <Nav.Link ><Link className="navbarlink" to="/login" style ={{ textDecoration: "none", fontWeight: "400", color:  "white", fontSize: "18px"}}>  Login</Link></Nav.Link>
                  <Nav.Link ><Link className="navbarlink" to="/Signup" style ={{ textDecoration: "none", fontWeight: "400", color:  "white", fontSize: "18px"}}>  Signup</Link></Nav.Link>

                </Nav>
                
              </Navbar.Collapse>

        </Container>
    </Navbar>
  
  )
}

export default NavigationBar