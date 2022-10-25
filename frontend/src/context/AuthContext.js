import React, { useContext, useState, useEffect } from "react";
import axios from "axios";

const AuthContext = React.createContext();

export const useAuth = () => useContext(AuthContext);
export const AuthProvider = ({ children }) => {

    const [currentUser, setCurrentUser] = useState({"email": null});
    const [authenticated,setAuthenticated] = useState(false);
    const [curUsername, setCurUsername] = useState("");
    const [userLocation, setUserLocation] = useState({});
    const [basicCriterias, setBasicCriterias] = useState(
    {
        "citizenship": "SC",
        "level": "Kindergarten 1 (5 yrs old)",
        "type_service": "Full Day",
        
    }
    ); //basic criterias will be set by user once user signs up


    //set current location of user
    useEffect(()=>{
        navigator.geolocation.getCurrentPosition(function(position) {
            console.log("Latitude is :", position.coords.latitude);
            console.log("Longitude is :", position.coords.longitude);
            const location = {"lat": position.coords.latitude, "lng": position.coords.longitude}
            setUserLocation(location);
        });
    },[])

    //set email of user to the persistent email data(stored in localStorage) upon refresh
    
    useEffect(()=>
    {
        const userData = JSON.parse(localStorage.getItem("UserData"));
        userData ? setCurrentUser(userData) : setCurrentUser({"email": null});
        console.log("used local storage")
    },[])

    

    const value = {
        currentUser,
        setCurrentUser,
        authenticated,
        setAuthenticated,
        userLocation,
        basicCriterias,
    };
    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};