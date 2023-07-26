import '../css/header.css';
const Header = () => {
    return (
        <div className="header">
            <h1>Doctor for all</h1>
            <p>
                The doctor you can trust for all your suffering,
                cancelling, diagnosis, and medication services available 
                online.
            </p>
            <button className='btn-header'>Try Us</button>
        </div>
    );
}

export default Header;