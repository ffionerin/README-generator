// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

## Table of Contents
* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [Contributors](#contributors)
* [Tests](#tests)
* [License](#license)
* [Link](#link)
* [Questions](#questions)

// add licence badge here

## Description
${data.description}

## Installation 
${data.installation}

## Contributing 
${data.contribution}

## Tests 
${data.test}

## License

This application is covered by the ${data.licence}

## Link

You can find the deployed website at ${data.link}

## Questions
If you have any questions, you can reach me:

* At my Github profile: https://github.com/${data.github}/
* Via email at ${data.email}

`;
}

module.exports = generateMarkdown;


