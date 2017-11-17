# koa-on-arm
this is a Koa2 node app packet in a Docker Image running on a RaspberryPi.

#### Koa app
to run this app local.
- nvm use 7.7.2
- npm install
- npm start

#### Via Docker
- docker pull ffaerber/koa-on-arm
- docker run -d --name koa_on_arm ffaerber/koa-on-arm
- docker exec -it koa_on_arm bash

#### Smoke testing
- curl -X POST -H "Content-Type: application/json" localhost:3000/login -d '{"username": "elbuo8"}'

#### Links
- http://alexba.in/blog/2013/01/06/setting-up-lirc-on-the-raspberrypi/
- https://sendgrid.com/blog/json-web-tokens-koa-js/
- https://www.youtube.com/watch?v=RVxx2T7SPw8
- https://github.com/auth0/node-jsonwebtoken
- https://github.com/koajs/api-boilerplate/blob/master/index.js
