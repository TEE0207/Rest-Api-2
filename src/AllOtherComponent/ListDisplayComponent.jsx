import styles from "./listdisplay.module.css"
import { useTheme } from './ThemeProvider';
import stylesOne from "../rootlayout.module.css"
import React from 'react';



const ListDisplayComponent = ({countryName,image, flagName, population, region, capital}) => {


            const { isDarkMode } = useTheme();
    

    return(
        <div className={`${styles.allContentContainer} ${isDarkMode ? stylesOne.dark : stylesOne.light}`}>

            <div className={styles.imageContainer}>
                <img src={image} alt={flagName} className={styles.image}/>

            </div>


            <div className={styles.titleAndDescriptionContainer}>
                
                    <div className={styles.countryTitleContainer}>
                        <h3>{countryName}</h3>

                    </div>

                    <div className={styles.countryDescriptionContainer}>

                        <div className={styles.populationContainer}>
                            <p>Population : <span className= {styles.text}> {population} </span></p>

                        </div>

                        <div className={styles.regionContainer}>
                            <p>Region : <span className= {styles.text}>{region} </span> </p>

                        </div>

                        <div className={styles.capitalContainer}>
                            <p> Capital : <span className= {styles.text}> {capital} </span> </p>

                        </div>
                    </div>

            </div>

           
        </div>


    )
}

// What does React.memo do?
// It prevents unnecessary re-renders if the props haven't changed.

// So if you're re-rendering the parent (like DisplayLayoutComponent) but a country card’s props are the same — it won’t re-render that card. Big win for performance.

//So what does React.memo check?
//It compares the values of the props between renders.

//If the values are the same as last render → no re-render ✅

//If even one value is different → re-render 🔁


export default React.memo(ListDisplayComponent);
