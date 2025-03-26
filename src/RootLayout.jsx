import HeaderNModeComponent from "./AllOtherComponent/HeaderNModeComponent"
import styles from "./rootlayout.module.css"
import { useTheme } from './AllOtherComponent/ThemeProvider';
import { Outlet } from "react-router";


export const RootLayout = () =>{

        const { isDarkMode } = useTheme();
    
    return(
        <div className={styles.mainPage}>

        <div className={`${styles.theHeader} ${isDarkMode ? styles.dark : styles.light}`}>
                <HeaderNModeComponent />

            </div>

            <div className="contentContainer">
                <Outlet />
            </div>



        </div>
    )
}

