
// function to generate markdown for README
function generateMarkdown(data) {

  // variable to hold the badge data
  const badge = addBadge(data.licenseChoices);

  // returning a string in a markdown format
  // uses template literals to do this
  return `
  # ${data.title}

  ${badge}

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

// arrow function that returns a badge depending on selected license and saves it to addBadge variable
const addBadge = licenseChoices => 
  licenseChoices == 'MIT License' ? `
  ![MIT badge](https://img.shields.io/badge/License-MIT-yellow.svg)
` :
  licenseChoices == 'Apache License v2.0' ? `
  ![Apache v2 badge](https://img.shields.io/badge/License-Apache_2.0-blue.svg)
  ` :
  licenseChoices == 'General Public License v3.0' ? `
  ![PGL v3 badge](https://img.shields.io/badge/License-GPLv3-blue.svg)
  ` :
  licenseChoices == 'General Public License v2.0' ? `
  ![GPL v2 badge](https://img.shields.io/badge/License-GPLv3-blue.svg)
  ` :
   `
No license selected
  `;
