import React from 'react';

export default function Contact() {

    const formRef = React.useRef(null);
    const emailRef = React.useRef(null);
    const errorRef = React.useRef(null);

    function validateEmail(email) {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    };

    const checkEmail = () => {
        if (!validateEmail(emailRef.current.value) && emailRef.current.value != "") {
            errorRef.current.innerText = " Please enter a valid e-mail address.";
        } else {
            errorRef.current.innerText = "";
        };
    };

    const handleFormSubmit = (e) => {
            e.preventDefault();
            if (validateEmail(emailRef.current.value)) {
                formRef.current.reset();
            }
    };

    return (
        <>
            <span className="headerPad" id="contactMeScroll"></span>
            <section className="cardSec" id="contactMe">
                <aside className="sideTitle">
                    <h2>Contact Me</h2>
                </aside>
                <div className="cardContent">
                    <form ref={formRef} >
                        <label htmlFor="name"><h3>Name:</h3></label>
                        <input id="name" />
                        <br/><br/>
                        <label htmlFor="name"><h3>Email:</h3></label>
                        <input id="email" ref={emailRef} onBlur={checkEmail} />
                        <span ref={errorRef}></span>
                        <br/><br/>
                        <label htmlFor="name"><h3>Message:</h3></label>
                        <textarea id="message"/>
                        <br/><br/>
                        <button type="button" onClick={handleFormSubmit}>
                            Submit
                        </button>
                    </form>
                    {/* <h3><a href="mailto:christian.sadler@yahoo.com">christian.sadler@yahoo.com</a></h3>
                    <h3>206.271.9945</h3>
                    <h3><a href="https://github.com/Chrisaeus">GitHub</a></h3>
                    <h3><a href="https://www.linkedin.com/in/christian-sadler-436a3110b/">LinkedIn</a></h3>
                    <h3><a href="./assets/documents/ChristianSadlerResume.pdf" download>Resume</a></h3> */}
                </div>
            </section>
        </>
    );
};