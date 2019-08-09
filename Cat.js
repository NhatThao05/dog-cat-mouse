function Cat() {
	this.stomach = [];
}

Cat.prototype.eat = function(mouses) {
	this.stomach.push(mouses)
};

module.exports = Cat;
