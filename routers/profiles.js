const dbUtil = require("../util/dbUtil");
const binarySearchTree = require("../data_structures/binarySearchTree");
var router = require('express').Router();

router.get('/profiles', async function (req, res) {
const BST = new binarySearchTree();
for (const user of await dbUtil.getusers()) {
	BST.insert(user.username)
}


let arrayOfUsers = BST.inOrderTraversal()
res.render("Profiles", {users: arrayOfUsers});
});

module.exports = router;