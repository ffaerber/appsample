#!/bin/bash
set -e

echo "test with Docker-compose"
docker-compose up -d mongo-db
docker-compose run appsample-test node_modules/.bin/jest --forceExit
docker-compose down
