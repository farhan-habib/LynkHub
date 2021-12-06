var router = require('express').Router();

router.get('/login', function (req, res) {
	res.send('login page');
});

module.exports = router;