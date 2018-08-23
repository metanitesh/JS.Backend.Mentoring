const exec = require('child_process').exec;

exec('touch test.html', function(err, stdout){

    if(err){
        throw err;
    }

    console.log(stdout);

})