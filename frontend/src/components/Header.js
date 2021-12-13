import React from 'react';
import { Navbar, Container } from 'react-bootstrap';

const navbarStyle = {
    backgroundColor: 'lightblue'
}

const Header = () => {

    return (
        <Navbar style={navbarStyle} expand="lg" variant="light">
                <Container>
                    <Navbar.Brand href="/">React Python</Navbar.Brand>    
                </Container>
        </Navbar>
    )
};

export default Header;