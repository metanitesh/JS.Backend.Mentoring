var add= function(resolve, reject){
    try{
        throw "error"
    }catch(e){
        reject(e);
    }
    
}

var err = function(){
    console.log(err)
}

var p = new Promise(function(resolve, reject){
    add(resolve, reject);
    
})

p.then(function(val){
    console.log(val)
}).catch(function(err){
    console.log(err);
})