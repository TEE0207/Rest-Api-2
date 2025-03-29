import styles from "./flagimagecomponent.module.css"

const FlagImageComponent = ({flagImage , flagName}) => {


    return(
        <div className={styles.flagImageContainer}>
            <img src={flagImage} alt={flagName} className={styles.flagImage}/>
        </div>
    )
}

export default FlagImageComponent