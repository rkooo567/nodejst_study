var fs = require('fs')
var file = process.argv[2] 
fs.readFile(file, function countNewLine(err, textData){
	if (err){ 
		return console.error(err)
	}
	var result = textData.toString().split('\n').length - 1
	printResult(result)
})

function printResult(result){
	console.log(result)
}