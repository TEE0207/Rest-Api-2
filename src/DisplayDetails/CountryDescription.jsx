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
                        <p>Native Name : {nativeName}</p>
                    </div>

                    <div className={styles.detailContainer}>
                       <p>Population : {population}</p>
                    </div>

                    <div className={styles.detailContainer}>
                        <p>Region : {region}</p>
                    </div>

                    <div className={styles.detailContainer}>
                        <p>Sub Region : {subRegion}</p>
                    </div>

                    <div className={styles.detailContainer}>
                        <p>Capital : {capital} </p>
                    </div>
                </div>
            

                <div className={styles.rightSideContainer}>

                        <div className={styles.detailContainer}>
                        <p>Top Level Domin : {domin}</p>
                        </div>

                        <div className={styles.detailContainer}>
                            <p>Currencies : {currencies}</p>
                        </div>

                        <div className={styles.detailContainer}>
                            <p>Languages : {languages}</p>
                        </div>

                        <div className={styles.detailContainer}>
                            <p>Car : {car}</p>
                        </div>

                        <div className={styles.detailContainer}>
                            <p>Time Zone : {timeZone}</p>
                        </div>


                </div>

            </div>

        </div>
    )
}

export default CountryDescription