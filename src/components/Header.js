import React from 'react';
import headshot from '../assets/images/headshot.jpeg';

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
        <nav>
            <ul>
                <a href="#aboutMeScroll" id="navAbout"><li><h3>About Me</h3></li></a>
                <a href="#myWorkScroll" id="navWork"><li><h3>My Work</h3></li></a>
                <a href="#contactMeScroll" id="navContact"><li><h3>Contact Me</h3></li></a>
            </ul>
        </nav>
    </header>
  );
};

export default Header;