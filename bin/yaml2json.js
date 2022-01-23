#!/usr/bin/env node
const yaml = require('js-yaml');
const fs = require('fs');

const logger = console;

const [,, input] = process.argv;
if (!input) throw new Error('input file require');

const output = logger.info;
const obj = yaml.load(fs.readFileSync(input, 'utf8'));
const doc = JSON.stringify(obj, null, 2);
output(doc);
