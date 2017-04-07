var fs = require('fs');

var dir = './dist';
if (!fs.exists(dir)) {
	fs.mkdirSync(dir);
}

fs.writeFile(dir + '/index.html',
	'<html><body><h1>gh-pages via travis-ci</h1></body></html>',
	function(err) {
		if (err) {
			return console.log(err);
		}
	}
);