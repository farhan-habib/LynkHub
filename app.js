const config = require("./config.json");


const path = require("path");
const express = require("express");
const handlebars = require("express-handlebars");

const passport = require('passport')
const session = require("express-session")
const bodyParser = require("body-parser");

const connectEnsureLogin = require('connect-ensure-login');


const app = express();
//Creating View Engine for the Express Server
app.engine(
	"hbs",
	handlebars.engine({
		defaultLayout: "main",
		extname: ".hbs",
		helpers: {
			isdefined(value){
				return value != undefined;
			}
		},
	})
);
app.set("view engine", "hbs"); //Using Handlebars as the view engine for this project
app.set("views", path.join(config.client.pathToClientFiles, "views")); //sets path of directory in which the views are contained
//Allowing access to public directory
app.use(express.static(path.join(config.client.pathToClientFiles, "public"))); //lets pages pull assets directly from public directory




app.use(session({
	secret: 'session secret',
	resave: false,
	saveUninitialized: true,
	cookie: { maxAge: 60 * 60 * 1000 } // 1 hour
}));
app.use(bodyParser.urlencoded({ extended: true })); //allows full json objects in post reqs
app.use(bodyParser.json());
app.use(passport.initialize()); //initializes Passport User Authentication
app.use(passport.session());	

require("./userauthentication.js"); //exported passport.js logic to another file

//temporary check to see if user is logged in or not
app.get('/dashboard', (req, res) => {
	if (req.user) {
		console.log("user logged in");
		console.log(req.user);
	} else {
		console.log("user not logged in");
	}

	res.send(`Hello USER ${req?.user?.username} with ID ${req?.user?.id}. Your session ID is ${req?.sessionID} and your session expires in ${req.session.cookie.maxAge} milliseconds.<br><br>`);
});

//Routes
const router = express.Router(); 
app.use('/', router); //makes express use router on every web address



router.use('/', require("./routers/page_management/viewPage.js")); //viewPage page
router.use('/', require("./routers/account_management/logout.js")); //logout page
router.use('/', require("./routers/account_management/login.js")); //login page
router.use('/', require("./routers/account_management/signup.js")); //sign up page
router.use('/', require("./routers/profiles.js")); //find a profile page
router.use('/', require("./routers/myprofile.js")); //edit my profile page
router.use('/', require("./routers/static/home.js")); //home page
router.use('/', require("./routers/static/about.js")); //about page
router.use('*', require("./routers/static/error404.js")); //404 page




// app.get("/", (req, res) => {
// 	res.render("HomePage", { user: {id: 1, username: "bob"} });
// });




app.listen(config.server.port, function (e) {
	//gets the webserver to start listening to requests
	if (e) {
		console.log("Error in server setup");
		console.log(e);
	}
	console.log("Server listening on Port", config.server.port);
	console.log(`http://localhost:${config.server.port}`);
});
