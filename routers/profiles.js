var router = require('express').Router();

router.get('/profiles', function (req, res) {
	res.render("Profiles", {users:["bob", "joe", "mary"]});
});

module.exports = router;