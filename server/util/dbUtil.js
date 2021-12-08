//TODO: CHECK IF SINGlETON OBJECT IMPLEMENTED CORRECTLY
const path = require("path");
const sqlite3 = require('sqlite3').verbose();
const passwordUtil = require("./passwordUtils.js");


let dbPath = path.join(".", "data", "userData.sqlite");


class dbUtil {

	constructor() {
		if (!dbUtil.instance) {
			this.db = new sqlite3.Database(dbPath, (err) => {
				if (err) { console.error(err.message); }
				console.log('Connected to the database.');
			});
			dbUtil.instance = this;
		}
		return dbUtil.instance;
	}

	//internal functions:





	createNewUser(username, password) {
		const salt = passwordUtil.generateSalt();
		const hashed_password = passwordUtil.hashPassword(password, salt);
		this.db.serialize(function () {
			var stmt = this.db.run("INSERT INTO users (username, hashed_password, salt) VALUES ($username, $hashed_password, $salt)", {
				$username: username,
				$hashed_password: hashed_password,
				$salt: salt,
			});
		})
		return stmt.lastID;
	}
}


const instance = new dbUtil()
Object.freeze(instance);

module.exports = instance;