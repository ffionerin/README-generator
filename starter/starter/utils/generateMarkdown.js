// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

# Title

## Table of Contents
* [Description](#features)
* [Installation](#installation)
* [Usage](#usage)
* [Contributors](#contributors)
* [Tests](#tests)
* [License](#license)
* [Questions](#questions)


* [Questions](#questions)

// add licence badge here

## Description
${data.description}

## Installation 
${data.installation}

## Usage 
${data.usage}

## Contributing 
${data.usage}

## Tests 
${data.tests}

## License

This application is covered by the ${data.tests} licence

## Questions
If you have any questions, about you can reach me:

* At my Github profile: https://github.com/${data.gitHub}/
* Via email at ${data.email}

`;
}

module.exports = generateMarkdown;


