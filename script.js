var bubble = {
	x: 250,
	y: 20,
	radius: 20,
	speed: 3,
}

var paddle = {
	x: 250,
	y: 350,
	width: 100,
	height: 40,
	speedX: 2,
}



function setup() {
  createCanvas(400, 400);
  
}

function draw() {
	background(0);

	ellipse(bubble.x, bubble.y, bubble.radius)
	
	rect(paddle.x, paddle.y, paddle.width, paddle.height)
	
	



}


// Write your functions below this line.
function arrows() {
	if(keyIsPressed){
		if(keyCode == 39)
		{
			paddle.x += paddle.speedX
		}
		else if(keyCode == 37)
		{
			paddle.x -= paddle.speedX
		}
	}
	

}