const supertest = require('supertest')
const app = require('../server/app')

const basePath = '/api/v1/articles'

describe(basePath, () => {
  test('should create a article', async () => {
    const article1 = {
      id: '123456',
      title: 'My Article',
      msg: "The test article's body"
    }
    const article2 = {
      id: '654321',
      title: 'My second Article',
      msg: "The second article's body"
    }
    const res1 = await supertest(app.callback()).post(basePath).send(article1)
    expect(res1.status).toEqual(201)
    expect(res1.body).toEqual(article1)

    const res2 = await supertest(app.callback()).post(basePath).send(article2)
    expect(res2.status).toEqual(201)
    expect(res2.body).toEqual(article2)
  })

  test('should get all articles', async () => {
    const res = await supertest(app.callback()).get(`${basePath}`)
    expect(res.status).toEqual(200)
    expect(Object.keys(res.body).length).toBe(2)
  })

  test('should get a article', async () => {
    const res = await supertest(app.callback()).get(`${basePath}/123456`)
    expect(res.status).toEqual(200)
    expect(res.body.msg).toEqual("The test article's body")
  })

  test('should update a article', async () => {
    const original = await supertest(app.callback()).get(`${basePath}/654321`)
    const newArticle = original.body
    newArticle.msg = "The updated second article's body"

    const res = await supertest(app.callback()).put(`${basePath}/654321`).send(newArticle)
    expect(res.status).toEqual(200)
    expect(res.body.msg).toEqual("The updated second article's body")
  })

  test('should remove a article', async () => {
    const res1 = await supertest(app.callback()).del(`${basePath}/123456`)
    expect(res1.status).toEqual(200)

    const res2 = await supertest(app.callback()).get(`${basePath}`)
    expect(res2.status).toEqual(200)
    expect(Object.keys(res2.body).length).toBe(1)
  })
})