const fetch = require("node-fetch");
// the data argument passed here will be from your dataForHelper() function

module.exports = function(config) {
	// the results of this promise will be passed
	// to your helperResponse() function
	return fetch(config.url)
		.then(res => res.json())
		.catch(error => {
			return {network_error: error};
		});
};