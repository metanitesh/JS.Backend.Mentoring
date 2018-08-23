var fs = require('fs');
var list = fs.readdirSync(".");

var stream = fs.createReadStream('./longFile.txt', 'UTF-8');

stream.on('data', function(chunk){
    console.log(chunk.length);
})