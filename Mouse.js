function Mouse(name) {
	this.namess = name;
	this.deadss = false;
}
Mouse.prototype.die = function() {
	this.dead = true;
}

module.exports = Mouse;
