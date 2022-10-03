// About page: describes the purpose and services of our application to the user, and provide a contact us form
import React from 'react'

// import css styles
import styles from "../styles/aboutStyles/about.module.css";

const About = () => {
  return (
    <div>
        <div className='navbar'></div>
        <div className={styles.about}>
            <div className={styles.banner}>
                <div className={styles.title}>Searching for a preschool has never been easier!</div>
                <div className={styles.para}>Every child is different. We cater to your  preferences
                and only recommend you the most suitable ones!</div>
                <div className={styles.buttons}>
                    <div className={"btn" + " " + styles.button}>Get Started</div>
                    <div className={"btn" + " " + styles["button-outline"]}>About us</div>
                </div>
            </div>

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
                        <div className={styles["box-title"]}>Bookmarks</div>
                        <div className={styles["box-para"]}>Bookmark and save any of the preschools you are interested in, and feel free to come revisit them anytime you want!</div>
                    </div>

                    
                </div>
                
                
            </div>

        </div>
    </div>
    
  )
}

export default About