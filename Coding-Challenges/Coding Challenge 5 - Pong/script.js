var canvas = document.getElementById('canvas'),
ctx = canvas.getContext('2d'),
width = canvas.width = 1000,
height = canvas.height = 750;
var px = 10,
py = height/2 - 100,
pw = 10,
ph = 200,
pvel = 0;
var bx = width/2,
by = height/2,
bd = 10,
bVelX = 5,
bVelY = Math.random() * 2 - 1;
var ax = width - 20,
ay = height/2 - 100,
aw = 10,
ah = 200,
avel = 0;
var scoreP = 0;
scoreA = 0;
window.onload = function(){
	setInterval(draw, 1000/60);
	document.addEventListener('keydown',keyDown);
	document.addEventListener('keyup',keyUp);
}
function reset(){
	px = 10;
	py = height/2 - 100;
	pw = 10;
	ph = 200;
	pvel = 0;
	bx = width/2;
	by = height/2;
	bd = 10;
	bVelX = 5;
	bVelY = Math.random() * 9;
	ax = width - 20;
	ay = height/2 - 100;
	aw = 10;
	ah = 200;
	avel = 0;
}
function keyDown(e){
	switch(e.keyCode){
		case 38:
			pvel = -3;
			break;
		case 40:
			pvel = 3;
			break;
	}
}
function keyUp(e){
	switch(e.keyCode){
		case 38:
			pvel = 0;
			break;
		case 40:
			pvel = 0;
			break;
	}
}
function draw(){
	if(py < 0){
		py = 0;
	}else if(py + ph > height){
		py = height - ph;
	}
	if(by > ay + ah){
		avel = 2;
	}else if(by < ay){
		avel = -2;
	}
	if(by > height){
		bVelY *= -1;
	}else if(by < 0){
		bVelY *= -1;
	}
	if(bx < 0){
		reset();
		scoreA += 1;
	}
	if(bx > width){
		reset();
		scoreP += 1;
	}
	if(bx < px + pw && by < py + ph && by > py){
		bVelX *= -1;
	}
	if(bx > ax + aw && by < ay + ah && by > ay){
		bVelX *= -1;
	}
	py += pvel;
	ay += avel;
	bx += bVelX;
	by += bVelY;
	ctx.fillStyle = '#000';
	ctx.fillRect(0,0,width,height);
	ctx.fillStyle = '#FFF';
	ctx.fillRect(px,py,pw,ph);
	ctx.fillRect(ax,ay,aw,ah);
	ctx.beginPath();
	ctx.arc(bx,by,bd,0,Math.PI * 2);
	ctx.fill();
	ctx.font = '20px Arial';
	ctx.fillText("Player: " + scoreP, 30, 20);
	ctx.fillText("AI: " + scoreA, width - 70, 20);
}
