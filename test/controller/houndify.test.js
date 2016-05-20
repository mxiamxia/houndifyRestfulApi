/**
 * Created by min on 5/20/16.
 */

var app = require('../../app');
var request = require('supertest')(app);
var should = require('should');

describe('test/router/houndifyController.test.js', function () {

    it('should success with parms of ?query and ?userid' , function (done) {
        request.get('/houndify?query=hi&userid=min')
        .end(function(err, res) {
            should.not.exists(err);
            res.status.should.equal(200);
            should.exist(res.body.AllResults[0].WrittenResponseLong);
            done();
        });
    });

    it('should success with only parm ?query ' , function (done) {
        request.get('/houndify?query=hi')
            .end(function(err, res) {
                should.not.exists(err);
                res.status.should.equal(200);
                should.exist(res.body.AllResults[0].WrittenResponseLong);
                done();
            });
    });

    it('should fail without ?query ' , function (done) {
        request.get('/houndify?ask=hi')
            .end(function(err, res) {
                res.statusCode.should.equal(500);
                should.not.exist(res.body.AllResults);
                done();
            });
    });

});


