let router = require('express').Router();

router.get('/myProfile', function (req, res) {
	res.render("myProfile.hbs", {
		urls: [
			{
				nameOfLink: "Test1",
				url: "example1.com"
			},
			{
				nameOfLink: "Test2",
				url: "example2.com"
			},
			{
				nameOfLink: "Test3",
				url: "example3.com"
			},
		]
	});
});



module.exports = router;