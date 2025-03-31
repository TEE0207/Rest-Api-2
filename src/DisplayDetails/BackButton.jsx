import { IoIosArrowRoundBack } from "react-icons/io";
import styles from "./backbutton.module.css"
import stylesOne from "../rootlayout.module.css"
import { useTheme } from '../AllOtherComponent/ThemeProvider';

const BackButton = ({backButton}) => {

    const { isDarkMode } = useTheme();


    return(
        <div className={styles.backButtonAndIconContainer} >
            <button onClick={backButton}  className= {`${styles.buttonContainer} ${isDarkMode ? stylesOne.dark: stylesOne.light}`}><IoIosArrowRoundBack className={styles.arrow} /> <span className={styles.text}>Back</span> </button>
        </div>
    )
}

export default BackButton