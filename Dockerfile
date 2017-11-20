ARG ARCH=amd64
FROM ${ARCH}/debian:stretch-slim
COPY tmp/qemu-arm-static /usr/bin/qemu-arm-static

RUN apt-get update && \
    apt-get install -y \
    vim \
    gnupg \
    curl

RUN curl -sL https://deb.nodesource.com/setup_8.x | sh
RUN apt-get install -y nodejs

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install app dependencies
COPY package.json /usr/src/app/
RUN npm install

# Bundle app source
COPY . /usr/src/app

EXPOSE 3000

CMD [ "node", "server/index.js" ]
