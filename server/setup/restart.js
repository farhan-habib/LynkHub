const { Console } = require('console');
const path = require('path');

const createDb = require("./create_tables.js").createDb;
const deleteDb = require("./drop_tables.js").deleteDb;


let dbPath = path.join(".", "data", "userData.sqlite");

console.log("Deleting Old Database")
deleteDb(dbPath);
console.log("Old Database deleted");


console.log("Creating new Database")
createDb(dbPath);
console.log("New Database Created")