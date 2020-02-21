// const apiDoc = require('./api');
// const generateMarkdownDoc = require('./generateMarkdown');
const axios = require('axios').default;
const inquirer = require("inquirer");
const fs = require('fs');

const questions = ["What is your GitHUb username?",

];


function writeToFile(fileName, data) {
}



function init() {

    inquirer
        .prompt([
            {
                type: "input",
                message: "Enter your GitHub username:",
                name: "username"
            },
            {
                type: "input",
                message: "What is the name of your repo?",
                name: "reponame"
            }
        ])

        .then(function (response) {

            const queryUrl = `https://api.github.com/users/${response.username}/repos?per_page=100`;

            axios.get(queryUrl).then(function (res) {

                const repoDetails = res.data.filter(function (res) {
                    return res.name === response.reponame;

                });
                console.log(repoDetails);
            });
        });
}
init();
