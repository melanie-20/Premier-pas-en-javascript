
class Sphare{

	constructor(radius){
		this.radius = radius;
}
	getSphareSurface() {
		const surface_area = 4 * Math.PI * this.radius ** 2;
		return surface_area;
	}	

}


let aaa = new Sphare(2);
console.log(aaa.getSphareSurface());