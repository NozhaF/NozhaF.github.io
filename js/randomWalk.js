//var circle = {
	//x : 300,
	//y : 500};

var square = {
	x : 500,
	y : 400};

var c = 0;

var speed = 8;
var cspeed = 1;

var colors = ["#ED1156", "#ED194E", "#ED2247", "#ED2B3F", "#EE3438", "#EE3D31", "#EE4529", "#EF4E22", "#EF571A", "#EF6013", "#F0690C", "#E8720E", "#E17B10", "#D98512", "#D28E14", "#CB9816", "#C3A118", "#BCAA1A", "#B4B41C", "#ADBD1E", "#A6C721", "#96C62F", "#87C53E", "#78C44D", "#69C35C", "#5AC26B", "#4AC17A", "#3BC089", "#2CBF98", "#1DBEA7", "#0EBDB6", "#0EBAB0", "#0EB8AA", "#0EB5A4", "#0EB39E", "#0EB098", "#0EAE92", "#0EAB8C", "#0EA986", "#0EA680", "#0EA47B", "#269376", "#3F8372", "#58736E", "#71626A", "#895266", "#A24262", "#BB315E", "#D4215A"];



function setup() {
  var canvas = createCanvas(windowWidth, 700);
 
  // Move the canvas so it's inside our <div id="sketch-holder">.
  canvas.parent('sketch-holder');

  background(255, 1);
}


function draw(){

noStroke();
fill(colors[c]);
//ellipse(circle.x,circle.y,10,10);
rect(square.x,square.y,10,10);

c += cspeed;
if (c >= colors.length) {
	c = 0;
	//speed = -speed;
}

//circle.x += speed;
square.x += speed;

//circle.y += random(-10,20);
square.y += random(-10,20);

//if (circle.y < 0 | circle.y > height) {circle.y = 100; }
if (square.y < 0 | square.y > height) {square.y = 100; }


//if (circle.y > width | circle.y < 0) {speed *= -1;}
if (square.x > width | square.x < 0) {speed *= -1;}


}