var router = require('express').Router();

router.get('/myprofile', function (req, res) {
	res.send('edit your own profile page');
});

module.exports = router;