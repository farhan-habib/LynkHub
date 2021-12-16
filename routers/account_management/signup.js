const url = require('url');  
var router = require('express').Router();
const dbUtil = require("../../util/dbUtil")

router.get('/signup', async function (req, res) {
	
	let passedInParams = {user:req.user, notif: {usernameTaken: req.query.err}}
	
	
	res.render("SignupPage", passedInParams);

});


router.post('/signup', async function (req, res) {


	let UserObj = await dbUtil.createNewUser(req.body.username, req.body.password);

	if (UserObj) {
		req.login(UserObj, function (err) { //sign the user into the account that was just made
			res.redirect("/home")
		});
	}
	else {
		//A new Account was not created

		res.redirect(url.format({
			pathname:"/signup",
			query:{err:true},
		}))
	}

});













module.exports = router;