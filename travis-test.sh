#!/bin/bash
set -e

echo "test with Docker-compose"

sudo rm /usr/local/bin/docker-compose
curl -L https://github.com/docker/compose/releases/download/1.4.2/docker-compose-`uname -s`-`uname -m` > docker-compose
chmod +x docker-compose
sudo mv docker-compose /usr/local/bin

docker-compose --version
docker-compose up --build
docker-compose down
