const fs = require('fs');
const path = require('path')
const sqlite3 = require('sqlite3').verbose();
// const createDb = require("./create_tables.js").createDb;
// const deleteDb = require("./drop_tables.js").deleteDb;



function createDb(dbPath) {
	let db = new sqlite3.Database(dbPath); //create db called userData in directory "data"
	db.serialize(function () {
		db.run(`CREATE TABLE users (
			id integer PRIMARY KEY AUTOINCREMENT,
			username text,
			hashed_password text,
			salt varchar
		);`);

		db.run(`CREATE TABLE contact_info (
				id integer PRIMARY KEY AUTOINCREMENT,
				users_id integer,
				url text
				);`)

		db.run(`CREATE TABLE pages (
					id integer PRIMARY KEY AUTOINCREMENT,
					users_id integer,
					uuid varchar
					);`)

		db.run(`CREATE TABLE info_in_pages (
						id integer PRIMARY KEY AUTOINCREMENT,
						contact_info_id integer,
						pages_id integer
						);`)
	});

	db.close();
}


function deleteDb(dbPath) {
	try {
		fs.unlinkSync(dbPath);
		return true
	} catch (err) {
		return false;
	}
}




let dbPath = path.join(".", "data", "userData.sqlite");

console.log("Attempting to delete Old Database")
if (deleteDb(dbPath)) {
	console.log("Old Database deleted");
}else{
	console.log("No Old Database Found");
}



console.log("Attempting to create new database")
createDb(dbPath);
console.log("New Database Created")