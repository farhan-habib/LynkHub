

const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const dbUtil = require("./util/dbUtil")


passport.use(new LocalStrategy(
	async function (username, password, done) {
		if (await dbUtil.checkuserPassword(username, password)) {
			return done(null, await dbUtil.getUserFromUsername(username));
		}
		else return done(null, false)
	}
));

passport.serializeUser(function (user, done) {
	done(null, user.id); 
});

passport.deserializeUser(async function (id, done) {
	done(null, await dbUtil.getUserFromId(id));
});
