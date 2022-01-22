import React from 'react';

import gitHub from '../assets/images/GitHub-Mark-Light-120px-plus.png';
import linkedIn from '../assets/images/In-White-128@2x.png'

export default function Footer() {

    return (
        <footer> 
            <a href="https://github.com/Chrisaeus" target="_blank"><img src={gitHub} alt=""/></a>
            <a href="https://www.linkedin.com/in/christian-a-sadler/" target="_blank"><img src={linkedIn} alt=""/></a>
            <p id="footer">
                &copy; Christian Sadler 2022
            </p>
        </footer>
    );
};