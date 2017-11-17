const supertest = require("supertest");
const server = require("../server/index");

const basePath = '/api/v1/articles'

describe('reading', () => {

  test("should create a article", async () => {
    const obj = { title: "myarticle", body: "The test article's body" }
    const res = await supertest(server).post(basePath).send(obj)
    expect(res.status).toEqual(201);
  })

  test("should get a article", async () => {
    const res = await supertest(server).get(`${basePath}/myarticle`)
    expect(res.status).toEqual(200);
    expect(res.body.res).toEqual("The test article's body");
  })

  test("should get correct metrics", async () => {
    const res = await supertest(server).get('/metrics')
    // expect(res.status).toEqual(200);
    console.log(res.body);
    // expect(res.body.res).toEqual("The test article's body");
  })
})
