var router = require('express').Router();

router.get('/', (req, res) => {
	res.redirect('/home');
})
//Router that sends Home Page
router.get('/home', (req, res) => {
	res.send("home page");
})


module.exports = router;