#!/bin/bash
set -e

echo "Updating Docker engine"
sudo service docker stop
sudo apt-cache madison docker-ce
sudo apt-get install docker-ce=17.11.0~ce-0~ubuntu
docker version

if [ "$ARCH" != "amd64" ]; then
  # prepare qemu
  docker run --rm --privileged multiarch/qemu-user-static:register --reset
  docker create --name qemu-register hypriot/qemu-register
  if [ "$ARCH" == "arm" ]; then
    docker cp qemu-register:qemu-arm qemu-arm-static
  fi
  if [ "$ARCH" == "arm64" ]; then
    docker cp qemu-register:qemu-aarch64 qemu-aarch64-static
  fi
fi

if [ "$ARCH" == "amd64" ]; then
  touch fake-qemu-amd64-static
fi


if [ -d tmp ]; then
  docker rm build
  rm -rf tmp
fi

docker build -t appsample --build-arg BASE_IMAGE=$BASE_IMAGE --build-arg QEMU=$QEMU .
docker run appsample uname -a
