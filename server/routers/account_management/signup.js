var router = require('express').Router();

router.get('/signup', function (req, res) {
	res.send('signup page');
});

module.exports = router;