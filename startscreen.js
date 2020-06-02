//startScreen.js
var startScreen = function(title,instructions, subtitle, callback) 
{
	this.title = title;
	this.subtitle = subtitle;
	this.callback = callback;
	this.instructions = instructions;
	
	this.update = function(dt) {
		if(Game.keys['Enter'] && this.callback) {
			Game.ctx.fillStyle = "orange";
			Game.ctx.fillRect(0, 0, Game.width, Game.height);
			this.callback();
		}
	};
	startScreen.prototype.getRand = function (min, max) {
		return Math.random() * (max - min) + min;
	}
	this.initialize = function(ctx) {
		startScreen.prototype.draw = function() {
		ctx.clearRect(0, 0, Game.canvas.width, Game.canvas.height);
		this.c1 = startScreen.prototype.getRand(30, 36);
    	var h = (this.c1) % 360;
		ctx.fillStyle = 'hsl('+h+',75%,50%)';
		ctx.fillRect(0, 0, Game.width, Game.height);
		ctx.fillStyle = "#FFFFFF";
		ctx.textAlign = "center";
		ctx.font = "bold 3em verdana";
		ctx.fillText(this.title,Game.width/2,Game.height/2 - 96);

		ctx.font = "bold 1.2em verdana";
		ctx.fillText(this.instructions,Game.width/2,Game.height/2 - 40);

		ctx.font = "bold 2.0em verdana";
		ctx.fillText(this.subtitle,Game.width/2,Game.height/2 + 56);

	}};
};