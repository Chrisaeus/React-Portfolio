import React from 'react';
import ChrisianSadlerResume from '../../assets/documents/ChristianSadlerResume.pdf';
export default function Resume() {
    return (
        <>
            <span className="headerPad"></span>
            <section className="cardSec" id="resume">
                <aside className="sideTitle">
                    <h2>Resume</h2>
                </aside>
                <div className="cardContent">
                
                    <table>
                        <thead>
                            <tr><td><h1>Skills:</h1></td></tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><h2>HTML5</h2></td>
                                <td><h2>CSS</h2></td>
                                <td><h2>JavaScript</h2></td>
                                <td><h2>jQuery</h2></td>
                                <td><h2>Bootstrap</h2></td>
                            </tr>
                            <tr>
                                <td><h2>NodeJS</h2></td>
                                <td><h2>Express</h2></td>
                                <td><h2>MySQL</h2></td>
                                <td><h2>MongoDB</h2></td>
                                <td><h2>GraphQL</h2></td>
                            </tr>
                            <tr>
                                <td><h2>Mongoose</h2></td>
                                <td><h2>React</h2></td>
                                <td><h2>Sequelize</h2></td>
                                <td><h2>Handlebars</h2></td>
                                <td><h2>Apollo</h2></td>
                            </tr>
                        </tbody>
                    </table>
                    <h2><a href={ChrisianSadlerResume} download>Click here to download my resume</a></h2>
                </div>
            </section>
        </>
    );
};