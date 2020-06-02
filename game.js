var OBJECT_PLAYER = 1,
  OBJECT_ENEMY = 2;

var sprites = {
  enemyleft: { sx: 0, sy: 0, w: 40, h: 40 },
  enemyblink: { sx: 40, sy: 0, w: 40, h: 40 },
  enemyright: { sx: 0, sy: 120, w: 40, h: 40 },
  enemyeyeswide: { sx: 80, sy: 40, w: 40, h: 40 },
  playerleft: { sx: 120, sy: 120, w: 40, h: 40 },
  playerright: { sx: 80, sy: 120, w: 40, h: 40 },
  rock: { sx: 0, sy: 160, w: 40, h: 40 }
};

window.onload = init;
function init() {
  // ctx = canvas.getContext && canvas.getContext('2d');
  Game.initialize("game-screen", sprites, startGame);
}

var startGame = function() {
  var startscreen = new startScreen(
    "Dig Dug",
    "Press Enter to Start",
    playGame
  );
  Game.setScreen(0, startscreen);
  startscreen.initialize(Game.ctx);
  // Game.loop();
};

var playGame = function() {
  let player = new DigDug();
  let enemy = new Enemy(110, 640, 365);
  let enemy2 = new Enemy(450, 400, 705);
  let sand = new Sand();
  let clouds = new Cloud();
  let objects = new Objects();
  // let bullets = new Bullet(player.x, player.y);
  // Game.setScreen(0, new GameBoard(endGame, player, enemy, Game.sandBlocks));
  Game.setScreen(0, new GameBoard(endGame, player, enemy, enemy2, sand, clouds, objects));

};

var endGame = function() {
  var endscreen = new endScreen(startGame);
  Game.setScreen(0, endscreen);
  endscreen.initialize(Game.ctx);
};

var Game = new (function() {
  this.screens = [];
  this.keys = {};
  var KEY_CODES = {
    37: "Left",
    38: "Up",
    39: "Right",
    40: "Down",
    32: "Space",
    13: "Enter",
    27: "Escape",
    8: "Backspace"
  };

  // Game Initialization
  this.initialize = function(canvasElementId) {
    this.canvas = document.getElementById(canvasElementId);
    this.width = this.canvas.width;
    this.height = this.canvas.height;
    

    // Set up the rendering context
    this.ctx = this.canvas.getContext && this.canvas.getContext("2d");

    if (!this.ctx) {
      return alert("Please upgrade your browser to play");
    }

    this.setupInput();
    this.loop();
    // SpriteSheet.load(sprite_data,callback);
    startGame();
  };

  this.setupInput = function() {
    window.addEventListener(
      "keydown",
      function(e) {
        if (KEY_CODES[e.keyCode]) {
          Game.keys[KEY_CODES[e.keyCode]] = true;
          e.preventDefault();
          //e.stopPropagation();
        }
      },
      false
    );

    window.addEventListener(
      "keyup",
      function(e) {
        if (KEY_CODES[e.keyCode]) {
          Game.keys[KEY_CODES[e.keyCode]] = false;
          e.preventDefault();
          //e.stopPropagation();
        }
      },
      false
    );
  };

  this.loop = function() {

    var dt = 30 / 1000;
    for (var i = 0, len = Game.screens.length; i < len; i++) {
      if (Game.screens[i]) {
        Game.screens[i].update(dt);
        if (Game.screens[i].draw)
          //since there is an error saying Game.screens[i].draw is not a function
          Game.screens[i] && Game.screens[i].draw(Game.ctx);
      }
    }

    // setTimeout(Game.loop,30);
    setTimeout(Game.loop, 100);
  };
  this.setScreen = function(num, screen) {
    Game.screens[num] = screen;
  };
})();
