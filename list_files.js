/* list the names of files. Arguments will give two information. 

First : the path
Second : the extension (filesystem)

Depending on these two information, this program will give the list of files that has the
same file system as the second argument in the directory given by the first argument.
*/

 var fs = require('fs')
 var path = require('path')
 var dirPath = process.argv[2]
 var givenExtension = '.' + process.argv[3]
 
 fs.readdir(dirPath, function checkExtension(err, fileList){
 	if (err){
 		console.log(err)
 	}

 	for (var i = 0; i < fileList.length; i++){
 		var fileExtension = path.extname(fileList[i])
 		if (fileExtension === givenExtension){
 			console.log(fileList[i])
 		}
 	}
 })