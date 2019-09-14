const request = require('supertest');
const expect = require('chai').expect;
const functions = require('../functions/search');
const {search} = functions;

describe('search', function search() {

    it('ok', function it(done) {
        const server = request(`http://pavetheway.com/api/v1`);
            server
            .post(`/search?name="Luc Somers"`)
            .expect(200)
            .end(function (error, result) {
                if (error) {
                    return done(error);
                }

                expect(result.body.result).to.deep.eq("it works");
                return done();
            });
    });

});