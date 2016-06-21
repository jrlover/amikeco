var assert = require('chai').assert;
var expect  = require("chai").expect;
var request = require("request");

var url = "http://localhost:3000/index.html";

describe('Homepage', function() {
  describe('reachable', function () {
    it('should return status code 200', function () {
      request(url, function(error, response, body) {
        expect(response.statusCode).to.equal(200);
      });
    });
  });
});
