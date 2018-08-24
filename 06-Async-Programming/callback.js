function fakeAjax(url,cb) {
	var fake_responses = {
		"file1": "The first text",
		"file2": "The middle text",
		"file3": "The last text"
	};
	var randomDelay = (Math.round(Math.random() * 1E4) % 8000) + 1000;

	console.log("Requesting: " + url);

	setTimeout(function(){
		cb(url, fake_responses[url]);
	},randomDelay);
}

function output(text) {
	console.log(text);
}

// **************************************
// The old-n-busted callback way

var resultObj = {
    file1: {
        text: '',
        done: false
    },
    file2: {
        text: '',
        done: false
    },
    file3: {
        text: '',
        done: false
    }
}

function getFile(file) {
	fakeAjax(file,function(url, val){
        
        resultObj[url].text = val;
        

        if(resultObj['file1']['text'] !== '' && (!resultObj['file1']['done'])){
            
            output(resultObj.file1.text)
            resultObj['file1']['done'] = true;
            
        }

        if(!resultObj['file1']['done']){
            return
        }

        if(resultObj['file2']['text'] !== '' && (!resultObj['file2']['done'])){
            
            output(resultObj.file2.text)
            resultObj['file2']['done'] = true;
            
        }

        if(!resultObj['file2']['done']){
            return
        }

        if(resultObj['file3']['text'] !== '' && (!resultObj['file3']['done'])){
            output(resultObj.file3.text)
            resultObj['file3']['done'] = true;
            
        }
        

	});
}

getFile("file1");
getFile("file2");
getFile("file3");
