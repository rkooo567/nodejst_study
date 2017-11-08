/*
	It is a program that performs an HTTP GET request to an URL provided by an user, and 
	write the string contents of each data from the response to a new line on a console

	argument 
		first : URL that you want to GET request.  
*/

// import a library
var http = require('http')

// program
url = process.argv[2]

http.get(url, function(response){
	response.setEncoding('utf8')
	response.on('data', console.log)
	response.on('error', console.error)
}).on('error', console.error)