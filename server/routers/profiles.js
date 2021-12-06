var router = require('express').Router();

router.get('/profiles', function (req, res) {
	res.send('find a profile page');
});

module.exports = router;