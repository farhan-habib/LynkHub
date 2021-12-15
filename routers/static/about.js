var router = require('express').Router();

//Router that sends About Page
router.get('/about', (req, res) => {
	res.render("AboutPage", { user: req.user });
})


module.exports = router;