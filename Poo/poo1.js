class humain{

	constructor (pays, club, loisir, artisse, musique) {

		this.pays = pays;
		this.club = club;
		this.loisir = loisir;
		this.artisse = artisse;
		this.musique = musique;

}
	getAvisSurClub(){
		if(this.club == "barceone"){
			return "ils sont pas fort";
		}else if (this.club == "Real madrid"){
			return "j'adore cette equipe";
		}
		return "Club non reconnu";

	}

}



let ee = new humain("France", "Real madrid", "jeux", "Arafat", "Rock");
console.log(ee);
console.log(ee.getAvisSurClub());