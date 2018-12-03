const supertest = require('supertest')
const app = require('../server/app')

const basePath = '/api/v1/articles'

describe(basePath, () => {
  test('should create a article', async () => {
    const params = {
      id: '123456',
      title: 'My Article',
      msg: "The test article's body"
    }
    const res = await supertest(app.callback()).post(basePath).send(params)
    expect(res.status).toEqual(201)
    expect(res.body).toEqual(params)
  })

  test('should get a article', async () => {
    const res = await supertest(app.callback()).get(`${basePath}/123456`)
    expect(res.status).toEqual(200)
    expect(res.body.msg).toEqual("The test article's body")
  })

  test('should update a article', async () => {
    const original = await supertest(app.callback()).get(`${basePath}/123456`)
    const newArticle = original.body
    newArticle.msg = "The new test article's body"

    const res = await supertest(app.callback()).put(`${basePath}/123456`).send(newArticle)
    expect(res.status).toEqual(200)
    expect(res.body.msg).toEqual("The new test article's body")
  })

  test('should remove a article', async () => {
    const res = await supertest(app.callback()).del(`${basePath}/123456`)
    expect(res.status).toEqual(200)
  })
})