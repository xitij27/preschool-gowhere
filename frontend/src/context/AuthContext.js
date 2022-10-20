import React, { useContext, useState, useEffect } from "react";
import axios from "axios";

const AuthContext = React.createContext();

export const useAuth = () => useContext(AuthContext);
export const AuthProvider = ({ children }) => {

  const [currentUser, setCurrentUser] = useState();
  const [curUsername, setCurUsername] = useState("");
  const [userLocation, setUserLocation] = useState({});

    //signup
    //   const signup = (email, password) => {
    //     return createUserWithEmailAndPassword(auth, email, password);
    //   };

    //login
    // const login =  async(email, password) => {
    // await axios.post("http://localhost:3005/api/login",null,{email,password})
    // .then((res)=>console.log(res))
    // .catch((err)=>console.log(err));
    // };

    //logout
    //   const logout = (email) => {
    //     return signOut(auth, email);
    //   };

    //resetPw
    //   const resetPassword = (email) => {
    //     return sendPasswordResetEmail(auth, email);
    //   };


    //   useEffect(() => {
    //     const unsubscribe = auth.onAuthStateChanged((user) => {
    //       setCurrentUser(user);
    //     });
    //     return unsubscribe;
    //   }, []);

    //get user location
    // const getUserLocation = () =>
    // {
    //     navigator.geolocation.getCurrentPosition(function(position) {
    //         console.log("Latitude is :", position.coords.latitude);
    //         console.log("Longitude is :", position.coords.longitude);
    //         setUserLocation({"lat":position.coords.latitude, "lng": position.coords.longitude})
    //     });
    // }

    useEffect(()=>{
        navigator.geolocation.getCurrentPosition(function(position) {
            console.log("Latitude is :", position.coords.latitude);
            console.log("Longitude is :", position.coords.longitude);
            const location = {"lat": position.coords.latitude, "lng": position.coords.longitude}
            setUserLocation(location);
        });
    },[])
    

    const value = {
        currentUser,
        userLocation,
        //signup,
        //login,
        //logout,
        //resetPassword,
        //setCurUsername,
        //curUsername,
    };
    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};