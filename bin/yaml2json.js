#!/usr/bin/env node
const yaml = require('js-yaml');
const fs = require('fs');

const logger = console;

const [,, input] = process.argv;
if (!input) throw new Error('input file require');

const doc = yaml.load(fs.readFileSync(input, 'utf8'));
logger.log(JSON.stringify(doc, null, 2));
