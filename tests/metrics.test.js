/* global describe, test, expect, afterAll */

const supertest = require('supertest')
const server = require('../server/index')

describe('metrics', () => {
  test('should get correct metrics', async () => {
    const res = await supertest(server).get('/metrics')
    expect(res.status).toEqual(200)
    // expect(res.body.res).toEqual("The test article's body")
  })

  afterAll(() => {
    server.close()
  })
})
