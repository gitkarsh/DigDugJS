var Objects = function(playerx, playery, playerw) {

    // this.x = {x1: 500, x2: 280, x3: 760};
    // this.y = {y1: 400, y2: 640, y3: 286};
    this.x1 = 500;
    this.y1 = 400;
    this.x2 = 280;
    this.y2 = 640;
    this.x3 = 750
    this.y3 = 286;
    this.w = 40;
    this.h = 40;
    this.playerx = playerx;
    this.playery = playery;
    this.playerw = playerw;

    // this.keyValuesy = Object.values(this.y);
    // this.keyValuesx = Object.values(this.x);

    this.update = function(ctx, playerx, playery, playerw){
       
        // for (var i = -1; i < this.keyValuesx.length; i++){
        // for (var j = -1; j < this.keyValuesy.length; j++)
        if (
            !(
              (this.x1 + this.w < playerx ||
              this.x1 > playerx + playerw ||
              this.y1 + this.h < playery ||
              this.y1 > playery + playerw) 
            )
          ) {
            // this.y1 - 920;
            // ctx.clearRect(this.x1,this.y1,this.w ,this.h )
            ctx.fillStyle = "black";  
            ctx.fillRect(this.x1, this.y1, this.w, this.h);
            // ctx.clearRect(0, 0, canvas.width, canvas.height);
            // ctx.clearRect(this.keyValuesx[i],this.keyValuesx[j],this.keyValuesx[i] + 40 ,this.keyValuesx[i] + 40 );
          };
        // };

        // if (
        //   !(
        //     (this.keyValuesx[0] + this.w < playerx ||
        //     this.keyValuesx[0] > playerx + playerw ||
        //     this.keyValuesy[0] + this.h < playery ||
        //     this.keyValuesy[0] > playery + playerw) 
        //   )
        // ) {
        //   this.y - 920;
        //   ctx.fillStyle = "black";  
        //   ctx.fillRect(this.keyValuesx[0], this.keyValuesy[0], 60, 40);
        //   // ctx.clearRect(this.keyValuesx[0],this.keyValuesx[0],this.keyValuesx[i] + 40 ,this.keyValuesx[i] + 40 );
        // }
        // if (
        //   !(
        //     (this.keyValuesx[1] + this.w < playerx ||
        //     this.keyValuesx[1] > playerx + playerw ||
        //     this.keyValuesy[1] + this.h < playery ||
        //     this.keyValuesy[1] > playery + playerw) 
        //   )
        // ) {
        //   this.y - 920;
        //   ctx.fillStyle = "black";  
        //   ctx.fillRect(this.keyValuesx[1], this.keyValuesy[1], 60, 40);
        //   // ctx.clearRect(this.keyValuesx[0],this.keyValuesx[0],this.keyValuesx[i] + 40 ,this.keyValuesx[i] + 40 );
        // }
        // if (
        //   !(
        //     (this.keyValuesx[2] + this.w < playerx ||
        //     this.keyValuesx[2] > playerx + playerw ||
        //     this.keyValuesy[2] + this.h < playery ||
        //     this.keyValuesy[2] > playery + playerw) 
        //   )
        // ) {
        //   this.y - 920;
        //   ctx.fillStyle = "black";  
        //   ctx.fillRect(this.keyValuesx[2], this.keyValuesy[2], 60, 40);
        //   // ctx.clearRect(this.keyValuesx[0],this.keyValuesx[0],this.keyValuesx[i] + 40 ,this.keyValuesx[i] + 40 );
        // }
        
    }

    this.draw = function(ctx){
      

    this.obj1 = new Image();
    this.obj1.src = "./3869c0c14b94372872acba7c5d0d2af5_red-watermelon-png-vectors-psd-and-icons-for-free-download-_260-261-removebg-preview.png";
    this.obj1.onload = function() {

    }
    ctx.drawImage(this.obj1, this.x1, this.y1, 30, 30);
    // ctx.drawImage(this.obj1, this.x1, this.y1, 30, 30);
    this.obj2 = new Image();
    this.obj2.src = "./kisspng-vodka-red-bull-fizzy-drinks-energy-drink-beverage-bern-5b12b4697f08a5-removebg-preview.png";
    this.obj2.onload = function() {

    }
    ctx.drawImage(this.obj2, this.x2, this.y2, 65, 40);
    this.obj3 = new Image();
    this.obj3.src = "./vector-graphics-floral-design-flower-stock-photography-illustration-png-favpng-WQzU413isXZjFHVBuZfHdnWuA-removebg-preview.png";
    this.obj3.onload = function() {

    }
    ctx.drawImage(this.obj3, this.x3, this.y3, 65, 40);
    // ctx.beginPath();

    }


  

}