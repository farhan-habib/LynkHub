const fs = require('fs');
const path = require('path')
const sqlite3 = require('sqlite3').verbose();


// let dbPath = path.join(".", "data", "userData.sqlite");


function createDb(dbPath) {
	let db = new sqlite3.Database(dbPath); //create db called userData in directory "data"
	db.serialize(function () {
		db.run(`CREATE TABLE users (
		id integer PRIMARY KEY AUTOINCREMENT,
		salt varchar,
		password_hash varchar,
		username varchar,
		email varchar,
		first_name varchar,
		middle_name varchar,
		last_name varchar
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


module.exports = { createDb };
