import { Link, NavLink } from 'react-router-dom';
import { Nav, Navbar } from 'react-bootstrap';

import Logo from '../assets/images/LogoPortfolio.png';
import React from 'react';

const Navigation = () => (
    <Navbar variant="dark" expand="md" sticky="top">
        <Navbar.Brand>
            <Link to="/">
                <img className="App-logo-image" src={Logo} alt="logo" />
            </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
                <Nav.Item>
                    <NavLink className="navMenuLink" exact to="/">
                        <h6>Inicio</h6>
                    </NavLink>
                </Nav.Item>
                <Nav.Item>
                    <NavLink className="navMenuLink" to="/Aboutme">
                        <h6>Acerca de mí</h6>
                    </NavLink>
                </Nav.Item>

                <Nav.Item>
                    <NavLink className="navMenuLink" to="/Portfolio">
                        <h6>Proyectos</h6>
                    </NavLink>
                </Nav.Item>

                <Nav.Item>
                    <NavLink className="navMenuLink" to="/Skills">
                        <h6>Habilidades</h6>
                    </NavLink>
                </Nav.Item>

                <Nav.Item>
                    <NavLink className="navMenuLink" to="/Contact">
                        <h6>Contacto y CV</h6>
                    </NavLink>
                </Nav.Item>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
)

export default Navigation;