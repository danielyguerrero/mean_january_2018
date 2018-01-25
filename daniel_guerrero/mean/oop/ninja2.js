function Ninja(name){
	this.name = name
	this.health = 100
	this.speed = 3
	this.strength = 3
}	
Ninja.prototype.sayName = function() {
    console.log("Hello my name is " + this.name);
};
Ninja.prototype.showStats = function() {
    console.log("Name:" + this.name + ", " + "Health:"+ this.health + ", " + "Speed:" + this.speed + ", " + "Strength:" + this.strength);
};
Ninja.prototype.punch = function(ninja){
	ninja.health -= 5
	console.log(ninja.name + "was punched by " + this.name + "and lost 5 Health")
	return this;
};
Ninja.prototype.kick = function(ninja){
	ninja.health -= (15 * this.strength)
	console.log(ninja.name + "was kicked by " + this.name + "and lost 15 Health")
	return this;
};



const blueNinja = new Ninja("Goemon");

const redNinja = new Ninja("Bill Gates");

redNinja.punch(blueNinja);

console.log(blueNinja.health);

blueNinja.showStats();



