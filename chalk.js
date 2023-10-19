const chalk = require("chalk");

// import chalk from "chalk";

console.log(chalk.red("hello"));
const validator = require("validator");
const res = validator.isEmail("shivamsprajapati37@gmail.com");
console.log(res);
console.log(res? chalk.green.inverse(res) : chalk.supportsColorStderr.inverse(res));