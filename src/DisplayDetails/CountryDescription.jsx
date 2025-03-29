import styles from "./countrydescription.module.css"

const CountryDescription = ({country, nativeName , population , region , subRegion , capital , domin , currencies , languages, car , timeZone}) => {

    return(
        <div className={styles.allContentContainer}>

                <div className={styles.countryNameContainer}>
                        <h3>{country}</h3>
                </div>

            <div className={styles.bottomSideContainer}>

                
                <div className={styles.leftSideDetailsContainer}>
                    <div className={styles.detailContainer}>
                        <p>Native Name : <span className= {styles.text}>{nativeName}</span></p>
                    </div>

                    <div className={styles.detailContainer}>
                       <p>Population : <span className= {styles.text}>{population}</span></p>
                    </div>

                    <div className={styles.detailContainer}>
                        <p>Region : <span className= {styles.text}>{region}</span></p>
                    </div>

                    <div className={styles.detailContainer}>
                        <p>Sub Region : <span className= {styles.text}>{subRegion}</span></p>
                    </div>

                    <div className={styles.detailContainer}>
                        <p>Capital : <span className= {styles.text}>{capital}</span> </p>
                    </div>
                </div>
            

                <div className={styles.rightSideDetailsContainer}>

                        <div className={styles.detailContainer}>
                        <p>Top Level Domin : <span className= {styles.text}>{domin}</span></p>
                        </div>

                        <div className={styles.detailContainer}>
                            <p>Currencies : <span className= {styles.text}>{currencies}</span></p>
                        </div>

                        <div className={styles.detailContainer}>
                            <p>Languages : <span className= {styles.text}>{languages}</span></p>
                        </div>

                        <div className={styles.detailContainer}>
                            <p>Car : <span className= {styles.text}>{car}</span></p>
                        </div>

                        <div className={styles.detailContainer}>
                            <p>Time Zone : <span className= {styles.text}>{timeZone}</span></p>
                        </div>


                </div>

            </div>

        </div>
    )
}

export default CountryDescription