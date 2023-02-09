import React from 'react';
import './index.scss'
import github from '../../images/github.png'
import linkedin from '../../images/linkedin.png'
const Footer = () => {
    return (
        <div className="footer">
            <p>Thomas RADUCHA © 2022</p>
            <div className="logos">
                <a href="https://github.com/tomraducha/Projets-Des-exercices-des-tests">
                    <img src={github} alt="GitHub logo" />
                </a>
                <a href="https://www.linkedin.com/in/thomas-raducha/">
                    <img src={linkedin} alt="LinkedIn logo" />
                </a>
            </div>
        </div>
    );
}

export default Footer;
