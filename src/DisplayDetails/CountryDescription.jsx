import styles from "./countrydescription.module.css"

const CountryDescription = ({country, nativeName , population , region , subRegion , capital , domin , currencies , languages}) => {

    return(
        <div className={styles.allContentContainer}>

            <div className={styles.rightSideContainer}>

                <div className={styles.countryNameContainer}>
                    <h3>{country}</h3>
                </div>

                <div className={styles.rightSideDetailsContainer}>
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

            </div>

            <div className={styles.leftSideContainer}>

                    <div className={styles.detailContainer}>
                      <p>Top Level Domin : {domin}</p>
                    </div>

                    <div className={styles.detailContainer}>
                        <p>Currencies : {currencies}</p>
                    </div>

                    <div className={styles.detailContainer}>
                        <p>Languages : {languages}</p>
                    </div>


            </div>

        </div>
    )
}

export default CountryDescription