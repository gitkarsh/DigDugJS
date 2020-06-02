var Bullet = function(x, y){
this.playerx = x;
this.playery = y;
this.bullets = [];

this.bulletTotal = 30;


// this.keySpace = true;

    this.x = this.playerx + 20;
    this.y = this.playery + 20;

this.draw = function(ctx){
    ctx.fillStyle = "blue";
    ctx.fillRect(this.x, this.y, 5, 2);

    this.x+=10;

    if(this.x > 500){
        // this.keySpace = false;
    }
    
};







// this.drawbullet = function (ctx) {
//     if (this.bullets.length)
//       for (var i = 0; i < this.bullets.length; i++) {
//        ctx.fillStyle = '#f00';
//        ctx.fillRect(this.bullets[i][0],this.bullets[i][1],this.bullets[i][2],this.bullets[i][3])
//      }
//   }
//   this.movebullet = function() {
//    for (var i = 0; i < this.bullets.length; i++) {
//      if (this.bullets[i][0] > -11) {
//         this.bullets[i][0] += 10;
//       } else if (this.bullets[i][o] < -10) {
//         this.bullets.splice(i, 1);

//      }
//    }
//   }

//   if (Game.keys["Space"] && this.bullets.length <= this.bulletTotal) this.bullets.push([this.playerx + 20, this.playery + 20, 4, 20]);


  





// this.lastShootTime = 0;  // time when we last shoot 
// this.shootRate = 300;  // time between two bullets. (in ms)

// this.update = function () {
//     if (this.collection.length > 0) {
//         for (i = 0; i < this.collection.length; i++) {

//             this.collection[i].update();
//             // Missiles.collection.length = 0;
//         }
//     }

// }


// this.draw = function () {
//     for (i = 0; i < this.collection.length; i++) {
//         this.collection[i].draw();
//         // Missiles.collection.length = 0;
//     }
// };


// this.playerbullet = function (M) {
//     Mx = this.x;
//     My = this.y;
//     MR = this.radius;
//     Msp = 3;
//     MDir = this.rot;
//     M.draw = function () {
//         ctx.fillStyle = "Green";
//         ctx.beginPath();
//         ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
//         ctx.closePath();
//         ctx.fill();
//     };
//     M.update = function () {

//         switch (this.rot) {
//             case 0: this.y -= 3; break;
//             case 90: this.x += 3; break;
//             case -90: this.x -= 3; break;
//             case 180: this.y += 3; break;
//         }


//     };
//     return M;
// };

// this.now = Date.now() ;
// this.shoot = function () {
//     if (this.now - this.lastShootTime  < this.shootRate)  return;
//     this.lastShootTime  = this.now ;
//     this.collection.push(playerMissile({
//         x: this.x,
//         y: this.y,
//         radius: 2,
//         rot: this.rotation
//     }));
// }




}