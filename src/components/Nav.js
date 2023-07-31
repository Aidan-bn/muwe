import '../css/nav.css';
import menu from '../assets/menu.svg';
import { useRef, useState } from 'react';
import useRemoveOverlay from './useRemoveOverlay';

const Nav = () => {
    const [useMenu, setUseMenu] = useState(false);
    const ref = useRef();
    useRemoveOverlay(ref, useMenu, () => setUseMenu(false));

    return (
        <nav>
            <h1>muwe</h1>
            <div className='nav-div' ref={ref}>
                <img src={menu} alt="menu" className='hamburger' onClick={() => setUseMenu((prev) => !prev)}/>
                {useMenu && (
                <menu>
                    <li>Home</li>
                    <li>Service</li>
                    <li>Contact</li>
                    <li>Log In</li>
                </menu>
                )}
                <ul className='desktop-menu'>
                    <li>Home</li>
                    <li>Service</li>
                    <li>Contact</li>
                    <li>Log In</li>
                </ul>
            </div>
        </nav>
    )
}

export default Nav;
