var router = require('express').Router();
const dbUtil = require("../../util/dbUtil")

const form = `<form action="/signup" method="post">
<div>
	<label>Username:</label>
	<input type="text" name="username"/>
</div>
<div>
	<label>Password:</label>
	<input type="password" name="password"/>
</div>
<div>
	<input type="submit" value="Sign Up"/>
</div>
</form>`;

router.get('/signup', async function (req, res) {
	// console.log(req.user);
	dbUtil.checkuserPassword("bob", "test");
	let sentHTML = "";

	if (req.user) {
		sentHTML += "<div> Logged in </div>"
	} else {
		sentHTML += "<div> Not Logged in </div>"
	}
	sentHTML += form;

	res.send(sentHTML);

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