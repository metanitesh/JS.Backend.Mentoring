async function foo(){
    await setTimeout(function(){
        return "hello";
    }, 2000)

    console.log("yo")
    
}

console.log(foo())
    

