const path = require('path');

const express = require('express');
const app = express();
const router = express.Router();

const port = 3000;



router.use('/', require("./routers/profiles.js")); //find a profile page
router.use('/', require("./routers/myprofile.js")); //edit my profile page
router.use('/', require("./routers/static/home.js")); //home page
router.use('/', require("./routers/static/about.js")); //about page
router.use('/', require("./routers/account_management/login.js")); //login page
router.use('/', require("./routers/account_management/logout.js")); //logout page
router.use('/', require("./routers/account_management/signup.js")); //sign up page



router.use('*', require("./routers/static/pagenotfound.js")); //404 page





app.use('/', router); //makes express use router on every web address



app.listen(port, function (err) { //gets the webserver to start listening to requests
	if (err) {
		console.log("Error in server setup");//runs on error 
	}
	console.log("Server listening on Port", port);
	console.log(`http://localhost:${port}`);
})