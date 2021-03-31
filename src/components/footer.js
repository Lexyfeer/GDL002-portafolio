import React from 'react';
import iconGithub from '../assets/images/github-icon-256.png';
import iconLinkedin from '../assets/images/linkedin_icon_neon1.png';

class Footer extends React.Component {

    render() {
        return (
            <footer className="containerSocial">

                <p>¡Sigueme en mis redes sociales !</p>

                <div className="footerLinks">
                    <a href="https://www.linkedin.com/in/nancyrodriguezlopez/" rel="noopener noreferrer" target="_blank">
                        <label>LinkedIn</label>
                        <img className="linkedIn" src={iconLinkedin} alt="linkedin" />
                    </a>

                    <a href="https://github.com/Lexyfeer" rel="noopener noreferrer" target="_blank">
                        <label>Github</label>
                        <img className="" src={iconGithub} alt="github" />
                    </a>
                </div>

            </footer>
        )
    }
}

export default Footer;