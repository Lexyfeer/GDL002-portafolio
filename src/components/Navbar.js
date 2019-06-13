import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import Logo from '../assets/images/LogoPortfolio.png';
import menuIco from '../assets/images/icon-menu-48.png';


const Navbar = () => (
    <nav className="navbar-expand-lg">
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
);

export default Navbar;