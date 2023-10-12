const coneAera = function(radius, sltant_height){

	let base_aera = Math.PI * radius * 2;
	let lateral_area = Math.PI * radius * sltant_height;
	let total_area = base_aera + lateral_area;
	return total_area;

}
console.log(coneAera(2,3));