import '../css/interact.css';

const Interact = () => {
    return(
        <div className="interact" >
            <div className='user-box'>
            <aside className="register">
                <form>
                    <fieldset>
                        <legend>Register</legend>
                        <label>
                        Name:
                        <input type="text" name="name" placeholder="Enter full name"></input>
                    </label>
                    <label>
                        Email:
                        <input type="text" name="email" placeholder="Enter email"></input>
                    </label>
                    <label>
                        Mobile:
                        <input type="text" name="email" placeholder="+255 753 122 250"></input>
                    </label>
                    <label>
                        Addres:
                        <input type="text" name="email" placeholder="Country, Zip code"></input>
                    </label>
                    <button className='send-btn'>Send</button>
                    </fieldset>
                </form>
            </aside>
            <aside className="login">
                <form>
                    <fieldset>
                        <legend>Log In</legend>
                    <label>
                        Email:
                        <input type="text" name="email" placeholder="Enter email"></input>
                    </label>
                    <label>
                        Password:
                        <input type="password" name="email" placeholder="Enter email"></input>
                    </label>
                    <button className='send-btn'>Send</button>
                    </fieldset>
                </form>
            </aside>
            </div>
        </div>
    );
}

export default Interact;
