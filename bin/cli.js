#!/usr/bin/env node
const lib = require("../lib/index.js");

function main() {
    const arguments = process.argv.slice(2);
    console.log(lib);
}

main();