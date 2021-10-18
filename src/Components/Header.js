import React, {useState} from 'react';
import logo from '../assets/TOG_RGB_Black.png';
import '../styles/header.scss';
import Dropdown from './Dropdown';

const Header = () => {

    const [click, setClick] = useState(false);
    const [dropdown, setDropdown] = useState(false);
    
    const handleClick = () => setClick(!click);
    
    const closeMobileMenu = () => setClick(false);
    
    const onMouseEnter = () => {
        if(window.innerWidth < 700){
            setDropdown(false);
        } else {
            setDropdown(true);
        }
    }

    
    const onMouseLeave = () => {
        if(window.innerWidth < 700){
            setDropdown(false);
        } else {
            setDropdown(false);
        }
    }


    return (
        <>
                <nav className="navbar-container">
                    <div className="navbar-logo">
                        <img src={logo} alt="TOG LOGO" style={{width:'100px'}} />
                    </div>

                    <div className="menu-icon" onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    
                    <div className="main-nav">
                        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                            <li className="nav-item"
                                onMouseEnter={onMouseEnter}
                                onMouseLeave={onMouseLeave}
                            
                            >
                                <a href="#locations"className="nav-links" onClick={closeMobileMenu}>
                                    Locations <i className="fas fa-angle-down" />
                                </a>
                                {dropdown && <Dropdown />}
                            </li>

                            <li className="nav-item">
                                <a href="#workspaces"className="nav-links" onClick={closeMobileMenu}>
                                    Work Spaces <i className="fas fa-angle-down" />
                                </a>
                                {dropdown && <Dropdown />}
                            </li>

                            <li className="nav-item">
                                <a href="#meetingrooms"className="nav-links" onClick={closeMobileMenu}>
                                    Meeting Rooms
                                </a>
                            </li>

                            <li className="nav-item">
                                <a href="#events"className="nav-links" onClick={closeMobileMenu}>
                                    Events <i className="fas fa-angle-down" />
                                </a>
                                {dropdown && <Dropdown />}
                            </li>

                            <li className="nav-item">
                                <a href="#about"className="nav-links" onClick={closeMobileMenu}>
                                    About <i clasName="fas fa-angle-down" />
                                </a>
                                {dropdown && <Dropdown />}
                            </li>

                            <li className="nav-item">
                                <a href="#stories"className="nav-links" onClick={closeMobileMenu}>
                                    Stories
                                </a>
                            </li>

                        </ul>
                    </div>

                    <div className="contact-link">Contact</div>
                    <div className="btn-language"><button>EN<span></span><i class="fas fa-angle-down" /></button></div>
                </nav>
        </>
    )
}

export default Header;
