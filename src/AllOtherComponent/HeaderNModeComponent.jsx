import { MdDarkMode , MdOutlineDarkMode } from "react-icons/md";
import { useTheme } from "./ThemeProvider";
import styles from "./headernmode.module.css"
import { NavLink } from "react-router";
import { FaHome } from "react-icons/fa";
import stylesOne from "../rootlayout.module.css"




const HeaderNModeComponent = () =>{

    const { isDarkMode, toggleTheme } = useTheme();

    

   
    return(
        
        <div className={`${styles.allContentContainer} ${isDarkMode ? stylesOne.dark: stylesOne.light}`}>
            <div className={styles.headingContainer}>
                <NavLink to={"/"} className={styles.headingLink}> <FaHome className={styles.homeIcon}/> <h1> Where in the world ? </h1> </NavLink>
                
            </div>

            < div className={styles.iconAndTitleContainer}>

                <div className={styles.iconContainer} onClick={toggleTheme}>
                    {isDarkMode ? <MdDarkMode className={styles.icon}/> : <MdOutlineDarkMode className={styles.icon} />}
                </div>

                <div className={styles.titleContainer}>
                    <p>Dark Mode</p>

                </div>
            
            </div>
        </div>  
    )
}

export default HeaderNModeComponent 
