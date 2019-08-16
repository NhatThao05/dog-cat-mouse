function Mouse(name) {
	this.namesss = name;
	this.deadsss = false;
}
Mouse.prototype.die = function() {
	this.dead = true;
};

Mouse.prototype.run = function() {
	console.log('Running')
};

module.exports = Mouse;
