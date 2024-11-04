import React from 'react';
import PropTypes from 'prop-types';
import gitHubIcon from '../images/gitHub.svg';
import emailIcon from '../images/email.svg';
import devIcon from '../images/dev.svg';
import instagramIcon from '../images/instagram.svg';
import linkedInIcon from '../images/linkedIn.svg';
import mediumIcon from '../images/medium.svg';
import twitterIcon from '../images/twitter.svg';
import youTubeIcon from '../images/youTube.svg';

function Footer(props) {
    const {
        devDotTo,
        email,
        gitHub,
        instagram,
        linkedIn,
        medium,
        name,
        primaryColor,
        twitter,
        youTube,
    } = props;

    return (
        <footer style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '2rem',
            padding: '4rem 0',
            backgroundColor: primaryColor || '#333',
            color: '#fff',
            textAlign: 'center',
        }}>
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                gap: '2rem',
            }}>
                {email && (
                    <a href={`mailto:${email}`} target="_blank" rel="noopener noreferrer">
                        <img src={emailIcon} alt="Email" className="socialIcon" style={{ width: '30px', transition: 'transform 0.3s' }} onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.1)'} onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'} />
                    </a>
                )}
                {devDotTo && (
                    <a href={devDotTo} target="_blank" rel="noopener noreferrer">
                        <img src={devIcon} alt="Dev.to" className="socialIcon" style={{ width: '30px', transition: 'transform 0.3s' }} onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.1)'} onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'} />
                    </a>
                )}
                {gitHub && (
                    <a href={gitHub} target="_blank" rel="noopener noreferrer">
                        <img src={gitHubIcon} alt="GitHub" className="socialIcon" style={{ width: '30px', transition: 'transform 0.3s' }} onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.1)'} onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'} />
                    </a>
                )}
                {instagram && (
                    <a href={instagram} target="_blank" rel="noopener noreferrer">
                        <img src={instagramIcon} alt="Instagram" className="socialIcon" style={{ width: '30px', transition: 'transform 0.3s' }} onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.1)'} onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'} />
                    </a>
                )}
                {linkedIn && (
                    <a href={linkedIn} target="_blank" rel="noopener noreferrer">
                        <img src={linkedInIcon} alt="LinkedIn" className="socialIcon" style={{ width: '30px', transition: 'transform 0.3s' }} onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.1)'} onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'} />
                    </a>
                )}
                {medium && (
                    <a href={medium} target="_blank" rel="noopener noreferrer">
                        <img src={mediumIcon} alt="Medium" className="socialIcon" style={{ width: '30px', transition: 'transform 0.3s' }} onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.1)'} onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'} />
                    </a>
                )}
                {twitter && (
                    <a href={twitter} target="_blank" rel="noopener noreferrer">
                        <img src={twitterIcon} alt="Twitter" className="socialIcon" style={{ width: '30px', transition: 'transform 0.3s' }} onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.1)'} onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'} />
                    </a>
                )}
                {youTube && (
                    <a href={youTube} target="_blank" rel="noopener noreferrer">
                        <img src={youTubeIcon} alt="YouTube" className="socialIcon" style={{ width: '30px', transition: 'transform 0.3s' }} onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.1)'} onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'} />
                    </a>
                )}
            </div>
            <p style={{ margin: '0', fontSize: '14px', opacity: 0.7 }}>
                Created by <strong>{name}</strong>
            </p>
        </footer>
    );
}

Footer.defaultProps = {
    name: '',
    primaryColor: '#333',
};

Footer.propTypes = {
    devDotTo: PropTypes.string,
    email: PropTypes.string,
    gitHub: PropTypes.string,
    instagram: PropTypes.string,
    linkedIn: PropTypes.string,
    medium: PropTypes.string,
    name: PropTypes.string,
    primaryColor: PropTypes.string,
    twitter: PropTypes.string,
    youTube: PropTypes.string,
};

export default Footer;
