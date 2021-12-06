var router = require('express').Router();

router.get('/logout', function (req, res) {
	res.send('logout page');
});

module.exports = router;