
// import css styles
import styles from "../../styles/homeStyles/filterBar.module.css";

import React, { useRef,useState } from "react";

// react routing import
import { Link, useNavigate } from "react-router-dom";

import { successAlert, failedAlert, successAlertFast } from "../../helpers/sweetalerthelper";

//icons import
import { AiFillCloseCircle } from "react-icons/ai";

//import utilities/criterias

import {criteriaOptions} from "../../utilities/criterias"

//import context
import {useAuth} from "../../context/AuthContext";

//bootstrap imports
import Dropdown from 'react-bootstrap/Dropdown';
import Form from 'react-bootstrap/Form';
import { Button, DropdownButton } from "react-bootstrap";
import axios from "axios";


import { useFilter } from '../../context/FilterContext';


const FilterBar = ({expandFilterBar, setExpandFilterBar}) => {

    //context state variables
    const { userLocation,basicCriterias,currentUser } = useAuth();
    const {
            filteredPreschools,setFilteredPreschools,criterias,setCriterias,
            
            //criteria options for filterbars
            location,setLocation,
            fees,setFees,
            minFees,setMinFees,
            maxFees,setMaxFees,
            foodInput,setFoodInput,
            second_langInput,setSecond_langInput,
            serviceInput,setServiceInput,
            sparkInput,setSparkInput,
            transportInput,setTransportInput,
            exOperatingHoursInput,setExOperatingHoursInput,

            //criteria titles for ui purposes
            foodTitle,setFoodTitle,
            secondlangTitle,setSecondlangTitle,
            sparkTitle,setSparkTitle,
            transportTitle,setTransportTitle,
            exOperatingHoursInputTitle,setExOperatingHoursInputTitle,
            serviceTitle,setServiceTitle,
    } = useFilter();

    const sendEmailReport = () =>
	{
		const criterias = 
        {
            "food": foodInput ,
            "second_lang": second_langInput,
            "spark": sparkInput,
            "transport": transportInput,
            "citizenship": basicCriterias.citizenship,
            "level": basicCriterias.level,
            "max_fee": maxFees,
            "min_fee": minFees,
            "type_service": basicCriterias["type_service"],
            "service": serviceInput,
            "lat": userLocation.lat,
            "long": userLocation.lng,
            "distance": location
		}
		setCriterias(criterias)
        if (criterias === null)
        {
            failedAlert("Please try again!", "You have not searched for any preschools yet!");
            return;
        }

        console.log("sending email report!");
        //call backend api to send email report
        const bodyData = criterias;
        bodyData.email = currentUser.email;
        axios.post("http://localhost:3005/api/filteremail",bodyData)
        .then((res)=> {
            console.log(res.data);
            successAlertFast("Email report successfully sent!", `Full Report of preschool sent to : ${currentUser.email}! `)
        })
        .catch((err)=> failedAlert("Something went wrong!"," Please try again!"))

    }



    const handleFilter =()=>
    {
        const criterias = 
        {
            "food": foodInput ,
            "second_lang": second_langInput,
            "spark": sparkInput,
            "transport": transportInput,
            "citizenship": basicCriterias.citizenship,
            "level": basicCriterias.level,
            "max_fee": maxFees,
            "min_fee": minFees,
            "type_service": basicCriterias["type_service"],
            "service": serviceInput,
            "lat": userLocation.lat,
            "long": userLocation.lng,
            "distance": location
        }
        //check if user enabled location services
        if (criterias.lat === undefined || criterias.long === undefined)
        {
            failedAlert("Filter Search unsuccessful!!", "Please check that you have enabled location services!");
            return;
        }

        //post request to backend for filter functionality
        axios.post("http://localhost:3005/api/filter",criterias)
        .then((res)=>{
            //console.log(res.data);
            setCriterias(criterias);
            if (res.data === null || res.data === undefined || res.data=== [] )
            {setFilteredPreschools([]);}
            else
            {setFilteredPreschools(res.data);}
            setExpandFilterBar(!expandFilterBar);
            successAlertFast("Loading Filters", "Searching for the most suitable preschools for you!");
        })
        .catch((err)=> console.log(err));
    }


  return (
    
    <div className={styles.filterbar}>
        
        <div className="close" style={{float: "right", margin:"0px"}} onClick={()=> setExpandFilterBar(false)}>
            <AiFillCloseCircle size ={30} color={"#FC575E"}  />
        </div>
        {/* title "filter preschools" */}
        <div className={styles.title}>Filter Preschools</div>

        {/* sliders for distance from home criteria */}
        <div className= {styles.slider}>
            <div className={styles.criteriaTitle}>Location (km) </div>
            <input type="range" min="0" max="50" value={location} onChange={(e)=>setLocation(e.target.value)} className={styles.rangeMin}></input>
            <div className={styles.para}>Distance from home: <b>{`${location} km`}</b></div>
        </div>

        {/* Slider for min and max fees criteria*/}
        <div className={styles.criteriaTitle}>Price Range ($)</div>
        <div className={styles.fees}>
            <div className={styles.priceInput}>
                <div className={styles.field}>
                    <span style={{color: "#FC575E", fontWeight: " 600"}}>Min</span>
                    <div className={styles.inputMin}>{minFees}</div>
                </div>
                <div className={styles.field}>
                    <span style={{color: "#FC575E", fontWeight: " 600"}}>Max</span>
                    <div className={styles.inputMax}>{maxFees}</div>
                </div>
            </div>

            <div className={styles.rangeInput}>
                <div style={{color: "#FC575E", fontWeight: "500"}}>Adjust Min Price</div>
                <input type="range" min="0" max="4100" value={minFees} onChange={e => setMinFees(e.target.value)} className={styles.rangeMin}></input>
                <div style={{color: "#FC575E", fontWeight: " 500"}}>Adjust Max price</div>
                <input type="range" min="0" max="4100" value= {maxFees} onChange={e => setMaxFees(e.target.value)}  className={styles.rangeMax}></input>
            </div>


        </div>



        {/* other criterias */}

        <div className={styles.criteria}>
            <div className={styles.criteriaTitle}>Second Language Offered</div>
            <Dropdown className={styles.dropdownbtn} >
                <Dropdown.Toggle variant="success" id="dropdown-basic" style={dropdownbtn}>
                    <div style={{display: "inline-block", marginRight: "15px"}}>{secondlangTitle}</div>
                </Dropdown.Toggle>

                <Dropdown.Menu className={styles.dropdownmenu} >
                    {criteriaOptions["second_lang"].map((lang,index)=>{
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
                    
                    {criteriaOptions["food"].map((food,index)=>{
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
                    <div style={{display: "inline-block", marginRight: "15px"}}> {sparkTitle}</div>
                </Dropdown.Toggle>

                <Dropdown.Menu  className={styles.dropdownmenu} >
                    <Dropdown.Item onClick={()=>{setSparkInput("Yes");setSparkTitle("Yes")}}>Yes</Dropdown.Item>
                    <Dropdown.Item onClick={()=>{setSparkInput("Default");setSparkTitle("No Preference")}} >No preference (Default) </Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </div>

        <div className={styles.criteria}>
            <div className={styles.criteriaTitle}>Services</div>
            <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic" style={dropdownbtn}>
                    <div style={{display: "inline-block", marginRight: "15px", textOverflow: "ellipsis"}}>{serviceTitle}</div>
                </Dropdown.Toggle>

                <Dropdown.Menu  className={styles.dropdownmenu} onSelect={(e)=>setServiceInput(e)} >
                    
                    {criteriaOptions["service"].map((service,index)=>{
                        return <Dropdown.Item onClick={()=>{setServiceInput(service); setServiceTitle(service)}} key={index}>{service}</Dropdown.Item>

                    })}
                </Dropdown.Menu>
            </Dropdown>
        </div>

        

        <div className = {styles.filterButton + " " + "btn"} onClick={handleFilter}>Filter</div>
        
        <div className = {styles.filterButton + " " + "btn"} onClick={sendEmailReport}>Request Report</div>



    </div>
  )
}

//styling of bootstrap components
const dropdownbtn = 
{
    backgroundColor: "#FC575E",
    paddingTop: "8px",
    paddingBottom: "8px",
    minWidth: "100%",
    borderRadius:  "3px",
    paddingLeft: "10px",
    paddingRight: "10px",
}

export default FilterBar