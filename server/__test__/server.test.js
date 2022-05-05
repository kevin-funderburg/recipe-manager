const app = require('../server')
const request = require('supertest');

describe('/recipes/all', () => {
  it('returns all the recipes', async () => {
    const res = await request(app)
      .get('recipes/all')
      .expect('Content-Type', /json/)
      .end(function(err, res) {
        if (err) throw err;
      });
      
  })
})

describe('/recipes/create', () => {
  it('returns all the recipes', async () => {
    const res = await request(app)
      .post('rec')
      .expect('Content-Type', /json/)
      .end(function(err, res) {
        if (err) throw err;
      });
      
  })
})