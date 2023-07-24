const inquirer = require("inquirer");
const fs = require("fs");

// TODO: Create an array of questions for user input

const questions = [
  {
    type: "input",
    message: "What is your name?",
    name: "userName",
  },
];
