const supertest = require('supertest')
const app = require('../server/app')

describe('metrics', () => {
  test('should get correct metrics', async () => {
    const res = await supertest(app.callback()).get('/metrics')
    expect(res.status).toEqual(200)
    // expect(res.body.res).toEqual("The test article's body")
  })
})