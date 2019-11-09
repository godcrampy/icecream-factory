#!/usr/bin/env node

const [, , ...args] = process.argv;

require("../index")(args);
