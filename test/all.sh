#!/usr/bin/env bash
set -eu

LIST=($(find test -type f -name "*.test.sh" | sort))
COUNT=0

jtest() {
  for TEST in ${LIST[@]}
  do
    echo -n "$TEST - "
    RES=$($TEST && echo OK || echo NG)
    echo $RES
    if [[ $RES == "OK" ]]
    then
      COUNT=$(echo "$COUNT + 1" | bc)
    fi
  done
}

{
  [[ ${#LIST[@]} < 1 ]] && exit 1
  jtest
  PASS=$(echo "100 * $COUNT / ${#LIST[@]}" | bc)
  echo "ALL (${PASS}%) - pass"
  [[ "$PASS" != "100" ]] && exit 1 || echo
}
