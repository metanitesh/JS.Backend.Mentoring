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

var resultArr = [];

function getFile(file, callback) {


	fakeAjax(file,function(url, val){
        
        resultObj[url].text = val;
        

        if(resultObj['file1']['text'] !== '' && (!resultObj['file1']['done'])){
            
            resultArr.push(resultObj.file1.text);
            resultObj['file1']['done'] = true;
            
        }

        if(!resultObj['file1']['done']){
            return
        }

        if(resultObj['file2']['text'] !== '' && (!resultObj['file2']['done'])){
            
            resultArr.push(resultObj.file2.text);
            resultObj['file2']['done'] = true;
            
        }

        if(!resultObj['file2']['done']){
            return
        }

        if(resultObj['file3']['text'] !== '' && (!resultObj['file3']['done'])){
            resultArr.push(resultObj.file3.text);
            resultObj['file3']['done'] = true;
            
        }

        if(resultObj['file3']['done']){
            callback(resultArr);
        }
        

    });
    
    
}


function makeCall(callback){
    getFile("file1", callback);
    getFile("file2", callback);
    getFile("file3", callback);


}

module.exports = {
    fakeAjax: fakeAjax,
    makeCall: makeCall
}