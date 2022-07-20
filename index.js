// TODO: Include packages needed for this application

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
        name: 'repository',
        message: 'What is your repos name?',
        validate: (value) => {
            if (value) { return true } else { return 'Enter your repos name...'}
        }
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
        name: 'repository',
        message: 'What is your repos name?',
        validate: (value) => {
            if (value) { return true } else { return 'Enter your repos name...'}
        }
    },
    {
        type: 'input',
        name: 'repository',
        message: 'What is your repos name?',
        validate: (value) => {
            if (value) { return true } else { return 'Enter your repos name...'}
        }
    },





];

// TODO: Create a function to write README file
function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
function init() { }

// Function call to initialize app
init();
