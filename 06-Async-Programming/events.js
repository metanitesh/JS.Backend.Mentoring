var events = require("events");
const EventEmitter = require('events');

class MyEmitter extends EventEmitter { }
const myEmitter = new MyEmitter();



function fakeAjax(url, cb) {
    var fake_responses = {
        "file1": "The first text",
        "file2": "The middle text",
        "file3": "The last text"
    };
    var randomDelay = (Math.round(Math.random() * 1E4) % 8000) + 1000;
    console.log("Requesting: " + url);
    setTimeout(function () {
        // cb(fake_responses[url]);
        myEmitter.emit(url, fake_responses[url]);
    }, randomDelay);
}

function output(text) {
    console.log(text);
}

// **************************************
fakeAjax('file1')
fakeAjax('file2')
fakeAjax('file3')

myEmitter.on('file1', (data) => {
    console.log(data);
});

myEmitter.on('file2', (data) => {
    console.log(data);
});


myEmitter.on('file3', (data) => {
    console.log(data);
});

