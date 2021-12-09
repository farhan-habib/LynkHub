const path = require('path');
const express = require('express');
const session = require("express-session")
const bodyParser = require("body-parser");
const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy;

const connectEnsureLogin = require('connect-ensure-login');


const app = express();
const router = express.Router();
const port = 3000;


app.use(express.static("public"));
app.use(session({
	secret: 'session secret',
	resave: false,
	saveUninitialized: true,
	cookie: { maxAge: 60 * 60 * 1000 } // 1 hour
}));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(passport.initialize());
app.use(passport.session());




// app.get('/dashboard', connectEnsureLogin.ensureLoggedIn('/login'), (req, res) => {
app.get('/dashboard', (req, res) => {
	if (req.user) {
		console.log("user logged in");
		console.log(req.user);
	} else {
		console.log("user not logged in");
	}

	res.send(`Hello USER ${req?.user?.username} with ID ${req?.user?.id}. Your session ID is ${req?.sessionID} and your session expires in ${req.session.cookie.maxAge} milliseconds.<br><br>`);
});

app.use('/', router); //makes express use router on every web address

require("./userauthentication.js");


router.use('/', require("./routers/account_management/login.js")); //login page
router.use('/', require("./routers/account_management/logout.js")); //logout page
router.use('/', require("./routers/account_management/signup.js")); //sign up page
router.use('/', require("./routers/profiles.js")); //find a profile page
router.use('/', require("./routers/myprofile.js")); //edit my profile page
router.use('/', require("./routers/static/home.js")); //home page
router.use('/', require("./routers/static/about.js")); //about page
router.use('*', require("./routers/static/error404.js")); //404 page



// console.log(require("./util/dbUtil").password());

app.listen(port, function (err) { //gets the webserver to start listening to requests
	if (err) {
		console.log("Error in server setup");//runs on error 
	}
	console.log("Server listening on Port", port);
	console.log(`http://localhost:${port}`);
})