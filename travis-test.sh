#!/bin/bash
set -e

echo "test with Docker-compose"
docker-compose up
docker-compose run test-app node_modules/.bin/jest --forceExit
docker-compose down
