const expect = require('chai').expect
const dataSet = require('./../src/api/data-set')

describe('data-set', function(){
    it('should get match played per year', function(){

        var inputData = [{
            season: 2016        
        }, {
            season: 2017
        },{
            season: 2016        
        }]

        var expectResult = {
            2016: 2,
            2017:1
        }

        console.time("getMatchedPlayed")
        var result = dataSet.getMatchPlayedPerYear(inputData);
        console.timeEnd("getMatchedPlayed")

        expect(result).deep.equal(expectResult);
    })
})

// const expect = require("chai").expect;
// const datasetApi = require("./../src/api/data-set.js");

// describe("data-set api", function () {
//     it("should give the match played per year", function () {
//         var matchData = [{
//             id: '45',
//             season: '2017',
//         },{
//             id: '48',
//             season: '2018'
//         },{
//             id: '47',
//             season: '2017',
//         }]

//         var result = datasetApi.getMatchPlayedPerYear(matchData)

//         var expectedResult = {
//             '2018': 1,
//             '2017': 2
//         }

//         expect(result).deep.equal(expectedResult);
//     })
// })