import { IoIosArrowRoundBack } from "react-icons/io";


const BackButton = ({backButton}) => {


    return(
        <div>

            <button onClick={backButton}><IoIosArrowRoundBack /> Back </button>
        </div>
    )
}

export default BackButton