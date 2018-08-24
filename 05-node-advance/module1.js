const fs = require('fs');




async function foo(){
    try{
        var val = await fs.readFile('module2.js');
        console.log(val);
        console.log("or here");
    }catch(err){
        console.log("here");
        console.log(err);
    }
   
}

foo();