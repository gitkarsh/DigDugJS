var SpriteSheet = new (function() {
  this.map = {};
  this.load = function(spriteData, callback) {
    this.map = spriteData;
    this.image = new Image();
    this.image.onload = callback;
    this.image.src = "./spritesheetdigdug.png";
  };
  this.draw = function(ctx, sprites, x, y, frame) {
    var s = this.map[sprites];
    if (!frame) frame = 0;
    ctx.drawImage(
      this.image,
      s.sx + frame * s.w,
      s.sy,
      s.w,
      s.h,
      x,
      y,
      s.w,
      s.h
    );
  };
})();
