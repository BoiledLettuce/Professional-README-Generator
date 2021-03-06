// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}
  ![License Badge](https://img.shields.io/github/license/${data.github}/${data.repository})

  ## Description

  ${data.description}

  ## Table of Contents

  * [Installation](#installation)
  * [Usage](#usage)
  * [Contribution](#contribution)
  * [Tests](#tests)
  * [Questions](#questions)
  * [License](#license)
  
  ## Installation

  ${data.instructions}

  ## Usage

  ${data.usage_info}

  ## Contribution

  ${data.contribution}

  ## Tests

  ${data.testerino}

  ## Questions

  * Take a look at my [Github profile](https://github.com/${data.github})

  * If you would like to contact me, [send an email](mailto:${data.email}).

  ## License

  Copyright (c) [${data.github}](https://github.com/${data.github}). All rights reserved.

  Licensed under the ${data.license} license.

  
`;
}

module.exports = generateMarkdown;
