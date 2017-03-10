const path = require('path');


const exclude = function (filePath) {
	let name = path.basename(filePath);
	return name.match(/(^[0-9\.]+|)(__)/, "") ? true : false;
};


module.exports = function(config, params) {
	let output = [];
	params.files.forEach((file) => { if (exclude(file) !== true) { output.push(file); } });
	return output;
};
