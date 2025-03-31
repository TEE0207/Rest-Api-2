import { NavLink } from "react-router"
import PropTypes from "prop-types";
import styles from "./bordercomponent.module.css"

const Borders = ({flag , flagName , countryName , theLink}) => {

       
    

    return(
        
           

            <div className={styles.detailedBorderContainer}>
                <div className={styles.flagImageContainer}>
                    <img src={flag} alt={flagName}  className={styles.flagContainer}/>
                </div>

                <div className={styles.countryNameContainer}>
                   <p>{countryName}</p>
                </div>

                <div className={styles.linkContainer}>
                    <NavLink to={theLink.to}>{theLink.text}</NavLink>

                </div>

            </div>


        
    )
}

Borders.propTypes = {
    flag: PropTypes.string.isRequired,
    flagName: PropTypes.string.isRequired,
    countryName: PropTypes.string.isRequired,
    theLink: PropTypes.shape({
      to: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    }).isRequired,
  };

export default Borders