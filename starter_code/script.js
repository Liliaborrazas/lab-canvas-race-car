window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    startGame();
  };

  function startGame() {

  }
  function Road(canvas){
    this.canvas = document.getElementById(canvas);
    this.ctx = this.canvas.getContext("2d");
  }
  Road.prototype.bgGray = function(x, y, width, height){
    this.ctx.beginPath();
    this.ctx.fillStyle = "gray";
    this.ctx.rect(x, y, width, height);
    this.ctx.fill();
    this.ctx.closePath();
  }

  Road.prototype.greenBorder = function(x, y, width, height){
    this.ctx.beginPath();
    this.ctx.fillStyle = "green";
    this.ctx.rect(x, y, width, height);
    this.ctx.fill();
    this.ctx.closePath();
  }
  Road.prototype.whiteBorder = function(x, y, width, height){
    this.ctx.beginPath();
    this.ctx.fillStyle = "white";
    this.ctx.rect(x, y, width, height);
    this.ctx.fill();
    this.ctx.closePath();
  }

  Road.prototype.draw = function(){
    var addWhiteline = 10;
    this.bgGray(0, 0, 400, 700);
    this.greenBorder(0, 0, 40, 700);
    this.whiteBorder(50, 0, 10, 700);
    for(var i = 0; i < 10; i++){
      this.whiteBorder(195, addWhiteline, 10, 50);
      addWhiteline += 70;
    }
    this.whiteBorder(340, 0, 10, 700);
    this.greenBorder(360, 0,40, 700);
  }

  var road = new Road("canvas");
  road.draw();
};
