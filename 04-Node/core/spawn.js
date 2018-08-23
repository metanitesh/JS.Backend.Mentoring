var spawn = require('child_process').spawn;
var cp = spawn('node', ['timeout']);

cp.stdout.on('data', function(data){
    console.log(data.toString());
})

setTimeout(function(){
    cp.stdin.write('stop');
}, 2000);
