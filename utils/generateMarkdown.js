// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
//function renderLicenseLink(data) {


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
//function renderLicenseSection(license) {
// if
//  return
//  else
//then use it in the title of the html as: [![License](https://img.shields.io/badge/License-${data.license}%201.0-lightblue.svg)](${renderLicenseLink(data.license)})


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  console.log(data)
  var array = ['[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)',
  '[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)',
  '[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)',
  '[![License](https://img.shields.io/badge/License-BSD%202--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)'
];
switch (data.license) {
case 'Apache':
var link = array[0]
break;
case 'Boost':
var link = array[1];
console.log(link);
break;
default:
  console.log('choose appropriate license');
  break;
}


  return `
  # Homework 09 - ReadMeCreator ${link}
  
  ## Table of Contents
  <!-- TOC -->
  - [Introduction](#introduction)
  - [Description](#description)
  - [Installation](#installation)
  - [Usage Information](#Usage)
  - [Contact](#contact)
  <!-- /TOC -->

  ## Introduction
 The name of my project is ${data.title}.  
 
  ## Description  
 ${data.description}

  ## Installation  
  User can follow these instructions for installation:  
  ${data.install}

  ## Usage
  Tips for using this tool:
   ${data.usage}

   ## Contact
  Search my username to find my github repo:  
  www.github.com/${data.github}

  My email address is:  
    ${data.email}  

`;
};

module.exports = generateMarkdown;
