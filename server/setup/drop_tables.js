const fs = require('fs');
const path = require('path');

// let dbPath = path.join(".", "data", "userData.sqlite");


function deleteDb(dbPath) {
	try {
		fs.unlinkSync(dbPath);
		//file removed
	} catch (err) {
		// console.error(err)
	}
}




module.exports = { deleteDb };
