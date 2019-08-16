function Mouse(name) {
	this.namesss = name;
	this.deadsss = false;
}
Mouse.prototype.die = function() {
	this.dead = true;
};

Mouse.prototype.run = function() {
	console.log('Running')
}
Mouse.prototype.sleep = function() {
	console.log('sleeping')
};

module.exports = Mouse;
