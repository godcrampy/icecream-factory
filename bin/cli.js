#! /usr/bin/env node

const [, , ...args] = process.argv;

console.log(require("../index")(`${args}`));
