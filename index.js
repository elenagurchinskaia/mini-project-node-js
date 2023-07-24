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
function init () {
  inquirer
  .prompt(questions)
  .then((data) => {
    console.log(data)
    const markdown = templateLiteral(data)

    writeToFile (markdown)
  })
}
function writeToFile (file)
fs.writeFile("index.html", file, (err) => {
  err ? console.log(err) : console.log("Success")
})

function templateLiteral(response) {
  `Hello, ${response.name}`
}