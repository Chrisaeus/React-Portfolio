import React from 'react';
import headshot from '../assets/images/headshot.jpeg';

import Navigation from './Navigation';

function Header({ currentPage, handlePageChange }) {
  return (
    <header>
        <div className="headerMain">
            <figure className="portraitBox">
                <img id="headShot" alt="Portrait" src={headshot} />
                <div id="nameBox">
                    <ul>
                        <li><h1>Christian</h1></li>
                        <li><h1>Sadler</h1></li>
                    </ul>
                </div>
            </figure>
        </div>
        <Navigation currentPage={currentPage} handlePageChange={handlePageChange} />
    </header>
  );
};

export default Header;