ARG QEMU
ARG BASE_IMAGE=amd64/debian:stretch-slim
ARG ARCH=amd64

FROM ${BASE_IMAGE}

RUN apt-get update && \
    apt-get install -y \
    vim \
    gnupg \
    curl

RUN curl https://github.com/multiarch/qemu-user-static/releases/download/v2.9.1-1/${QEMU}.tar.gz \
  | tar -xjC /usr/bin/${QEMU}

RUN curl -sL https://deb.nodesource.com/setup_9.x | sh
RUN apt-get install -y nodejs

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install app dependencies
COPY package.json /usr/src/app/
RUN npm install

# Bundle app source
COPY . /usr/src/app

EXPOSE 3000

HEALTHCHECK --interval=10s --timeout=3s \
  CMD curl -f http://localhost:3000/metrics || exit 1

CMD [ "node", "server/index.js" ]
