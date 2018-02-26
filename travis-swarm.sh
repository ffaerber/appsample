#!/bin/bash
set -e

curl -s -X POST https://api.travis-ci.org/repo/ffaerber%2Fswarm/requests \
   -H "Content-Type: application/json" \
   -H "Accept: application/json" \
   -H "Travis-API-Version: 3" \
   -H "Authorization: token $TRAVIS_API_TOKEN" \
   -d '{ "request": { "branch":"master"}}'
