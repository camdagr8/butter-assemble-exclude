'use strict';

const path = require('path');


const exclude = function (filePath) {
	let name = path.basename(filePath);
	return !!name.match(/(^[0-9\.]+|)(__)/);
};


module.exports = function(config, params) {
	let output = [];
	params.files.forEach((file) => {
	    if (!exclude(file)) { output.push(file); }
	});
	return output;
};
