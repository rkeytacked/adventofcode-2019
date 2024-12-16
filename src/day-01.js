#!/usr/bin/env node
const {log, readLines, toNumber, sum} = require("./common");

/* * * * * * * *
 * * DAY  01 * *
 * * * * * * * */

let lines = readLines('../inputs/01.txt', toNumber);

/* * * * * * * *
 * * Part #1 * *
 * * * * * * * */

function fuelRequired(mass) {
    return Math.floor(mass / 3) - 2;
}

log('solution #1:', sum(lines.map(fuelRequired)));

log('\n-----------------------------------------------------------\n');

/* * * * * * * *
 * * Part #2 * *
 * * * * * * * */

function fuelRequiredRecursive(mass) {
    let fuel = fuelRequired(mass);
    return fuel <= 0 ? 0 : fuel + fuelRequiredRecursive(fuel);
}

log('solution #2:', sum(lines.map(fuelRequiredRecursive)));