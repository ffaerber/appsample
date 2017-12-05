#!/bin/bash
set -e


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
  # this is a hack to fake a qemu-amd64-static
  touch "$QEMU"
fi


if [ -d tmp ]; then
  docker rm build
  rm -rf tmp
fi

docker build -t appsample \
  --build-arg BASE_IMAGE=$BASE_IMAGE \
  --build-arg QEMU=$QEMU \
  --build-arg NPM_OPTIONS=--production \
  .

docker build -t appsample-test \
  --build-arg BASE_IMAGE=$BASE_IMAGE \
  --build-arg QEMU=$QEMU \
  .

docker run appsample uname -a
