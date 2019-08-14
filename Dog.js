function Dog(name) {
	this.name = name;
	this.stomach = [];
}
Dog.prototype.eat = function(cat) {
	this.stomach.push(cat);
};

function NhanNguyen() {
	this.stomach = []
}
NhanNguyen.prototype.sleeping = function(sperm) {
	this.stomach.push(sperm)
};
Dog.prototype.sayHello = function() {
	console.log('Hello! I am a best of the world, my name is ' + chalk.red(this.name))
};
module.exports = Dog;
var chalk = require('chalk');