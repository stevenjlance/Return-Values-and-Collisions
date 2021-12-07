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
var hit = false
var score = 0
function setup() {
  createCanvas(400, 400);
  
}

function draw() {
	background(0);
	fill("white")
	text(`SCORE: ${score}`, 20, 20)
	ellipse(bubble.x, bubble.y, bubble.radius)
	rect(paddle.x, paddle.y, paddle.width, paddle.height)
	arrows()

	hit = collideRectCircle(paddle.x, paddle.y, paddle.width, paddle.height, bubble.x, bubble.y, bubble.radius);
	if(hit){
		bubble.y = 0
		bubble.x = random(0, width)
		score++
		bubble.speed += 0.5
	}
	if(bubble.y > height){
		background(0)
		textSize(32)
		fill("white")
		text("GAME OVER 😂", 50, 200)
	}
	bubble.y += bubble.speed
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

function isCircleTouching(x, y, radius){
	var d = dist(x, y, mouseX, mouseY)
	if(d < radius){
		return true
	}
	else {
		return false
	}
}

function isRectTouching(x, y, width, height){
	if(mouseX > x && mouseX < x + width && mouseY > y && mouseY < y + height){
		return true
	}
	else {
		return false
	}
}