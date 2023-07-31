import '../css/contact.css';
import Interact from './Interact';
import useRemoveOvelay from './useRemoveOverlay';
import {useRef, useState} from 'react';

const Contact  = () => {
    const [openOverlay, setOpenOverlay] = useState(false);
    const ref = useRef();
    useRemoveOvelay(ref, openOverlay, () => setOpenOverlay(false));

    return (
        <div className="contact">
            <div className="contact-info">
                <aside>
                    <h1>Hello There</h1>
                    <p>
                        Welcome to our medication servise
                        we are available <span>24/7 </span>
                        for cancelling, diagnose. Subscribe now 
                        to request a service from a doctors
                    </p>
                    <ul>
                        <li onClick={() => setOpenOverlay(true)}>Subcribe</li>
                        {openOverlay && (
                            <div className='popup'>
                                <Interact />
                                <span onClick={() => setOpenOverlay(false)} className='btn-close'>Close</span>
                            </div>
                        )}
                    </ul>
                </aside>
                <form>
                    <label>
                        Name:
                        <input type="text" name="name" placeholder="Enter full name"></input>
                    </label>
                    <label>
                        Email:
                        <input type="text" name="email" placeholder="Enter email"></input>
                    </label>
                    <label>
                        Message:
                        <textarea name="message" placeholder="Enter your message" rows="8" />
                    </label>
                    <label>
                        Prescription:
                        <input type="file" name="prescription"/>
                    </label>
                    <button className='send-btn' >Send</button>
                </form>
            </div>
        </div>
    );
}

export default Contact;