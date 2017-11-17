#!/bin/bash
set -e

docker version
uname -a
echo "Updating Docker engine to latest version"
sudo service docker stop
curl -fsSL https://get.docker.com/ | sudo sh
docker version

if [ "$ARCH" == "amd64" ]; then
  docker build -t ffaerber/appsample --build-arg ARCH=amd64 .
fi

if [ "$ARCH" == "arm32v7" ]; then
  docker build -t ffaerber/appsample --build-arg ARCH=arm32v7 .
fi
