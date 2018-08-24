// var mod1 = require('./module1.js');

// console.log(mod1);

function boo(){
    return "boo"
}

function foo(){
    console.trace('here');
    return boo();
}


console.log(foo());


// console.log(mod1);