const url = require('url');  
const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy;
var router = require('express').Router();

const incorrectPasswordRedir = url.format({
	pathname: "/login",
	query: {
		err: true
	},
})

router.get('/login', function (req, res) {
	let passedInParams = {user:req.user, notif: {incorrectPassword: req.query.err}};
	res.render("LoginPage", passedInParams);
});




router.post('/login', passport.authenticate('local', {
	failureRedirect: incorrectPasswordRedir
}), function (req, res) {
	res.redirect('/home');
});



module.exports = router;