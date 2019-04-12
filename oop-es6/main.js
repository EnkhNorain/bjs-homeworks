class Weapon {
	constructor(name,attack,durability,range){
	   this.name = name;
       this.attack = attack;
       this.durability = durability;
       this.range = range;
       this.initialDurability = durability;
    }
}


takeDamage(damage) {
	this.durability = this.attack - this.durability;
        
       if (this.durability < 0) {
        this.durability = 0;
       }
}

getDamage() {
	if (this.durability >= this.initialDurability * (30 / 100)) {
		return this.attack;
        }
        else if (this.durability === 0) {
            return 0;
        } else {
            return this.attack / 2;
	}
}

isBroken() {
	return (this.durability > 0) ? false : true;
}

const hand = new Weapon("Рука",1,Infinity,1);
const bow = new Weapon("Лук",10,200,3);
const sword = new Weapon("Меч",25,500,1);
const knife = new Weapon("Нож",5,300,1);
const staff = new Weapon("Посох",8,300,2);

const longBow = new Weapon("Длинный лук",15,200,4);
const axe = new Weapon("Секира",27,800,4);
const staffStorm = new Weapon("Посох Бури",10,300,3);


console.log(bow.durability);

bow.takeDamage(100);

console.log(bow.durability);

console.log (bow.getDamage());

console.log(bow.isBroken());