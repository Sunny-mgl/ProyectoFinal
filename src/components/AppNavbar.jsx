import React, { useState } from 'react';
import { Container, Nav, Navbar, NavDropdown, Offcanvas } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import ProductCar from './ProductCar';

const AppNavbar = () => {



    const navigate = useNavigate()
    const logOut = () => {
        localStorage.setItem("token", "")
        navigate("/login")
    } // esto es para dejar vacio mi token 
    //el token sirve para ver si el token esta loegado

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  

    return (
        <div>
            <Navbar variant='dark' bg="primary" expand="lg" size='lg'>
                <Container>
                    <Navbar.Brand as={Link} to='/' >Home</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to='/purchases'>Purchases</Nav.Link>
                            <Nav.Link as={Link} to='/login'>Login</Nav.Link>
                             <Nav.Link onClick={logOut}>Log Out</Nav.Link>  
                            <Nav.Link onClick={handleShow}>Car</Nav.Link>
                            {/* <NavDropdown title='Car' id="basic-nav-dropdown"> {/*"Dropdown"
                                   <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">
                                    Another action
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">
                                    Separated link
                                </NavDropdown.Item>  
                            </NavDropdown> */}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
           <ProductCar show={show} handleClose={handleClose}/> 
        </div>
    );
};

export default AppNavbar;