const FlagImageComponent = ({flagImage , flagName}) => {


    return(
        <div>
            <img src={flagImage} alt={flagName} />
        </div>
    )
}

export default FlagImageComponent