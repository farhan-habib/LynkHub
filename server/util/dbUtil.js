//TODO: CHECK IF SINGlETON OBJECT IMPLEMENTED CORRECTLY
const path = require("path");
const sqlite3 = require('sqlite3').verbose();

let dbPath = path.join(".", "data", "userData.sqlite");


class dbUtil {

	constructor() {
		this.x = [];
		if (!dbUtil.instance) {
			this.db = new sqlite3.Database(dbPath, (err) => {
				if (err) { console.error(err.message); }
				console.log('Connected to the database.');
			});
			dbUtil.instance = this;
		}
		return dbUtil.instance;
	}
	password() {
		this.x.push("");
		return this.x;
	}

}


const instance = new dbUtil();
Object.freeze(instance);

module.exports = instance;