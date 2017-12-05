#!/bin/bash
set -e

echo "test with Docker-compose"
docker-compose up --abort-on-container-exit
docker-compose down
