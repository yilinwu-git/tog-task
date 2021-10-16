import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../Images/TOG_RGB_Black.png'

import { Navbar, NavDropdown, Nav, Container } from 'react-bootstrap';


const Header = () => {
    return (
        <>
            <Navbar  expand="lg" className="navigation">
                <Container>
                    <Navbar.Brand href="#home">
                        <img src={logo} style={{width: '100px'}} alt="TOG logo"/>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        
                        <NavDropdown title="Locations" id="basic-nav-dropdown">
                            {/* <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item> */}
                        </NavDropdown>

                        <NavDropdown title="Work Spaces" id="basic-nav-dropdown">
                            {/* <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item> */}
                        </NavDropdown>
                        <Nav.Link href="#meetingrooms">Meeting Rooms</Nav.Link>
                        <NavDropdown title="Events" id="basic-nav-dropdown">
                            {/* <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item> */}
                        </NavDropdown>
                        <Nav.Link href="#stories">Stories</Nav.Link>
                        <Nav.Link href="#stories">Contact</Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default Header;
