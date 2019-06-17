// Ghostly Coding
// Channel: https://www.youtube.com/channel/UCizvLWj2bKUPjM-eK9vbRiQ?
// Video: https://youtu.be/tDm4z8iEcSA
var canvas = document.getElementById("canvas"),
ctx = canvas.getContext("2d"),
width = canvas.width = window.innerWidth - 20,
height = canvas.height = window.innerHeight - 20,
centerZ = 1500,
fl = 500,
points = [];
window.onload = function(){
	setInterval(draw, 1000/60);
	points[0] = {x: -500, y: -500, z: 500};
	points[1] = {x: 500, y: -500, z: 500};
	points[2] = {x: 500, y: -500, z: -500};
	points[3] = {x: -500, y: -500, z: -500};
	points[4] = {x: -500, y: 500, z: 500};
	points[5] = {x: 500, y: 500, z: 500};
	points[6] = {x: 500, y: 500, z: -500};
	points[7] = {x: -500, y: 500, z: -500};
}
function project(){
	for(let i = 0; i < points.length; i++){
		var p = points[i],
		scale = fl / (fl + p.z + centerZ);
		p.sx = p.x * scale;
		p.sy = p.y * scale;
	}
}
function line(){
	let p = points[arguments[0]];
	ctx.moveTo(p.sx,p.sy);
	for(let i = 0; i < arguments.length; i++){
		p = points[arguments[i]];
		ctx.lineTo(p.sx,p.sy);
	}
}
function rotateX(a){
	let sin = Math.sin(a);
	let cos = Math.cos(a);
	for(let i = 0; i < points.length; i++){
		let p = points[i];
		var y = p.y * cos - p.z * sin,
		z = p.z * cos + p.y * sin;
		p.y = y;
		p.z = z;
	}
}
function rotateY(a){
	let sin = Math.sin(a);
	let cos = Math.cos(a);
	for(let i = 0; i < points.length; i++){
		let p = points[i];
		var x = p.x * cos - p.z * sin,
		z = p.z * cos + p.x * sin;
		p.x = x;
		p.z = z;
	}
}
function rotateZ(a){
	let sin = Math.sin(a);
	let cos = Math.cos(a);
	for(let i = 0; i < points.length; i++){
		let p = points[i];
		var x = p.x * cos - p.y * sin,
		y = p.y * cos + p.x * sin;
		p.x = x;
		p.y = y;
	}
}

function draw(){
	project();
	ctx.save();
	ctx.clearRect(0,0,width,height);
	ctx.translate(width/2,height/2);
	ctx.beginPath();
	line(0,1,2,3,0);
	line(4,5,6,7,4);
	line(0,4);
	line(1,5);
	line(2,6);
	line(3,7);
	ctx.stroke();
	rotateZ(0.03);
	rotateX(0.01);
	ctx.restore();
}
