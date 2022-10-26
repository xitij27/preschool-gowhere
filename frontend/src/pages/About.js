// About page: describes the purpose and services of our application to the user, and provide a contact us form
import React from 'react'
import { Link, useNavigate } from "react-router-dom";
// import css styles
import styles from "../styles/aboutStyles/about.module.css";

//import components
import NavigationBar from '../components/NavigationBar';
import { motion } from "framer-motion";

const About = () => {
  return (
    <div>
        <NavigationBar id ="navbar"/>
          <div className={styles.about}>
            <motion.div
                initial={{ y: -150, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                    type: "easeOut",
                    // stiffness: 120,
                    duration: 0.6,
                    delay: 0.3,
                }}
              >   
                <div className={styles.banner}>
                    <div className={styles.title}>Searching for a preschool has never been easier!</div>
                    <div className={styles.para}>Every child is different. We cater to your  preferences
                    and only recommend you the most suitable ones!</div>
                    <div className={styles.buttons}>
                        <Link to="/app/home">
                            <div className={"btn" + " " + styles.button}>                                
                                    Get Started👍                                
                            </div>
                        </Link>
                        <a href="https://github.com/CZ3002-Advanced-Software-Egineeringg/Frontend/tree/frontend1">
                        <div className={"btn" + " " + styles["button-outline"]}>
                            View code❤️
                        </div>
                        </a>
                    </div>
                </div>
            </motion.div>
            <motion.div
                initial={{ x: 250, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{
                    type: "spring",
                    stiffness: 60,
                    duration: 0.5,
                    delay: 0.3,
                }}
              >

            <div className={styles.boxes}>
                <div className={styles.box}>
                    <div id ={styles.box1headerimage}></div>
                    <div className={styles.boxcontent}>
                        <div className={styles["box-title"]}>Map Display</div>
                        <div className={styles["box-para"]}>Preschools all over singapore will be displayed on a visual map, allowing you to have a bird’s eye view!</div>
                    </div>
                </div>
                <div className={styles.box}>
                    <div id ={styles.box2headerimage}></div>
                    <div className={styles.boxcontent}>
                        <div className={styles["box-title"]}>Search Filter</div>
                        <div className={styles["box-para"]}>These search filters allow you to enter a plethora of needs and preferences for your child. We listen to them and recommend you your closest matches!</div>
                    </div>

                    
                </div>
                <div className={styles.box}>
                    <div id ={styles.box3headerimage}></div>
                    <div className={styles.boxcontent}>
                        <div className={styles["box-title"]}>Save Filters</div>
                        <div className={styles["box-para"]}>Save and bookmark your filters so that you will be able to use them again anytime you want!</div>
                    </div>

                    
                </div>
            </div>
            </motion.div>
        </div>
    </div>
    
  )
}

export default About