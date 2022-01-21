import React from 'react';

export default function Navigation({ currentPage, handlePageChange }) {
    return (
        <nav>
            <ul>
                <a href="#aboutMe" id="navAbout"
                    onClick={() => handlePageChange('AboutMe')}
                    className={currentPage === 'AboutMe' ? 'currentPage' : ''}
                ><li><h3>About Me</h3></li></a>
                <a href="#portfolio" id="navWork"
                    onClick={() => handlePageChange('Portfolio')}
                    className={currentPage === 'Portfolio' ? 'currentPage' : ''}
                ><li><h3>My Work</h3></li></a>
                <a href="#contact" id="navContact"
                    onClick={() => handlePageChange('Contact')}
                    className={currentPage === 'Contact' ? 'currentPage' : ''}
                ><li><h3>Contact Me</h3></li></a>
                <a href="#resume" id="navResume"
                    onClick={() => handlePageChange('Resume')}
                    className={currentPage === 'Resume' ? 'currentPage' : ''}
                ><li><h3>Resume</h3></li></a> 
            </ul>
        </nav>
    );
}