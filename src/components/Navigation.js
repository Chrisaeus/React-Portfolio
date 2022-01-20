import React from 'react';

export default function Navigation() {
    return (
        <nav>
            <ul>
                <a href="#aboutMeScroll" id="navAbout"><li><h3>About Me</h3></li></a>
                <a href="#myWorkScroll" id="navWork"><li><h3>My Work</h3></li></a>
                <a href="#contactMeScroll" id="navContact"><li><h3>Contact Me</h3></li></a>
                <a href="#resume" id="navResume"><li><h3>Resume</h3></li></a> 
            </ul>
        </nav>
    );
}