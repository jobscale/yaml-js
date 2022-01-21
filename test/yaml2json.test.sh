#!/usr/bin/env bash
set -eu

rm -fr logs
mkdir logs
bin/yaml2json.js test/sample.yaml > logs/sample.json
diff test/sample.json logs/sample.json > /dev/null 2>&1
