import React, {useState} from 'react';
import logo from '../assets/TOG_RGB_Black.png';
import '../styles/header.scss';


const Header = () => {

    // declare state variable of click, initialse with false
    const [click, setClick] = useState(false);

    // toggle click function, to show or not show slide in navbar in mobile view
    const handleClick = () => setClick(!click);
    

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
                            <li className="nav-item">
                                <a href="#locations"className="nav-links" >
                                    Locations <i className="fas fa-angle-down" />
                                </a>
                            </li>

                            <li className="nav-item">
                                <a href="#workspaces" className="nav-links" >
                                    Work Spaces <i className="fas fa-angle-down" />
                                </a>
                            </li>

                            <li className="nav-item">
                                <a href="#meetingrooms" className="nav-links">
                                    Meeting Rooms
                                </a>
                            </li>

                            <li className="nav-item">
                                <a href="#events" className="nav-links" >
                                    Events <i className="fas fa-angle-down" />
                                </a>
                            </li>

                            <li className="nav-item">
                                <a href="#about" className="nav-links" >
                                    About <i className="fas fa-angle-down" />
                                </a>
                            </li>

                            <li className="nav-item">
                                <a href="#stories"className="nav-links">
                                    Stories
                                </a>
                            </li>

                        </ul>
                    </div>

                    <div className="contact-link">Contact</div>
                    <div className="btn-language"><button>EN<span></span><i className="fas fa-angle-down" /></button></div>
                </nav>
        </>
    )
}

export default Header;
