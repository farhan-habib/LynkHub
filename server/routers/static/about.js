var router = require('express').Router();

//Router that sends About Page
router.get('/about', (req, res) => {
	res.send("about page");
})


module.exports = router;