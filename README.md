[ ![appsample](https://travis-ci.org/ffaerber/appsample.svg?branch=master)](https://travis-ci.org/ffaerber/appsample)

# appsample

this is a example api application for testing and learning.

- docker arm https://www.youtube.com/watch?v=nrBYUw1Pz5I
- docker CI https://blog.hypriot.com/post/setup-simple-ci-pipeline-for-arm-images/
- testing https://www.valentinog.com/blog/testing-api-koa-jest/
- test api |
- create `curl -X POST -H 'Content-Type: application/json' -d '{"id":"123","title":"test","body":"my Article"}' http://localhost:3000/api/v1/articles`
- update `curl -X PUT -H 'Content-Type: application/json' -d '{"id":"123","title":"test","body":"my New Article"}' http://localhost:3000/api/v1/articles/123`
- show `curl http://localhost:3000/api/v1/articles/123`
- delete `curl -X "DELETE" http://localhost:3000/api/v1/articles/123`
