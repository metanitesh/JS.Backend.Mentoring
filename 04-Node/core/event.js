const events = require('events');
const emitter = new events.EventEmitter();

emitter.on('customEvent', function(message, status){
    console.log(message, status);
})

emitter.emit('customEvent', "hello", 200);
