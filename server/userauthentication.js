

const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;



passport.use(new LocalStrategy(
	function (username, password, done) {
		if (username == "user" && password == "password") return done(null, { username: "bob", id: "30" });
		else return done(null, false)
	}
));

passport.serializeUser(function (user, done) {
	done(null, user.id);
});

passport.deserializeUser(function (id, done) {
	done(null, { username: "bob", id: "30" });
});
