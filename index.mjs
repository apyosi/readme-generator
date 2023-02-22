// inquirer documentation -  https://www.npmjs.com/package/inquirer
import inquirer from "inquirer";
import fs from "fs/promises";

let {
  title,
  description,
  installation,
  usage,
  contributing,
  tests,
  license,
  gitHubUsername,
  email,
  gitHubRepositoryName,
} = await inquirer.prompt([
  {
    type: "input",
    name: "title",
    message: "Project Title:",
    default() {
      return "README.md file generator for GitHub";
    },
  },
  {
    type: "input",
    name: "description",
    message: "Description of the project:",
    default() {
      return "Command-line application to generate README.md files from user input";
    },
  },
  {
    type: "input",
    name: "installation",
    message: "Installation instructions:",
    default() {
      return "Install node.js and clone the reopsitory";
    },
  },
  {
    type: "input",
    name: "usage",
    message: "Usage information:",
    default() {
      return "Run in cli the following command: ```node index.mjs```";
    },
  },
  {
    type: "input",
    name: "contributing",
    message: "Contributing: ",
    default() {
      return "Contributions are always welcome!";
    },
  },
  {
    type: "input",
    name: "tests",
    message: "Tests:",
    default() {
      return "To run the test, run the following command: ```npm run test```";
    },
  },
  {
    type: "list",
    name: "license",
    message: "License type:",
    choices: [
      "MIT License",
      "GNU GPL v3",
      "GNU GPL v2",
      "BSD 3-Clause",
      "BSD 2-Clause",
      "Apache 2.0",
      "Creative Commons Zero",
    ],
  },
  {
    type: "input",
    name: "email",
    message: "Email address for contact:",
    default() {
      return "email@example.com";
    },
  },
  {
    type: "input",
    name: "gitHubUsername",
    message: "GitHub username:",
    default() {
      return "apyosi";
    },
  },
  {
    type: "input",
    name: "gitHubRepositoryName",
    message: "Repository Name:",
    default() {
      return "readme-generator";
    },
  },
]);

// console.log(response);


function generateLicenseBadge(license) {
  // console.log(license);
  if (license === "MIT License") {
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
  } else if (license === "GNU GPL v3") {
    return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
  } else if (license === "GNU GPL v2") {
    return "[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)";
  } else if (license === "BSD 3-Clause") {
    return "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)";
  } else if (license === "BSD 2-Clause") {
    return "[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)";
  } else if (license === "Apache 2.0") {
    return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
  } else if (license === "Creative Commons Zero") {
    return "[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)](http://creativecommons.org/publicdomain/zero/1.0/)";
  }
}

let template = `
<div align="center">
<h1 align="center">${title}</h1>
</div>
[![https://img.shields.io/github/contributors/${gitHubUsername}/${gitHubRepositoryName}.svg?style=for-the-badge]](https://github.com/${gitHubUsername}/${gitHubRepositoryName}/graphs/contributors)
[https://img.shields.io/github/contributors/${gitHubUsername}/${gitHubRepositoryName}.svg?style=for-the-badge](https://github.com/${gitHubUsername}/${gitHubRepositoryName}/graphs/contributors)
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li><a href="#description">Description</a></li>
    <li><a href="#installation">Installation</a></li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#tests">Tests</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#questions">Questions</a></li>
  </ol>
</details>

## Description
${description}

## Installation
${installation}

## Usage
${usage}

## Contributing
${contributing}

## Tests
${tests}

## License
${generateLicenseBadge(license)}

## Questions

You can reach me for any questions on the email: ${email}<br>
and on github the repo page: [https://github.com/${gitHubUsername}/${gitHubRepositoryName}](https://github.com/${gitHubUsername}/${gitHubRepositoryName})


<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/${gitHubUsername}/${gitHubRepositoryName}.svg?style=for-the-badge
[contributors-url]: https://github.com/${gitHubUsername}/${gitHubRepositoryName}/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/${gitHubUsername}/${gitHubRepositoryName}.svg?style=for-the-badge
[forks-url]: https://github.com/${gitHubUsername}/${gitHubRepositoryName}/network/members
[stars-shield]: https://img.shields.io/github/stars/${gitHubUsername}/${gitHubRepositoryName}.svg?style=for-the-badge
[stars-url]: https://github.com/${gitHubUsername}/${gitHubRepositoryName}/stargazers
[issues-shield]: https://img.shields.io/github/issues/${gitHubUsername}/${gitHubRepositoryName}.svg?style=for-the-badge
[issues-url]: https://github.com/${gitHubUsername}/${gitHubRepositoryName}/issues
`;

console.log("The README.md is generated in the output directory!");

await fs.writeFile("./output/generated-README.md", template);

