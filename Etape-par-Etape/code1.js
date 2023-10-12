function test(){

	let marque = "ferrari";
	let modele = "F8 Tributo";
	let prix = 23541;
	let vitesse = 2300;
	
	console.log("marque:" + marque);
	console.log("modele:" + modele);
	console.log("prix:" + prix);
	console.log("vitesse:" + vitesse);

if( prix < 2100){
	return("la voiture est moins chere!");

}else if(prix > 5000){
	return("la voiture est couteuse");

}else{
	console.log("le prix me vas");
}

}
test();