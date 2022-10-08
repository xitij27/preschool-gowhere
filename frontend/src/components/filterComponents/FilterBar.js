
// import css styles
import styles from "../../styles/homeStyles/filterBar.module.css";

import React, { useRef,useState } from "react";

// react routing import
import { Link, useNavigate } from "react-router-dom";

import { successAlert, failedAlert } from "../../helpers/sweetalerthelper";

//icons import
import { AiFillCloseCircle } from "react-icons/ai";



//bootstrap imports
import Dropdown from 'react-bootstrap/Dropdown';
import Form from 'react-bootstrap/Form';



//styling of bootstrap components
const dropdownbtn = 
{
    backgroundColor: "#FC575E",
    paddingTop: "8px",
    paddingBottom: "8px",
    minWidth: "250px",
    borderRadius:  "3px",
}


const FilterBar = () => {

    const [location,setLocation] = useState(25);
    const [fees,setFees] = useState(2500);


  return (
    <div className={styles.filterbar}>
        
        <div className="close" style={{float: "right", margin:"10px"}}>
            <AiFillCloseCircle size ={30} color={"#FC575E"} />
        </div>
        {/* title "filter preschools" */}
        <div className={styles.title}>Filter Preschools</div>

        {/* sliders for location and fees */}
        <div className= {styles.slider}>
            <div className={styles.criteriaTitle}>Location (km) </div>
            <Form.Range min={"0"} max={"50"} onChange={(e)=>setLocation(e.target.value)}/>
            <div className={styles.para}>Distance from home: <b>{`${location} km`}</b></div>

        </div>

        
        <div className= {styles.slider}>

            <div className={styles.criteriaTitle}>Fees (per month)</div>
            <Form.Range min={"0"} max={"5000"} onChange={(e)=>setFees(e.target.value)}/>
            <div className={styles.para}>Fees per month: <b>{`$${fees}`}</b></div>
        
        </div>



        {/* other criterias */}

        <div className={styles.criteria}>
            <div className={styles.criteriaTitle}>Second Language Offered</div>
            <Dropdown className={styles.dropdownbtn}>
                <Dropdown.Toggle variant="success" id="dropdown-basic" style={dropdownbtn}>
                    <div style={{display: "inline-block", marginRight: "15px"}}>Choose second language</div>
                </Dropdown.Toggle>

                <Dropdown.Menu  className={styles.dropdownmenu} >
                    <Dropdown.Item >Chinese</Dropdown.Item>
                    <Dropdown.Item >Arab</Dropdown.Item>
                    <Dropdown.Item >Bahasa Indonesia</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </div>


        <div className={styles.criteria}>
            <div className={styles.criteriaTitle}>Food</div>
            <Dropdown className={styles.dropdownbtn}>
                <Dropdown.Toggle variant="success" id="dropdown-basic" style={dropdownbtn}>
                    <div style={{display: "inline-block", marginRight: "15px"}}>Select food type</div>
                </Dropdown.Toggle>

                <Dropdown.Menu  className={styles.dropdownmenu} >
                    <Dropdown.Item >Halal</Dropdown.Item>
                    <Dropdown.Item >Vagetarian</Dropdown.Item>
                    <Dropdown.Item >Non-Halal</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </div>


        <div className={styles.criteria}>
            <div className={styles.criteriaTitle}>Transportation Services</div>
            <Dropdown className={styles.dropdownbtn}>
                <Dropdown.Toggle variant="success" id="dropdown-basic" style={dropdownbtn}>
                    <div style={{display: "inline-block", marginRight: "15px"}}>Availability</div>
                </Dropdown.Toggle>

                <Dropdown.Menu  className={styles.dropdownmenu} >
                    <Dropdown.Item >Yes</Dropdown.Item>
                    <Dropdown.Item >No</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </div>


        <div className={styles.criteria}>
            <div className={styles.criteriaTitle}>Extend Operating Hours</div>
            <Dropdown className={styles.dropdownbtn}>
                <Dropdown.Toggle variant="success" id="dropdown-basic" style={dropdownbtn}>
                    <div style={{display: "inline-block", marginRight: "15px"}}> Availability</div>
                </Dropdown.Toggle>

                <Dropdown.Menu  className={styles.dropdownmenu} >
                    <Dropdown.Item >Yes</Dropdown.Item>
                    <Dropdown.Item >No</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </div>









    </div>
  )
}

export default FilterBar