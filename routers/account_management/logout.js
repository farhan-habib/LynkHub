var router = require('express').Router();

router.get('/logout', function (req, res) {
	res.render("LogoutPage", { user: req.user });
});

router.post('/logout', function(req, res){
	req.logout();
	res.redirect("/")
})


module.exports = router;