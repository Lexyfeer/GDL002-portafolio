import React from 'react';
import iconLinkedin from '../assets/images/icon-linkedin-52.png';
import iconGithub from '../assets/images/icon-github.png';

class Footer extends React.Component {

    render() {
        return (
            <footer className="containerSocial">
                <div>
                    <p>¡Sigueme en mis redes sociales !</p>
                </div>

                <a href="https://www.linkedin.com/in/nancyrodriguezlopez/" rel="noopener noreferrer" target="_blank">
                    <label>LinkedIn</label>
                    <img className="" src={iconLinkedin} alt="linkedin" />
                </a>

                <a href="https://github.com/Lexyfeer" rel="noopener noreferrer" target="_blank">
                    <label>Github</label>
                    <img className="" src={iconGithub} alt="github" />
                </a>
            </footer>
        )
    }
}

export default Footer;