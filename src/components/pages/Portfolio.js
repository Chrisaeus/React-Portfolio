import React from 'react';

export default function Portfolio() {
    return (
        <>
            <span className="headerPad" id="myWorkScroll"></span>
            <section className="cardSec" id="myWork">
                <aside className="sideTitle">
                    <h2>My Work</h2>
                </aside>
                <div id="workList" className="cardContent">
                    <a href="https://allout004.github.io/GroupProject1/" id="interActor" className="card" title="InterActor">
                        <object className="gitHub"><a href="https://github.com/Allout004/GroupProject1"></a></object>
                        <span className="cardTitle">InterActor</span>
                    </a>
                    {/* <a href="https://github.com/Chrisaeus/README-Generator" title="README Generator" id="readmeGenerator" class="card">
                        <object class="gitHub"><a href="https://github.com/Chrisaeus/README-Generator"></a></object>
                        <span class="cardTitle">README Generator</span>
                    </a>
                    <a href="https://github.com/Chrisaeus/E-Commerce-Back-End" title="E-Commerce Back End" id="eCommerceBackEnd" class="card">
                        <object class="gitHub"><a href="https://github.com/Chrisaeus/E-Commerce-Back-End"></a></object>
                        <span class="cardTitle">E-Commerce Back End</span>
                    </a>
                    <a href="https://powerful-bastion-50177.herokuapp.com/" id="noteTaker" title="Note Taker" class="card">
                        <object class="gitHub"><a href="https://github.com/Chrisaeus/Note-Taker"></a></object>
                        <span class="cardTitle">Note Taker</span>
                    </a>
                    <a href="https://chrisaeus.github.io/Weather-Dashboard/" id="weatherDashboard" title="Weather Dashboard" class="card">
                        <object class="gitHub"><a href="https://github.com/Chrisaeus/Weather-Dashboard"></a></object>
                        <span class="cardTitle">Weather Dashboard</span>
                    </a> */}
                </div>
            </section>
        </>
    );
};