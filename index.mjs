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


