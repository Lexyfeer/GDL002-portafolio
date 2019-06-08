import React from 'react';
import Logo from './LogoPortfolio.png';


const Navbar = () => (
    <nav>
        <img src={Logo} className="App-logo" alt="logo" />
        <ul className="navMenu">
            <li><a className="navMenuLink" to="/" >Inicio</a></li>
            <li><a className="navMenuLink" to="/Aboutme" >Acerca de mi</a></li>
            <li><a className="navMenuLink" to="/Portfolio" >Portafolio</a></li>
            <li><a className="navMenuLink" to="/Skills" >Habilidades</a></li>
            <li><a className="navMenuLink" to="/Contact" >Contacto y CV</a></li>
        </ul>
    </nav>
);

export default Navbar;