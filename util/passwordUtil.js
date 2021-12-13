//TODO: CHECK IF SINGlETON OBJECT IMPLEMENTED CORRECTLY
const path = require("path");
const crypto = require('crypto');




class passwordUtil {
	constructor() {

		if (!passwordUtil.instance) {
			this.config = {
				saltLength: 16,
				passwordHashIterations: 1000,
				passwordHashLength: 64

			}
			passwordUtil.instance = this;
		}
		return passwordUtil.instance;
	}
	/**
	 * 
	 * @returns A randomly generated salt whose length is set in the config.
	 */
	generateSalt() {
		return crypto.randomBytes(this.config.saltLength);
	}

	/**
	 * 
	 * @param {String} The password that is going to be hashed
	 * @param {String} The salt that is going to be attached to the password to hash it
	 * @returns A Hash made from the password & salt. 
	 */
	hashPassword(password, salt) {
		return crypto.pbkdf2Sync(password, salt, this.config.passwordHashIterations, this.config.passwordHashLength, "sha512")
	}
}

const instance = new passwordUtil();
Object.freeze(instance);




module.exports = instance;