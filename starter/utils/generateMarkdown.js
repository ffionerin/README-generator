// function to generate markdown for README
function generateMarkdown(data) {return `
  # ${data.title}

## Table of Contents
* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [Contributors](#contributors)
* [Tests](#tests)
* [License](#license)
* [Link](#link)
* [Questions](#questions)

${addBadge(data.license)}

## Description
${data.description}

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

function addBadge(license) {
  switch (license) {
    case 'Apache License v2.0':
      return `![Apache badge](https://img.shields.io/badge/License-Apache%202.0-blue.svg)`;
    case 'General Public License v3.0':
      return `![GPL v3 badge](https://img.shields.io/badge/License-GPLv3-blue.svg)`;
    case 'General Public License v2.0':
      return `![GPL v2 badge](https://img.shields.io/badge/License-GPL%20v2-blue.svg)`;
    case 'MIT License':
      return `![MIT badge](https://img.shields.io/badge/License-MIT-yellow.svg)`;
    default:
      return '';
  }
}