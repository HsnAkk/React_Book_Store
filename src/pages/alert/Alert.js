import { useContext } from 'react';
import { BookStoreContext } from '../../context';
import './Alert.scss';

import Fade from 'react-reveal/Fade';
import { IoMdClose } from 'react-icons/io';


function Alert() {

    const { setShowAlert, alertMessage } = useContext(BookStoreContext);

    const closeModal = (e) => {
        if (e.target.className === 'alert') {
            setShowAlert(false)
        }
    }

    return (
        <div className="alert" onClick={closeModal}>
            
            <Fade top>
                <div className = "content" >
                    <div className="content__message">
                        {alertMessage}
                    </div>
                    <div className="content__close">
                        <IoMdClose onClick={() => setShowAlert(false)} />
                    </div>
                    
                    
                </div>
            </Fade>
        </div>
    )
}

export default Alert
