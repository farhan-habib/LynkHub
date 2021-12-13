var router = require('express').Router();
const dbUtil = require("../../util/dbUtil")

router.get('/signup', async function (req, res) {
	
	res.render("SignupPage", { user: req.user });

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
		res.redirect("/signup")
	}

});













module.exports = router;