// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

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
  return `
  # Homework 09 - ReadMeCreator [![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)
  
  ## Table of Contents
  <!-- TOC -->
  - [Introduction](#introduction)
  - [Details](#details)
  - [Contact](#contact)
  <!-- /TOC -->

  ## Introduction
 The name of my project is ${data.title}.  
 Description: ${data.description}

  ## Details
  User can follow these instructions for installation:  
  ${data.install}

  Tips for using this tool:
   ${data.description}

   ## Contact
  Search my username to find my github repo:  
   ${data.github}

  My email address is:  
    ${data.email}  

`;
}

module.exports = generateMarkdown;
