


class BinarySeachTree {
	static Node  = class {
		constructor(value) {
			this.data = value
			this.left = null
			this.right = null
		}
	}
	constructor() {
		this.root = null
	}

	insert(data) {

		
		let node = new BinarySeachTree.Node(data);
		if (this.root === null){ this.root = node; return;}  //if there is no root, set new node to root 
		let current = this.root;

		while (current) {
			if (data.localeCompare(current.data)) {
				if (current.left === null) {current.left = node; return;} //if the left child of current is null set the new node to it
				current = current.left;
			} else {
				if (current.right === null) {current.right = node; return; } //if the right child of current is null set the new node to it
				current = current.right;
			}
		}
	}

	inOrderTraversal() {
		const returnValue = [];
		const inOrderTraversalHelper = function(node){
			
			if(node?.left) inOrderTraversalHelper(node.left);
			if(node)returnValue.push(node.data);
			if(node?.right) inOrderTraversalHelper(node.right);
		}
		inOrderTraversalHelper(this.root);
		return returnValue;
	}
}


module.exports = BinarySeachTree;


