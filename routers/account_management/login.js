const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy;

var router = require('express').Router();

router.get('/login', function (req, res) {
	res.render("LoginPage", { user: req.user });
});




router.post('/login', passport.authenticate('local', { failureRedirect: '/login' }), function (req, res) {

	res.redirect('/home');
});



module.exports = router;