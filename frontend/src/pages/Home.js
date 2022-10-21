//Home page is the default page that showcases the google map functionality, alongside with the filters

import React, { useState,useEffect } from 'react'

//Filtere bar is the collapsable filter component (in the home page) used by the user to filter preschools
import FilterBar from '../components/filterComponents/FilterBar';
import NavigationBar from '../components/NavigationBar';
import Map from "../components/MapsComponents/Map"

// import css styles
import styles from "../styles/homeStyles/home.module.css";

//import icons
import {MdOutlineMenu} from "react-icons/md"
import { Mapsfunc } from '../components/Maps/Maps.js';
const Home = () => {

  const [expandFilterBar, setExpandFilterBar] = useState(false);


  return (
    <>
      <NavigationBar />

      <div className='home' style={{height: "95vh",width: "100%", position: "relative"}}>

          {/* Expandable Menu bar icon */}
          <div onClick={()=> setExpandFilterBar(!expandFilterBar)} className={styles.expandFilter} style={{position: "absolute", top: "10vh", left: "12px", zIndex: "100", backgroundColor :"#FC575E", padding: "5px", borderRadius: "4px"}}>
            < MdOutlineMenu size={36} color={"white"} />
          </div>

          {/* Insert google map component here */}
          <div className={styles["google-maps"]}>
            <div className= {styles["map-styles"]}>
              {/* <Mapsfunc> </Mapsfunc> */}
              <Map />
            </div>
          </div>
          {/* Expandable filter bar */}
          {expandFilterBar ? <div className={styles["blur-modal"]}>
            <FilterBar expandFilterBar={expandFilterBar} setExpandFilterBar = {setExpandFilterBar}   />
          </div> : <></>}
          



      </div>
    </>
  )
}

export default Home