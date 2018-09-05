const dataApi = require('./api/data-set.js');

const csvFilePath = 'asset/matches.csv'
const csv = require('csvtojson')

csv()
    .fromFile(csvFilePath)
    .then((jsonObj) => {
        // console.log(jsonObj);
        // 
        
        var n = 1000;
        var arr = [];
        console.time("n")
        for(var i=0; i<n; i++){
            arr.push(i)
        }
        console.time("n")


        var n = 1000*100;
        var arr = [];
        console.time("n*100")
        for(var i=0; i<n; i++){
            arr.push(i)
        }
        console.time("n*100")




    
        /**
         * [
         * 	{a:"1", b:"2", c:"3"},
         * 	{a:"4", b:"5". c:"6"}
         * ]
         */
})