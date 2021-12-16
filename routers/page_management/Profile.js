let router = require('express').Router();

router.get('/profiles', function (req, res) {
	res.render("Profiles.hbs", {
		urls: [
			{
				nameOfLink: "dbnameOfLink1",
				url: `/profiles/1`
			},
			{
				nameOfLink: "dbnameOfLink2",
				url: `/profiles/2`
			},
			{
				nameOfLink: "dbnameOfLink3",
				url: `/profiles/3`
			},
		]
	});
});


module.exports = router;