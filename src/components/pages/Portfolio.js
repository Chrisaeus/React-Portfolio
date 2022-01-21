import React from 'react';
import Project from '../Project';
import projectList from '../../assets/documents/projectList.json';

export default function Portfolio() {
    return (
        <>
            <span className="headerPad" id="myWorkScroll"></span>
            <section className="cardSec" id="myWork">
                <aside className="sideTitle">
                    <h2>My Work</h2>
                </aside>
                <Project projectList={projectList} />
            </section>
        </>
    );
};