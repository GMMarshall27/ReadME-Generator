// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license){
    case 'MIT':
      return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]";
      
    case 'APACHE 2.0':
      return "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)]";
      
    case 'GPL 3.0':
      return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)]";
      
    case 'BSD 3':
      return "[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)]";
      
      case 'None':
        return "";
        
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license){
    case 'MIT':
      return "(https://opensource.org/licenses/MIT)";
      
    case 'APACHE 2.0':
      return "(https://opensource.org/licenses/Apache-2.0)";
      
    case 'GPL 3.0':
      return "(https://www.gnu.org/licenses/gpl-3.0)";
      
    case 'BSD 3':
      return "(https://opensource.org/licenses/BSD-3-Clause)";
      
      case 'None':
        return "";
        
}
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  switch (license){
    case 'MIT':
      return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
      
    case 'APACHE 2.0':
      return "(https:[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)//opensource.org/licenses/Apache-2.0)";
      
    case 'GPL 3.0':
      return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
      
    case 'BSD 3':
      return "[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)";
      
      case 'None':
        return "";
        
}
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
  return `# ${answers.title}

  ${renderLicenseBadge(answers.license)}${renderLicenseLink(answers.license)}

  ##Description

  ${answers.description}

  ##Table of Contents

  -[Installation](#installation)
  -[Usage](#usage)
  -[Contributing](#contributing)
  -[License](#license)
  -[Tests](#tests)
  -[Questions](#questions)

  ##Installation

  ${answers.installation}

  <a href="#installation></a>

  ##Usage

  ${answers.usage}

  <a href="#usage" ></a>

  ## Contributing

  ${answers.contributing}

  <a href="#contributing></a>

  ##License

  ${renderLicenseSection(answers.license)}

  <a href="#license"></a>

  ##Tests

  ${answers.tests}

  <a href="#tests"></a>

  ##Questions
<a href="#questions"></a>

  For any questions, please reach out to me at:

  GitHub: [${answers.username}](https://github.com/${answers.username})

  Email: ${answers.email}
`;
}

module.exports = generateMarkdown;
