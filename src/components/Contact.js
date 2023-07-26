import '../css/contact.css';

const Contact  = () => {
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
                        <li>Subcribe</li>
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
                    <button className='send-btn'>Send</button>
                </form>
            </div>
        </div>
    );
}

export default Contact;