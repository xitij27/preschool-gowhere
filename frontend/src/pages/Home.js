// About page: describes the purpose and services of our application to the user, and provide a contact us form


import React from 'react'

//Filtere bar is the collapsable filter component (in the home page) used by the user to filter preschools
import FilterBar from '../components/filterComponents/FilterBar';

// import css styles
import styles from "../styles/homeStyles/home.module.css";


const Home = () => {
  return (
    <>
        {/* <div>Home</div> */}
        <FilterBar />
    </>
  )
}

export default Home