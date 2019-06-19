function vector(x,y){
	this.x = x;
	this.y = y;
}
function add(v1,v2){
	v1.x = v1.x + v2.x;
	v1.y = v1.y + v2.y
}
function sub(v1,v2){
	v1.x = v1.x - v2.x;
	v1.y = v1.y - v2.y
}
function mult(v1,v2){
	v1.x = v1.x * v2.x;
	v1.y = v1.y * v2.y
}
function div(v1,v2){
	v1.x = v1.x / v2.x;
	v1.y = v1.y / v2.y
}
function scalar(v1,num){
	v1.x = v1.x * num;
	v1.y = v1.y * num;
}
