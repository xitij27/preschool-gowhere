import React, { useState,useEffect } from 'react'
import { useJsApiLoader,GoogleMap, Marker, InfoWindow } from '@react-google-maps/api';

//sweetalert notification
import { successAlert, failedAlert, successAlertFast } from "../../helpers/sweetalerthelper";
import { AiTwotoneHome } from 'react-icons/ai';
// import css styles
import styles from "../../styles/mapStyles/map.module.css";

//import context
import {useAuth} from "../../context/AuthContext";
import { useFilter } from '../../context/FilterContext';
import axios from 'axios';

//api key 
const apiKey ='';

//locations
const centerSingapore = {lat: 1.352 , lng:103.820 };


const Map = () => {

    //context variables
    const {currentUser} = useAuth();
    const {filteredPreschools,criterias} = useFilter();

    //state variables for this component
    const [selectedSchool, setSelectedSchool] = useState(null);
    
    //check if gmaps is loaded
    const {isLoaded} = useJsApiLoader({
        googleMapsApiKey: apiKey ,
    })


    const bookmarkPreschool = () =>
    {
        console.log("bookmark preschool !")
    }

    if (!isLoaded)
    {
        return (
        <div>
            {/* {failedAlert("Loading of map unsuccessful", "Please refresh and try again")} */}
        </div>)
    }



    return (
        <div style={{height: "100vh", maxWidth: "100vw"}}>
            <GoogleMap center={centerSingapore} zoom={12} mapContainerStyle={{width: "100%", height: "95%"}} options={{gestureHandling:'greedy', disableDefaultUI:true}}>
                {console.log(filteredPreschools)}
                {(filteredPreschools)? filteredPreschools.map((preschool,index)=>{
                    return(
                        <div className='preschool' key={index}>
                            {/*<Marker position={{lat: 1.352 , lng:103.820 }} icon={{path: AiTwotoneHome.icon[4]}}/>*/}
                            <Marker key={index} position={{lat: preschool.latitude,lng: preschool.longitude}} 
                            onClick={()=>{
                                setSelectedSchool(preschool);
                            }} />
                            
                            
                        </div>
                    )
                }): <></>}

            {selectedSchool && (
                <InfoWindow position={{lat: selectedSchool.latitude,lng: selectedSchool.longitude}} onCloseClick ={()=>{setSelectedSchool(null)}}>
                    <div className={styles.infoWindow}>
                        <p className={styles.title}>Preschool information</p>
                        <p className={styles.para}><b>Center Code: </b>{selectedSchool['centre_code']}</p>
                        <p className={styles.para}><b>Center Name: </b>{selectedSchool['centre_name']}</p>
                    </div>
                </InfoWindow>
            )}
            </GoogleMap>

        </div>
    )
}

export default Map