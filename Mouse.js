function Mouse(name) {
	this.namesss = name;
	this.deadsss = false;
}
Mouse.prototype.die = function() {
	this.dead = true;
}
Mouse.prototype.sleep = function() {
	console.log('sleeping')
};

module.exports = Mouse;
