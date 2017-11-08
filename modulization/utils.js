/*
 Utility function : takes directory name, extension, and callback function as arugemtns, and 
 print the list of files filtered by given extension.
*/

var fs = require('fs');
var path = require('path');

module.exports = function (dir, ext, callback){
	/* 
	dir : directory
	ext : extension without .
	callback : callback function
	*/
	givenExtension = '.' + ext
	fs.readdir(dir, function (err, datas){
		if (err){
			return callback(err, null)
		}

		var result = [];
		datas.forEach(function(data){
			if (path.extname(data) === givenExtension){
				result.push(data)
			}
		})
		callback(null, result)
	})
}