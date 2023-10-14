class Eloi {

	constructor(nom, salaire, job, residence){

		this.nom = nom;
		this.job = job;
		this.residence = residence;

		this.toString = function() {
			return `Bonjour Mr: ${this.nom} vous avez comme salaire: ${this.salaire} vous travailler en tant que: ${this.job} vous vivez: ${this.residence}`;

		}
	}
}
(function (){

	const variable = new Eloi("paul", 20010, "prof", "Paris");
	console.log(variable);
}) ();