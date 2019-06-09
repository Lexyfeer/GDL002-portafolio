import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import Logo from '../assets/images/LogoPortfolio.png';


const Navbar = () => (
    <nav>
        <Link className="App-logo" to="/">
            <img className="App-logo-image" src={Logo} alt="logo" />
        </Link>
        <ul className="navMenu">
            <li><NavLink className="navMenuLink" exact to="/" >Inicio</NavLink></li>
            <li><NavLink className="navMenuLink" to="/Aboutme" >Acerca de mi</NavLink></li>
            <li><NavLink className="navMenuLink" to="/Portfolio" >Portafolio</NavLink></li>
            <li><NavLink className="navMenuLink" to="/Skills" >Habilidades</NavLink></li>
            <li><NavLink className="navMenuLink" to="/Contact" >Contacto y CV</NavLink></li>
        </ul>
    </nav>
);

export default Navbar;