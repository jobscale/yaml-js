#!/usr/bin/env node
const yaml = require('js-yaml');

const logger = console;
const loader = require;
const patterns = ['^/'];
const regexp = new RegExp(patterns.join('|'));

const [,, input] = process.argv;
if (!input) throw new Error('input file require');

const obj = loader(`${regexp.test(input) ? '' : `${process.cwd()}/`}${input}`);
const output = logger.log;
const doc = yaml.dump(obj, { sortKeys: true });
output(doc);
