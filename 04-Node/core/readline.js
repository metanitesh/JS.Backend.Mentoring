const readline = require('readline');
const rl = readline.createInterface(process.stdin, process.stdout);

rl.question('what is the name', function(answer){
    rl.setPrompt(answer);
    rl.prompt();

    rl.on('line', function(data){
        rl.setPrompt(`saying ${data}`)
        rl.prompt()
        process.exit();
    })
})