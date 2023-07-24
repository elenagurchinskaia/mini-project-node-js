const inquirer = require("inquirer");
const fs = require("fs");

// TODO: Create an array of questions for user input

const questions = [
  {
    type: "input",
    message: "What is your name?",
    name: "userName",
  },
  {
    type: "input",
    message: "Where is your location?",
    name: "location",
  },
  {
    type: "input",
    message: "Please enter a bio:",
    name: "bio",
  },
  {
    type: "input",
    message: "What is your LinkedIn URL?",
    name: "linkedIn",
  },
  {
    type: "input",
    message: "What is your Github URL?",
    name: "gitHub",
  },
];
