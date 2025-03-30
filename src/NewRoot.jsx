import HeaderNModeComponent from "./AllOtherComponent/HeaderNModeComponent"
import stylesOne from "./rootlayout.module.css"
import { useTheme } from './AllOtherComponent/ThemeProvider';
import { Outlet } from "react-router";


export const NewRoot = () =>{

        const { isDarkMode } = useTheme();
    
    return(
        <div className={stylesOne.mainPage}>

            < div className={`${stylesOne.theHeader} ${isDarkMode ? stylesOne.dark: stylesOne.light}`}>
                <HeaderNModeComponent />


               
                <Outlet />
                
                    
            </div>

          
        </div>



        
    )
}

