#!/bin/bash
set -e

echo "test with Docker-compose"
docker-compose --version
docker-compose up --build
docker-compose down
