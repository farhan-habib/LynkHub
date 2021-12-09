const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy;

var router = require('express').Router();

router.get('/login', function (req, res) {
	res.send(`<form action="/login" method="post">
    <div>
        <label>Username:</label>
        <input type="text" name="username"/>
    </div>
    <div>
        <label>Password:</label>
        <input type="password" name="password"/>
    </div>
    <div>
        <input type="submit" value="Log In"/>
    </div>
</form>`);
});




router.post('/login', passport.authenticate('local', { failureRedirect: '/login' }), function (req, res) {

	res.redirect('/home');
});



module.exports = router;