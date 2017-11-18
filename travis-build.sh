#!/bin/bash
set -e

docker version
uname -a
echo "Updating Docker engine to latest version"
sudo service docker stop
curl -fsSL https://get.docker.com/ | sudo sh
docker version

docker run --rm --privileged multiarch/qemu-user-static:register --reset

docker build -t ffaerber/appsample --build-arg ARCH=$ARCH . --no-cache
