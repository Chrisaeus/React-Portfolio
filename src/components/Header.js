import React from 'react';
import headshot from '../assets/images/headshot.jpeg';

import Navigation from './Navigation';

function Header() {
  return (
    <header>
        <div class="headerMain">
            <figure class="portraitBox">
                <img id="headShot" alt="Portrait" src={headshot} />
                <div id="nameBox">
                    <ul>
                        <li><h1>Christian</h1></li>
                        <li><h1>Sadler</h1></li>
                    </ul>
                </div>
            </figure>
        </div>
        <Navigation />
    </header>
  );
};

export default Header;