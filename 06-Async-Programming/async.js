function fakeAjax(url, cb) {
    var fake_responses = {
        "file1": "The first text",
        "file2": "The middle text",
        "file3": "The last text"
    };
    var randomDelay = (Math.round(Math.random() * 1E4) % 8000) + 1000;

    console.log("Requesting: " + url);

    setTimeout(function () {
        cb(fake_responses[url]);
    }, randomDelay);
}

function output(text) {
    console.log(text);
}

// **************************************

function getFile(file) {
    // what do we do here?
    return new Promise(function (resolve) {
        fakeAjax(file, resolve);
    })
}

(async function () {
    var val1 = getFile('file1')
    var val2 = getFile('file2')
    var val3 = getFile('file3')

    console.log(await val1)
    console.log(await val2)
    console.log(await val3)

}());