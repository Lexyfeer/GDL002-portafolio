import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import Logo from '../assets/images/LogoPortfolio.png';
//import menuIco from '../assets/images/icon-menu-48.png';
import { Navbar, Nav } from 'react-bootstrap';

/*
const Navbar = () => (
    <Styles>
    <nav className="navbar-expand-md">
        <Link className="App-logo navbar-brand" to="/">
            <img className="App-logo-image" src={Logo} alt="logo" />
        </Link>
        <button className="btnMenuIco navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
            <img src={menuIco} alt="logo" />
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
        <div className="navMenu navbar-nav">
                <NavLink className="nav-item navMenuLink" exact to="/" >Inicio</NavLink>
                <NavLink className="nav-item navMenuLink" to="/Aboutme" >Acerca de mi</NavLink>
                <NavLink className="nav-item navMenuLink" to="/Portfolio" >Portafolio</NavLink>
                <NavLink className="nav-item navMenuLink" to="/Skills" >Habilidades</NavLink>
                <NavLink className="nav-item navMenuLink" to="/Contact" >Contacto y CV</NavLink>
            </div>
        </div>
    </nav>
    </Styles>
);
*/


const Navigation = () => (
        <Navbar variant="dark" expand="lg" fixed="top">
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
                            <h6>Portafolio</h6>
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