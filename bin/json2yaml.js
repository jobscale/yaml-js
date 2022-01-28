#!/usr/bin/env node
const yaml = require('js-yaml');

const logger = console;
const loader = require;
const patterns = ['^/'];
const regexp = new RegExp(patterns.join('|'));

const [,, input] = process.argv;
if (!input) throw new Error('input file require');

const output = logger.info;
const obj = loader(`${regexp.test(input) ? '' : `${process.cwd()}/`}${input}`);
const options = { /* sortKeys: true */ };
const doc = yaml.dump(obj, options);
const roes = doc.split('\n');
roes.length--;
output(roes.join('\n'));
