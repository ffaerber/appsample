/* global describe, test, expect, afterAll */
const supertest = require('supertest')
const server = require('../server/index')

const basePath = '/api/v1/articles'

describe('reading', () => {
  test('should create a article', async () => {
    // curl -X POST -H 'Content-Type: application/json' -d '{"title":"myarticle","body":"ssss"}' https://appsample.ffaerber.com/api/v1/articles
    const obj = { _id: 123456, title: 'myarticle', msg: "The test article's body" }
    const res = await supertest(server).post(basePath).send(obj)
    expect(res.status).toEqual(201)
    expect(res.body.msg).toContain(obj.msg)
  })

  test('should get a article', async () => {
    const res = await supertest(server).get(`${basePath}/123456`)
    expect(res.status).toEqual(200)
    expect(res.body.msg).toEqual("The test article's bodys")
  })

  test('should update a article', async () => {
    const obj = { title: 'myNewarticle', msg: "The new test article's body" }
    const res = await supertest(server).put(`${basePath}/123456`).send(obj)
    expect(res.status).toEqual(200)
    expect(res.body.msg).toEqual("The new test article's body")
  })

  test('should remove a article', async () => {
    const res = await supertest(server).del(`${basePath}/123456`)
    expect(res.status).toEqual(200)
  })

  afterAll(() => {
    server.close()
  })
})
