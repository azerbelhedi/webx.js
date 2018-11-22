#!/usr/bin/env node

const inquirer = require("inquirer");
const chalk = require("chalk");
const figlet = require("figlet");
const shell = require("shelljs");

const init = () => {
  console.log(
    figlet.textSync("WebX", {
      font: "doom",
      horizontalLayout: "default",
      verticalLayout: "default"
    })
  );
};

const askQuestions = () => {
  const questions = [
    {
      name: "FOLDERNAME",
      type: "input",
      message: "What is the name of the folder?"
    }
  ];
  return inquirer.prompt(questions);
};

const createFolder = foldername => {
  const folderPath = `${process.cwd()}/${foldername}`;
  shell.mkdir(folderPath);
  return folderPath;
};

const success = folderPath => {
  console.log(
    chalk.white.bgGreen.bold(`Done! Folder created at ${folderPath}`)
  );
};

const run = async () => {
  // show script introduction
  init();

  // ask questions
  const answer = await askQuestions();
  const FOLDERNAME = answer.FOLDERNAME;

  // create the folder
  const folderPath = createFolder(FOLDERNAME);
  // show success message
  success(folderPath);
};

run();
