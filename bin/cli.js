#!/usr/bin/env node
const lib = require("../lib/index.js");

function main() {
    const arguments = process.argv.slice(2);
    const command = lib.commands[arguments[0]];

    if (command == undefined) return;
    arguments.shift();
    command.init(arguments);
}

main();