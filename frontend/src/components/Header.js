import React from 'react';
import { Navbar } from 'react-bootstrap';

const Header = () => {


    return (
        <Navbar bg="light" expand="lg" variant="light">
                <Navbar.Brand style={{padding: "0 0 0 15px"}} href="/">React Python</Navbar.Brand>
        </Navbar>
    )
};

export default Header;