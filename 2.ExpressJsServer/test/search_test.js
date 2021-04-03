const mocha = require('mocha')
const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../src/index')

chai.use(chaiHttp);

const { describe, it } = mocha;
const expect = chai.expect;

describe('GET /search', () => {
  it('it should success to return data of array', (done) => {
    chai.request(app)
      .get('/search')
      .query({ s: 'Avenger' })
      .end((err, res) => {
        if (err) done(err)

        expect(res).to.have.status(200);
        expect(res.body.status).to.be.true;
        expect(res.body.data).to.be.an('array');
        done();
      })
  });

  it('it should send error 401 if query params is empty', (done) => {
    chai.request(app)
      .get('/search')
      .end((err, res) => {
        if (err) done(err)

        expect(res).to.have.status(401);
        expect(res.body.status).to.be.false;
        done()
      })
  })
})