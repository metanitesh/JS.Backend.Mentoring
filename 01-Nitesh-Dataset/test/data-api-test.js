const expect = require("chai").expect;
const datasetApi = require("./../src/api/data-set.js");

describe("data-set api", function () {
    it("should give the match played per year", function () {
        var matchData = [{
            id: '45',
            season: '2017',
        },{
            id: '48',
            season: '2018'
        },{
            id: '47',
            season: '2017',
        }]

        var result = datasetApi.getMatchPlayedPerYear(matchData)

        var expectedResult = {
            '2018': 1,
            '2017': 2
        }

        expect(result).deep.equal(expectedResult);
    })
})