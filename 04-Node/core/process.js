const questions = ["what is the name", "what is the hobby"];
var answer = [];

function ask(arr){
    arr.forEach(function(question){
        process.stdout.write(question)
    })
}

process.stdin.on('data', function(data){
    answer.push(data);
    console.log(data);
    process.stdout.write(data);
    process.exit();
})
