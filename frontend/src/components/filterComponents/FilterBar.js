
// import css styles
import styles from "../../styles/homeStyles/filterBar.module.css";

import React, { useRef,useState } from "react";

// react routing import
import { Link, useNavigate } from "react-router-dom";

import { successAlert, failedAlert } from "../../helpers/sweetalerthelper";

//icons import
import { AiFillCloseCircle } from "react-icons/ai";

//import utilities/criterias

import {criterias} from "../../utilities/criterias"

//bootstrap imports
import Dropdown from 'react-bootstrap/Dropdown';
import Form from 'react-bootstrap/Form';
import { Button, DropdownButton } from "react-bootstrap";

//styling of bootstrap components
const dropdownbtn = 
{
    backgroundColor: "#FC575E",
    paddingTop: "8px",
    paddingBottom: "8px",
    minWidth: "250px",
    borderRadius:  "3px",
    maxWidth: "250px",
    paddingLeft: "10px",
    paddingRight: "10px",
}

const FilterBar = ({expandFilterBar, setExpandFilterBar}) => {


    //criterias
    const [location,setLocation] = useState(50);
    const [fees,setFees] = useState(5000);
    const [foodInput,setFoodInput] = useState(null);
    const [second_langInput,setSecond_langInput] = useState(null);
    const [sparkInput,setSparkInput] = useState("Default");
    const [transportInput,setTransportInput] = useState("Default");
    const [exOperatingHoursInput,setExOperatingHoursInput] = useState("Default")


    //variables for dropdown titles (for display purposes)
    const [foodTitle,setFoodTitle] = useState("Select food type");
    const [secondlangTitle,setSecondlangTitle] = useState("Choose Second Language");
    const [sparkTitle,setSparkTitle] = useState("Availability");
    const [transportTitle,setTransportTitle] = useState("Availability");
    const [exOperatingHoursInputTitle,setExOperatingHoursInputTitle] = useState("Availability");


    const handleFilter =()=>
    {
        const criterias = {location,fees,foodInput,second_langInput,sparkInput,transportInput,exOperatingHoursInput};
        console.log(criterias);
    }


  return (
    
    <div className={styles.filterbar}>
        
        <div className="close" style={{float: "right", margin:"0px"}} onClick={()=> setExpandFilterBar(false)}>
            <AiFillCloseCircle size ={30} color={"#FC575E"}  />
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
            <Dropdown className={styles.dropdownbtn} >
                <Dropdown.Toggle variant="success" id="dropdown-basic" style={dropdownbtn}>
                    <div style={{display: "inline-block", marginRight: "15px"}}>{secondlangTitle}</div>
                </Dropdown.Toggle>

                <Dropdown.Menu className={styles.dropdownmenu} >
                    {criterias["second_lang"].map((lang,index)=>{
                        return <Dropdown.Item key={index} onClick={()=>{setSecond_langInput(lang);setSecondlangTitle(lang)}} >{lang}</Dropdown.Item>

                    })}
                </Dropdown.Menu>
            </Dropdown> 
            
        </div>


        <div className={styles.criteria}>
            <div className={styles.criteriaTitle}>Food</div>
            <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic" style={dropdownbtn}>
                    <div style={{display: "inline-block", marginRight: "15px", textOverflow: "ellipsis"}}>{foodTitle}</div>
                </Dropdown.Toggle>

                <Dropdown.Menu  className={styles.dropdownmenu} onSelect={(e)=>setFoodInput(e)} >
                    
                    {criterias["food"].map((food,index)=>{
                        return <Dropdown.Item key={index} onClick={()=>{setFoodInput(food);setFoodTitle(food)}}>{food}</Dropdown.Item>

                    })}
                </Dropdown.Menu>
            </Dropdown>
        </div>


        <div className={styles.criteria}>
            <div className={styles.criteriaTitle}>Provision of Transport</div>
            <Dropdown className={styles.dropdownbtn}>
                <Dropdown.Toggle variant="success" id="dropdown-basic" style={dropdownbtn}>
                    <div style={{display: "inline-block", marginRight: "15px"}}>{transportTitle}</div>
                </Dropdown.Toggle>

                <Dropdown.Menu  className={styles.dropdownmenu} >
                    <Dropdown.Item onClick={()=>{setTransportInput("Yes");setTransportTitle("Yes")}}>Yes</Dropdown.Item>
                    <Dropdown.Item onClick={()=>{setTransportInput("Default");setTransportTitle("No Preference")}}>No preference (Default) </Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </div>


        <div className={styles.criteria}>
            <div className={styles.criteriaTitle}>Extended Operating Hours</div>
            <Dropdown className={styles.dropdownbtn}>
                <Dropdown.Toggle variant="success" id="dropdown-basic" style={dropdownbtn}>
                    <div style={{display: "inline-block", marginRight: "15px"}}> {exOperatingHoursInputTitle}</div>
                </Dropdown.Toggle>

                <Dropdown.Menu  className={styles.dropdownmenu} >
                    <Dropdown.Item onClick={()=>{setExOperatingHoursInput("Yes");setExOperatingHoursInputTitle("Yes")}} >Yes</Dropdown.Item>
                    <Dropdown.Item onClick={()=>{setExOperatingHoursInput("Default");setExOperatingHoursInputTitle("No Preference")}}  >No preference (Default) </Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </div>

        <div className={styles.criteria}>
            <div className={styles.criteriaTitle}>Spark Certified</div>
            <Dropdown className={styles.dropdownbtn}>
                <Dropdown.Toggle variant="success" id="dropdown-basic" style={dropdownbtn}>
                    <div style={{display: "inline-block", marginRight: "15px"}}> Availability</div>
                </Dropdown.Toggle>

                <Dropdown.Menu  className={styles.dropdownmenu} >
                    <Dropdown.Item onClick={()=>{setSparkInput("Yes");setSparkTitle("Yes")}}>Yes</Dropdown.Item>
                    <Dropdown.Item onClick={()=>{setSparkInput("Default");setSparkTitle("No Preference")}} >No preference (Default) </Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </div>
        

        <div className = {styles.filterButton + " " + "btn"} onClick={handleFilter}>Filter</div>



    </div>
  )
}

export default FilterBar