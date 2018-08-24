const expect = require("chai").expect;
var getFile = require('./../callback')

describe("async-test", function(){
    it("should test fake ajax", function(done){
        
        getFile.fakeAjax('file1', function(url, text){
            expect(text).equal("The first text")
            done();
        })
    }).timeout(10000);

    it("should print result in order", function(done){
        
        getFile.makeCall(function(resultArr){
            var  expectedResult = [ 'The first text', 'The middle text', 'The last text' ];
            expect(resultArr).deep.equal(expectedResult)
            done();
        })
    }).timeout(30000);
})