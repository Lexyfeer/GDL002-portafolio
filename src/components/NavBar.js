import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';

import Logo from '../assets/images/LogoPortfolio.png'

const Nabvar = () => {
    const [navMenuOpen, setnavMenuToggle] = useState(false)

    const handleNavMenuToggle = () => {
        setnavMenuToggle(!navMenuOpen)
    }

    const renderClasses = () => {
        let classes = 'nav-menu';

        if (navMenuOpen) {
            classes += ' active'
        }
        return classes
    }

    return (
        <nav>
            <div className="nav-logo">
                <Link to="/">
                    <img className="app-logo-image" src={Logo} alt="logo" />
                </Link>
            </div>

            <ul className={renderClasses()}>
                <li className='nav-item'>
                    <NavLink exact to='/' className='nav-link' onClick={handleNavMenuToggle}>Inicio</NavLink>
                </li>
                <li className='nav-item'>
                    <NavLink to='/Aboutme' className='nav-link' onClick={handleNavMenuToggle}>Acerca de mí</NavLink>
                </li>
                <li className='nav-item'>
                    <NavLink to='/Portfolio' className='nav-link' onClick={handleNavMenuToggle}>Proyectos</NavLink>
                </li>
                <li className='nav-item'>
                    <NavLink to='/Skills' className='nav-link' onClick={handleNavMenuToggle}>Habilidades</NavLink>
                </li>
                <li className='nav-item'>
                    <NavLink to='/Contact' className='nav-link' onClick={handleNavMenuToggle}>Contacto</NavLink>
                </li>
            </ul>

            <div className="hamburger-toggle" onClick={handleNavMenuToggle}>
                <i className={navMenuOpen ? "fas fa-times fa-lg" : "fas fa-bars fa-lg"}></i>
            </div>
        </nav>
    )
}

export default Nabvar;