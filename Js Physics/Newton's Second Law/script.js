var canvas = document.getElementById('canvas'),
ctx = canvas.getContext('2d'),
v = new vector(200,300),
velocity = new vector(0,0),
force = new vector(1,0),
gravity = new vector(0,0.1);

window.onload = function(){
	setInterval(draw,1000/60);
}

function draw(){
	ctx.clearRect(0,0,canvas.width,canvas.height);
	ctx.fillRect(v.x,v.y,20,20);
	if(v.y > canvas.height){
		velocity.y *= -1;
	}
	if(v.x > canvas.width){
		velocity.x *= -1;
	}
	add(velocity,gravity);
	add(velocity, calcAccel(force, rectMass(1, 20 * 20) ) );
	add(v, velocity);
}
