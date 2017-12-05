#!/bin/bash
set -e

echo "test with Docker-compose"
docker-compose up
docker-compose down
