import styles from "./listDisplay.module.css"
const ListDisplayComponent = ({countryName,image, flagName, population, region, capital}) => {


    return(
        <div className={styles.allContentContainer}>

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

export default ListDisplayComponent