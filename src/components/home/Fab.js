import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCamera } from '@fortawesome/free-solid-svg-icons'
import './fab.css'

export default function Fab(){
    return(
        <div className="fab">
            <FontAwesomeIcon icon={faCamera} />
       </div>
    )
};