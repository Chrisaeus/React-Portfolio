import React from 'react';

import gitHub from '../assets/images/GitHub-Mark-Light-120px-plus.png';

export default function Footer() {

    return (
        <footer>
            <a href=""><img src={gitHub} alt=""/></a>
            <p id="footer">
                <a href=""></a>
                &copy; Christian Sadler 2022
            </p>
        </footer>
    );
};