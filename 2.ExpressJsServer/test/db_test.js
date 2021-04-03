const mocha = require('mocha');
const chai = require('chai');
const { accessLog } = require('../src/services');

const { describe, it } = mocha;
const expect = chai.expect;

describe('INSERT access_log', () => {
  it('it should successfully insert 1 new row', (done) => {
    accessLog.insert({
      endpoint: '/search',
      params: '{}',
      created_at: Date.now()
    }).then(res => {
      expect(res.dataValues).to.be.an('object');
      done();
    }).catch(err => {
      done(err);
    })
  })
})
