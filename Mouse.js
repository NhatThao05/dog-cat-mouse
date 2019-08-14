function Mouse(name) {
	this.namesss = name;
	this.deadsss = false;
}
Mouse.prototype.die = function() {
	this.dead = true;
}

module.exports = Mouse;
