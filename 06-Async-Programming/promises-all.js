function fakeAjax(url,cb) {
	var fake_responses = {
		"file1": "The first text",
		"file2": "The middle text",
		"file3": "The last text"
	};
	var randomDelay = (Math.round(Math.random() * 1E4) % 8000) + 1000;

	console.log("Requesting: " + url);

	setTimeout(function(){
        cb(fake_responses[url]);
	},randomDelay);
}

function output(text) {
	console.log(text);
}

// **************************************

function getFile(file) {
    // what do we do here?
   return new Promise(function(resolve){
        fakeAjax(file,resolve);
   })
}

Promise.all([getFile('file1'), getFile('file2'), getFile('file3')]).then(function(val){
    console.log(val);
})