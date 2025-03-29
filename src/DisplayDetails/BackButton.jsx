import { IoIosArrowRoundBack } from "react-icons/io";
import styles from "./backbutton.module.css"

const BackButton = ({backButton}) => {


    return(
        <div className={styles.backButtonAndIconContainer}>
            <button onClick={backButton}  className={styles.buttonContainer}><IoIosArrowRoundBack className={styles.arrow} /> <span className={styles.text}>Back</span> </button>
        </div>
    )
}

export default BackButton