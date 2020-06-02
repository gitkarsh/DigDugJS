var Enemy = function(x, y, targetx) {
  this.type = OBJECT_ENEMY;
  this.w = 40;
  this.h = 40;
  this.startx = x;
  this.x = x;
  this.y = y;
  this.t = 0;
  this.targetx = targetx;
  this.velocity = 18;

  this.update = function(playerx, playery) {

    this.moveRight = function() {
      // this.x += 12;
      this.x = this.x + this.velocity;
      // this.face_right = true;
    };
    this.moveLeft = function() {
    	this.velocity *=-1;
      // this.face_right = false;
    };
    // // this.targety = targety;


    this.enemyRestricMovement = function(){
      if (this.y < 280){
        this.y += 10;
      };
      if (this.y > Game.canvas.height-40){
        this.y -= 6;
      };
      if (this.x < 0){
        this.x += 6;
      };
      if (this.x > Game.canvas.width-40){
        this.x -= 6;
      };
    }
    this.enemyRestricMovement();



this.movementloop = function(){
      this.moveRight();
      this.face_right = true;
   if ((this.x)>this.targetx || this.x<=this.startx){
     this.moveLeft();
     this.face_right = false;
   }
  }

  // Increasing the interval severely reduces lag
  setInterval(this.movementloop(), 1000);


  };

  this.draw = function(ctx) {
    var img = new Image();
    img.src = "./spritesheetdigdug.png";
    img.onload = function() {
      
    };
    
    // SpriteSheet.load(sprites, function() {
      // SpriteSheet.draw(ctx, "enemyright", this.x, this.y);
      // });
      ctx.drawImage(img, 0, 120, 40, 40, this.x, this.y, this.w, this.h);
    if(this.face_right == false) {ctx.drawImage(img, 0, 0, 40, 40, this.x, this.y, this.w, this.h);
    }
    // ctx.beginPath();

  };
};
