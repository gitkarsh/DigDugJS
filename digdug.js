var DigDug = function(score) {
  this.type = OBJECT_PLAYER;
  this.w = 40;
  this.h = 40;
  this.score = score;
  this.x = 80;
  this.y = 280;
  this.velocity = 8;

  this.shootBullet = new Bullet(this.x, this.y);

  this.update = function(enemyx, enemyy, enemyw, callback) {
    if (Game.keys["Up"]) this.y -= 6;
    if (Game.keys["Down"]) this.y += 6;
    if (Game.keys["Left"]) {
      this.x -= this.velocity;
    }
    this.callback = callback;
    if (Game.keys["Right"]) {
      this.x += this.velocity;
    }
    


    if (
      !(
        this.x + this.w < enemyx ||
        this.x > enemyx + enemyw ||
        this.y + this.h < enemyy ||
        this.y > enemyy + enemyw
      )
    ) {
      this.score = -100;
      this.callback();
    }


    this.playerRestricMovement = function(){
    if (this.y < 280){
      this.y += 10;
    };
    if (this.y > Game.canvas.height-40){
      this.y -= 8;
    };
    if (this.x < 0){
      this.x += 10;
    };
    if (this.x > Game.canvas.width-40){
      this.x -= 8;
    };

  }

  this.playerRestricMovement();
  };

  this.draw = function(ctx) {

    var img = new Image();
    img.src = "./spritesheetdigdug.png";
    img.onload = function() {
      // SpriteSheet.load(sprites, function() {
      // SpriteSheet.draw(ctx, "playerright", 160, 90);
      // });
    };
    ctx.drawImage(img, 80, 120, 40, 40, this.x, this.y, this.w, this.h);

    if (Game.keys["Left"]) {
      ctx.drawImage(img, 120, 120, 40, 40, this.x, this.y, this.w, this.h);
    }
  
  };
};
