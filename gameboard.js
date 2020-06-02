var GameBoard = function(callback, player, enemy, enemy2, sand, clouds, objects) {
  var board = this;
  this.callback = callback;
  this.score = 0;
  this.gameobjects = [];
  this.count = [];


  this.update = function() {

    if (Game.keys["Escape"] && this.callback) {
      Game.ctx.fillStyle = "purple";
      Game.ctx.fillRect(0, 0, Game.width, Game.height);
      this.callback();
    }
  };
  
this.player = player;
this.enemy = enemy;
this.enemy2 = enemy2;
this.sand = sand;
this.clouds = clouds;
this.objects = objects;
// this.bullets = bullets;
  this.draw = function(ctx) {

    ctx.clearRect(0, 0, Game.canvas.width, Game.canvas.height);
    // ctx.beginPath();

    this.sand.update();
    this.sand.draw(Game.ctx, player.x, player.y, player.w, player.h);
    ctx.fillStyle = "black";
    ctx.fillRect(440, 395, 320, 44);
    this.enemy.update(player.x, player.y);
    ctx.fillStyle = "black";
    ctx.fillRect(100, 637, 320, 44);
    this.objects.draw(Game.ctx);
    this.objects.update(Game.ctx, player.x, player.y, player.w);
    this.enemy.draw(Game.ctx);
    this.enemy2.update(player.x, player.y);
    this.enemy2.draw(Game.ctx);
    this.player.update(enemy.x, enemy.y, enemy.w, endGame);
    this.player.update(enemy2.x, enemy2.y, enemy.w, endGame);
    this.player.draw(Game.ctx);
    this.clouds.draw(Game.ctx);
    // this.bullets.draw(Game.ctx);
    ctx.fillStyle = "#FFFFFF";
    ctx.textAlign = "center";
    ctx.font = "bold 2em cosmic";
    ctx.fillText("Score: ", Game.width / 2 - 380, 30);
    ctx.fillText(this.score, Game.width / 2 - 320, 30);
  };
};
