var interval = setInterval(function(){
    process.stdout.write('Some\n\n');
}, 1000)

process.stdin.on('data', function(data){
    console.log(data);
    clearInterval(interval);
    process.exit();
})