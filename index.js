// TODO: Include packages needed for this application

const inquirer = require("inquirer");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is your project title?',
        validate: (value) => {
            if (value) { return true } else { return 'Enter a title...' }
        },
    },
    {
        type: 'input',
        name: 'repository',
        message: 'What is your repos name?',
        validate: (value) => {
            if (value) { return true } else { return 'Enter your repos name...'}
        }
    },
    {
        type: 'input',
        name: 'description',
        message: 'What is the description?',
        validate: (value) => {
            if (value) { return true } else { return 'Enter a description...'}
        }
    },
    {
        type: 'input',
        name: 'instructions',
        message: 'What is the given instructions?',
        validate: (value) => {
            if (value) { return true } else { return 'Enter your instructions NOW...'}
        }
    },
    {
        type: 'input',
        name: 'usage_info',
        message: 'What is your usage information?',
        validate: (value) => {
            if (value) { return true } else { return 'Enter your repos name...'}
        }
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'What is your contribution guidelines?',
        validate: (value) => {
            if (value) { return true } else { return 'Enter contribution guidelines...'}
        }
    },
    {
        type: 'input',
        name: 'test',
        message: 'What is test instructions?',
        validate: (value) => {
            if (value) { return true } else { return 'Enter test instructions...'}
        }
    },
    {
        type: 'list',
        name: 'license',
        message: 'What project license?',
        choices: ["MIT", "ISC", "GNU GPLv3"],
        validate: (value) => {
            if (value) { return true } else { return 'Choose a license...'}
        }
    },
    {
        type: 'input',
        name: 'github_name',
        message: 'What is your GitHub gamertag?',
        validate: (value) => {
            if (value) { return true } else { return 'Enter your username...'}
        }
    },
    {
        type: 'input',
        name: 'github_email',
        message: 'What is email address for github?',
        validate: (value) => {
            if (value) { return true } else { return 'Enter an email...'}
        }
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {  
    fs.writeFile(fileName, data, function (err) {
        if (err) {
            console.log(err);
        } else {
            console.log('README success');
        }
    })
 };

// TODO: Create a function to initialize app
function init() {   
    inquirer.prompt(questions).then(function (data) {
        writeToFile("README.md", generateMarkdown(data));
    })
 };

// Function call to initialize app
init();
