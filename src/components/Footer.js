import React from 'react';

const Footer = () => {
    return (
        <div className='footer-wrapper'>
            <ul className='contact-list'>
                <li>
                    <h4>Call</h4>
                    <p>07480 778994</p>
                </li>
                <li>
                    <h4>Email</h4>
                    <p>johnny_95@hotmail.co.uk</p>
                </li>
            </ul>
            <div className='social-icon-container'>
                <div className='company-container'>
                    <p>Innovating one project at a time!</p>
                </div>
                <div className='social-container'>
                    {/* GitHub and LinkedIn Icons with links  */}
                </div>
            </div>

        </div>
    )
};

export default Footer;
