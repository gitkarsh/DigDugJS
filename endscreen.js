//endscreen.js
var endScreen = function(callback) {
  this.callback = callback;

  this.update = function(dt) {
    if (Game.keys["Space"] && this.callback) {
      Game.ctx.fillStyle = "rgb(47, 173, 196)";
      Game.ctx.fillRect(0, 0, Game.width, Game.height);
      this.callback();
    }
  };
  endScreen.prototype.getRand = function (min, max) {
		return Math.random() * (max - min) + min;
	}
  this.initialize = function(ctx) {
    endScreen.prototype.draw = function (){
      ctx.clearRect(0, 0, Game.canvas.width, Game.canvas.height);
		this.c1 = endScreen.prototype.getRand(254, 260);
    	var h = (this.c1) % 360;
		ctx.fillStyle = 'hsl('+h+',75%,50%)';
		ctx.fillRect(0, 0, Game.width, Game.height);
    ctx.fillStyle = "#FFFFFF";
    ctx.textAlign = "center";
    ctx.font = "bold 3em verdana";
    ctx.fillText("GAME END", Game.width / 2, Game.height / 2);
    ctx.font = "bold 1.5em verdana";
    ctx.fillText("Press Space to play!", Game.width / 2, Game.height / 2 + 32);
  }};
};
