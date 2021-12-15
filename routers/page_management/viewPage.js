let router = require('express').Router();

router.get('/page', function (req, res) {
	res.render("LoginPage", { urls: ["example.com", "example2.com", "example3.com"] });
});




module.exports = router;