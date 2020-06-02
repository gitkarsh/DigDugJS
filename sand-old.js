var Sand = function(x, y, level) {
    this.sandBlocks = [];
  
    this.playerx = x;
    this.playery = y;
    this.size = 40;
    this.update = function(ctx) {
      
      this.isDug = false;
  
      // if (
      //   !(
      //     (this.x + this.w == playerx ||
      //     this.x == playerx + playerw ||
      //     this.y + this.h == playery ||
      //     this.y == playery + playerw) 
      //   )
      // ) 
   
        // for(var i = 0; i < 24; i++)
        //   for(var j = 0; j < 24; j++)
    
        //     // this.sandBlocks.push(new Sand(i*this.size, j*this.size, i%6 + 1));
        //     // this.sandBlocks.push(new Sand(i*this.size, j*this.size, i%6 + 1)); use this guy
    
        //     // this.sandBlocks.push(new Sand(this.x, this.y, this.level));
    
        //   ctx.drawImage(this.img, 0, 40, 40, 40, i*this.size, j*this.size, 40, 40);
        // };
      //look here
    };
  
    this.draw = function(ctx, playerx, playery, playerw, playerh) {
      
      // this.img = new Image();
      // this.img.src = "./digdugsand.png";
      // this.img.onload = function(){
    this.playerx = playerx;
    this.playery = playery;
    this.playerw = playerw;
    this.playerh = playerh;
  
  
       this.digBlack = function(ctx) {
      if (this.x == this.playerx + playerw && this.y == playery - playerh){
        isDug = true;
        ctx.fillStyle = "black";
        ctx.fillRect(this.x, this.y, 40, 40);
      }
      // ctx.fillStyle = "black";
      // ctx.fillRect(this.x, this.y, 40, 40);
    };
    this.digBlack();
  
    this.sand1 = function(){
      this.img1 = new Image();
      this.img1.src = "./digdugsand.png";
      this.img1.onload = function() {};
      for (var i = 0; i < 23; i++) {
        for (var j = 0; j < 3; j++)
          ctx.drawImage(this.img1,0,0,40,40,i * this.size,j * this.size + this.size * 8,40,40);
          this.x = i * this.size;
          this.y = j * this.size + this.size * 8;
          if (this.x == this.playerx && this.y == playery){
            isDug = true;
            ctx.fillStyle = "black";
            // ctx.clearRect(xcoordinate_of_img1,ycoordinate_of_img1,xcoordinate_of_img1 + img1.width ,ycoord_of_img1 +img1.height );
            ctx.clearRect(this.x, this.y, this.x + this.width , this.y +this.height );
            // ctx.fillRect(this.x, this.y, this.playerw, this.playerh);
          }
          
      }
    }
   
    this.sand2 = function(){
      this.img2 = new Image();
      this.img2.src = "./digdugsand.png";
      this.img2.onload = function() {};
      for (var i = 0; i < 23; i++) {
        for (var j = 0; j < 3; j++)
          ctx.drawImage(this.img1,40,0,40,40,i * this.size,j * this.size + this.size * 11,40,40);
      }
    }
  
    this.sand3 = function(){
  
      this.img3 = new Image();
      this.img3.src = "./digdugsand.png";
      this.img3.onload = function() {};
      for (var i = 0; i < 23; i++) {
        for (var j = 0; j < 3; j++)
          ctx.drawImage(this.img1,0,40,40,40,i * this.size,j * this.size + this.size * 14,40,40);
      }
    }
  
    this.sand4 = function(){
  
      this.img4 = new Image();
      this.img4.src = "./digdugsand.png";
      this.img4.onload = function() {};
      for (var i = 0; i < 23; i++) {
        for (var j = 0; j < 3; j++)
          ctx.drawImage(this.img1,40,40,40,40,i * this.size,j * this.size + this.size * 17,40,40);
      }
    }
  
    this.sand5 = function(){
  
      this.img5 = new Image();
      this.img5.src = "./digdugsand.png";
      this.img5.onload = function() {};
      for (var i = 0; i < 23; i++) {
        for (var j = 0; j < 3; j++)
          ctx.drawImage(this.img1,0,80,40,40,i * this.size,j * this.size + this.size * 20,40,40);
      }
    }
  this.sand1();
  this.sand2();
  this.sand3();
  this.sand4();
  this.sand5();
  // ctx.beginPath();
  
    
  
      
      //           for (var count = 0; count<this.sandarray.length; count++) {
      //         var block = this.sandarray[count];
      //         // If block is null, don't draw it
      //         if (block === null) {
      //             continue;
      //         }
      //         this.x_coord = this.size*(count%24);
      //         this.y_coord = this.size*(Math.floor(count/24));
      //         if (block === 1) { img = this.sand1;}
      //         if (block === 2) { img = this.sand2;}
      //         if (block === 3) { img = this.sand3;}
      //         if (block === 4) { img = this.sand4;}
      //         if (block === 5) { img = this.sand5;}
      //         }
  
      //   ctx.drawImage(img , this.x_coord, this.y_coord);
    };
  };
  