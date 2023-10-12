const Pyramide = function(rayon, hauteur){

	let volume = rayon * rayon * 3.14 * hauteur *(1/3);
	return volume;

}
console.log(Pyramide(2, 3));