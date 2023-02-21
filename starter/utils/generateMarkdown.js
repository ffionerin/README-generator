// function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}

  ${addBadge(data.license)}

  ## Description
${data.description}

## Table of Contents
* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [Contributors](#contributors)
* [Tests](#tests)
* [License](#license)
* [Link](#link)
* [Questions](#questions)

## Installation 
${data.installation}

## Contributing 
${data.contribution}

## Tests 
${data.test}

## License

This application is covered by the ${data.license}

## Link

You can find the deployed website at ${data.link}

## Questions
If you have any questions, you can reach me:

* At my Github profile: https://github.com/${data.github}/
* Via email at ${data.email}

`;
}

module.exports = generateMarkdown;

const addBadge = licenseChoice => 
  licenseChoice == 'MIT License' ? `
  ![MIT](https://img.shields.io/badge/License-MIT-yellow.svg)
` :
  licenseChoice == 'Apache License v2.0' ? `
  ![Apache 2.0](https://img.shields.io/badge/License-Apache_2.0-blue.svg)
  ` :
  licenseChoice == 'General Public License v3.0' ? `
  ![mit](https://img.shields.io/badge/License-GPLv3-blue.svg)
  ` :
  licenseChoice == 'General Public License v2.0' ? `
  ![BSD 2-Clause](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)
  ` :
   `
No license selected
  `;