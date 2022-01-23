# Christian Sadler's Portfolio in ReactJS

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT) [![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-2.1-4baaaa.svg)](https://www.contributor-covenant.org/version/2/1/code_of_conduct/)

## Description

This is the ReactJS version of my developer portfolio. It contains a recent(ish) photo, and navigation to reach a list of featured projects, a contact form, and a page listing my skills, known technologies, and a link to download my resume. Icons that link to my GitHub and LinkedIn profiles are located in a static footer that sticks to the bottom of the page.

I used my personal developer portfolio as an exercise in transposing a site mainly composed of one HTML file into React. This was useful for learning the differences in what HTML and regular JavaScript allow vs what React is able to use when building a website or app.

The main change that was made between the old profile and the new one is the navigation rendering separate components as opposed to scrolling to the corresponding section on the page. Using consistent semantic HTML tags in the original profile made transferring it into ReactJS relatively simple.


---

## Table of Contents

1. [Installation](#installation)
2. [Usage](#usage)
3. [Contributing](#contributing)
4. [Tests](#tests)
5. [License](#license)
6. [Questions](#questions)

---

## Installation

1. `npm install` to install dependencies

2. `npm start` to run locally

3. Navigate to localhost:3000 to view profile


---

## Usage

The profile page opens on the About Me section. Click the nav buttons in the header to navigate around the site.

About Me: Short bio about myself that I may and probably will update in the future.

My Work: Portfolio section with a list of cards representing featured projects. Each project card shows the project title and has a GitHub icon in the corner that links to its GitHub repo. The main body of the card links to the deployed application (or also to the GitHub repo in the case of undeployed projects).

Contact Me: A contact form with input sections for name, email, and a message (all required). --This form doesn't function as of Jan. 2022. Email me at christian.sadler@yahoo.com if you need to contact me.--

Resume: This section shows a list of developer proficiencies and contains a link to download my resume. Everything in this section will continue to be updated.


---

## Contributing

Any contributions that conform to the [Contributor Covenant Code of Conduct](https://www.contributor-covenant.org/version/2/1/code_of_conduct/) are welcome!


---

## Tests

Although the functionality of the working parts of this site have been meticulously tested, no actual Node-based tests for the *portfolio* are included in this repo. Tests for the contact form may be included at a later time. Note: the repository does contain tests that come with the create-react-app template and can be ignored for the purposes of using this portfolio template or viewing my portfolio locally.


---

## License

MIT License

Copyright &copy; 2022 Christian Sadler

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

---

## Questions

If you have questions, contact me on [GitHub](https://github.com/Chrisaeus) or send me an e-mail at <christian.sadler@yahoo.com>.