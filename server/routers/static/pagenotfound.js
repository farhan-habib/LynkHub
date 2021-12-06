var router = require('express').Router();

router.get('*', function (req, res) {
	res.send('page not found, 404 error');
});

module.exports = router;