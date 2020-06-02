var Cloud = function() {



this.x1 = 40;
this.y1 = 130;
this.x2 = 450;
this.y2 = 35;

// this.velocity = 1;
// this.moveUp = function() {
//     this.velocity *=-1;
//   };
//   this.moveDown = function() {
//       this.y1 = this.y1 + this.velocity;

//   };
//   this.movementloop = function(){
//     this.moveDown();
//  if ((this.y1)> 140 || this.y1 < 130){
//     this.moveUp();
//  }
// }
// setInterval(this.movementloop(), 100);

this.draw = function(ctx){
    
this.cloud1 = new Image();
this.cloud1.src = "./6550724_preview-removebg-preview.png"
this.cloud1.onload = function(){
}
ctx.drawImage(this.cloud1, this.x1, this.y1, 200, 100);
this.cloud2 = new Image();
this.cloud2.src = "./dark-cloud-png-favpng-jR0k44GcHPH8KhiUu06rJPwcA-removebg-preview.png"
this.cloud2.onload = function(){
}
ctx.drawImage(this.cloud2, this.x2, this.y2, 400, 175);
// ctx.beginPath();

}

}