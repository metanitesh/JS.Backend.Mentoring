var path = require('path');
console.log(path.basename(__dirname));

var test = require('./export');
console.log(test());