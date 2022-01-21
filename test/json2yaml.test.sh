#!/usr/bin/env bash
set -eu

rm -fr logs
mkdir logs
bin/json2yaml.js test/sample.json > logs/sample.yaml
diff test/sample.yaml logs/sample.yaml > /dev/null 2>&1
