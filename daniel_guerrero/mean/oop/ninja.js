


function Ninja(name){
	this.name = name
	this.health = 100
	var speed = 3
	var strength = 3
}

Ninja.prototype.sayName = function() {
    console.log("Hello my name is " + this.name);
};
Ninja.prototype.showStats = function() {
    console.log("Name:" + this.name + ", " + "Health:"+ this.health + ", " + "Speed:" + speed + ", " + "Strength:" + strength);
}


const ninja1 = new Ninja("Hyabusa");

ninja1.sayName();

ninja1.showStats();
