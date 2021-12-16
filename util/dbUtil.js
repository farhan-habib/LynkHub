//TODO: CHECK IF SINGlETON OBJECT IMPLEMENTED CORRECTLY
const path = require("path");
const sqlite3 = require('sqlite3').verbose();
const passwordUtil = require("./passwordUtil.js");
const crypto = require('crypto');
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


	/**
	 * 
	 * @param {String} userId The Id of the user 
	 * @returns A promise that resolves to an object containing the id as well as username of the user.
	 */
	async getUserFromId(userId) {
		return new Promise((resolve, reject) => {
			let userData = this.db.get("SELECT users.id, users.username FROM users WHERE ID = $userId", { $userId: userId },
				function (err, row) {
					if (err) reject(err);
					resolve(row);
				});
		});
	}

	/**
	 * 
	 * @param {String} getUserFromUsername The username of the user 
	 * @returns A promise that resolves to an object containing the id as well as username of the user.
	 */
	async getUserFromUsername(username) {
		return new Promise((resolve, reject) => {
			let userData = this.db.get("SELECT users.id, users.username FROM users WHERE username = $username", { $username: username },
				function (err, row) {
					if (err) reject(err);
					resolve(row);
				});

		});
	}
	/**
	 * 
	 * @param {String} username The username of the user
	 * @param {String} passwordToCheck The password which you want to verify the validity of
	 * @returns A promise that resolves to true or false, depending on if the password passed in was the user's password or not. If The program can not find a user with that username it returns false
	 */
	async checkuserPassword(username, passwordToCheck) {
		return new Promise((resolve, reject) => {
			this.db.get("SELECT users.hashed_password, users.salt FROM users WHERE username = $username", { $username: username },
				(err, row) => {
					if (err) reject(err);
					
					
					let [hashed_password,salt] = [row?.hashed_password, row?.salt]
					if(hashed_password == undefined || salt == undefined) return resolve(false);
					
					
					resolve(crypto.timingSafeEqual(passwordUtil.hashPassword(passwordToCheck, salt), hashed_password))
				});

		});

	}

	/**
	 * 
	 * @param {String} username The username of the user
	 * @param {String} password The password of the user.
	 * @returns A promise that resolves to an object containing the id as well as username of the user.
	 */
	async createNewUser(username, password) {
		if (await this.getUserFromUsername(username)) { console.log("username in use"); return null; }

		console.log(`Making new user with Username:${username}, and password: ${password}`);
		const salt = passwordUtil.generateSalt();
		const hashed_password = passwordUtil.hashPassword(password, salt);

		let stmt = this.db.run("INSERT INTO users (username, hashed_password, salt) VALUES ($username, $hashed_password, $salt)", {
			$username: username,
			$hashed_password: hashed_password,
			$salt: salt,
		});

		return this.getUserFromUsername(username);

	}

	/**
	 * @returns A promise that resolves to an array containing objects containing the usernames and ids of all of the users.
	 */
		async getusers() {
		return new Promise((resolve, reject) => {
			let userData = this.db.all("SELECT users.id, users.username FROM users",
				function (err, row) {
					if (err) reject(err);
					resolve(row);
				});
		});
	}
}


const instance = new dbUtil()
Object.freeze(instance);

module.exports = instance;



