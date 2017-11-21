#!/bin/bash
set -e

echo "Updating Docker engine"
sudo service docker stop
curl -fsSL https://get.docker.com/ | sudo sh
docker version

if [ "$ARCH" != "amd64" ]; then
  # prepare qemu
  docker run --rm --privileged multiarch/qemu-user-static:register --reset

  docker create --name qemu-register hypriot/qemu-register

  if [ "$ARCH" == "arm64v8" ]; then
    docker cp qemu-register:qemu-aarch64 qemu-aarch64-static
  fi

  if [ "$ARCH" == "arm32v7" ]; then
    docker cp qemu-register:qemu-arm qemu-arm-static
  fi

fi

if [ -d tmp ]; then
  docker rm build
  rm -rf tmp
fi

docker build -t ffaerber/appsample:build --build-arg ARCH=$ARCH .
