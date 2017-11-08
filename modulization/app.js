/*
Application main.
*/

var util = require('./utils')

function main(){
	dir = process.argv[2]
	ext = process.argv[3]
	util(dir, ext, function (err, filelists){
		for (var i = 0; i < filelists.length; i++){
			console.log(filelists[i])
		}
	})
}

main()