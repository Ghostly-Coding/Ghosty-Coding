function rectMass(unitMass,area){
	return (unitMass * area) / 10;
}

function circMass(unitMass,radius){
	return (unitMass * (radius * radius * Math.PI)) / 10;
}

function calcAccel(force,mass){
	return new vector(force.x / mass, force.y / mass);
}
