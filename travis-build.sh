#!/bin/bash
set -e

docker version
uname -a
echo "Updating Docker engine to latest version"
sudo service docker stop
curl -fsSL https://get.docker.com/ | sudo sh
docker version

docker build -t ffaerber/appsample --build-arg ARCH=$ARCH .
