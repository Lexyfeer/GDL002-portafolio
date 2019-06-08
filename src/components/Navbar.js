import React from 'react';
import Logo from './LogoPortfolio.png';
import { Link } from 'react-scroll';
// import { Element } from 'react-scroll';

const Navbar = () => (
    <nav>
        <img src={Logo} className="App-logo" alt="logo" />
        <ul className="navMenu">
            <li><Link smooth={true} className="navMenuLink" to="/" >Inicio</Link></li>
            <li><Link smooth={true} className="navMenuLink" to="/Aboutme" >Acerca de mi</Link></li>
            <li><Link smooth={true} className="navMenuLink" to="/Skills" >Habilidades</Link></li>
            <li><Link smooth={true} className="navMenuLink" to="/Contact" >Contacto y CV</Link></li>
        </ul>
    </nav>
);

export default Navbar;