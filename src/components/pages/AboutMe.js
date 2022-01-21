import React from 'react';

export default function AboutMe() {
const styleIndent = {
    textIndent: '1em' 
};

    return (
        <>
            <span className="headerPad" id="aboutMeScroll"></span> 
            <section className="cardSec" id="aboutMe">
                <aside className="sideTitle">
                    <h2>About Me</h2>
                </aside>
                <div className="cardContent">
                    <p style={styleIndent}> I'm an artist and developer from the Pacific Northwest. I'm currently residing in South King County, in the greater Seattle area, but I've lived in various locations around the Puget Sound in Washington State and Oregon's Willamette Valley. I recieved a Bachelor of Science degree in Audio & Media Design Technology from the Art Institute of Seattle in 2018.
                        <br/><br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;One of my goals as a developer is to combine my audio knowledge with my coding skills in order to create music- and audio-centered applications, plug-ins for Digital Audio Workstations, and program audio and music for video games both on consoles and mobile phones.
                    </p>
                </div>
            </section>
        </>
    );
};