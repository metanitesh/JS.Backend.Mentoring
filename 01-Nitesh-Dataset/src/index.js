const dataApi = require('./api/data-set.js');

const csvFilePath = 'asset/matches.csv'
const csv = require('csvtojson')

csv()
    .fromFile(csvFilePath)
    .then((jsonObj) => {
        console.log(dataApi.getMatchPlayedPerYear(jsonObj))

        /**
         * [
         * 	{a:"1", b:"2", c:"3"},
         * 	{a:"4", b:"5". c:"6"}
         * ]
         */
})