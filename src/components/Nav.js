import '../css/nav.css';
import menu from '../assets/menu.svg';

const Nav = () => {
    return (
        <nav>
            <h1>muwe</h1>
            <menu>
                <li>
                    <img src={menu} alt="menu" className='hamburger'/>
                </li>
            </menu>
        </nav>
    )
}

export default Nav;
