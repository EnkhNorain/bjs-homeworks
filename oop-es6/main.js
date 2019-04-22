class Weapon {
	constructor(name,attack,durability,range){
	   this.name = name;
       this.attack = attack;
       this.durability = durability;
       this.range = range;
       this.initialDurability = durability;
    }



takeDamage(damage) {
    if (this.durability - damage < 0) {
      this.durability = 0;
    } else {
      this.durability = this.durability - damage;
    }
}

getDamage() {
	if (this.durability >= this.initialDurability * 0.3) {
		return this.attack;
        }
        else if (this.durability === 0) {
            return 0;
        } else {
            return this.attack / 2;
	}
}

isBroken() {
  return this.durability === 0; 
  }

}

/*const hand = new Weapon("Рука",1,Infinity,1);
const bow = new Weapon("Лук",10,200,3);
const sword = new Weapon("Меч",25,500,1);
const knife = new Weapon("Нож",5,300,1);
const staff = new Weapon("Посох",8,300,2);

const longBow = new Weapon("Длинный лук",15,200,4);
const axe = new Weapon("Секира",27,800,4);
const staffStorm = new Weapon("Посох Бури",10,300,3);


console.log(bow.durability);

console.log (bow.getDamage());

console.log(bow.isBroken());*/


class Hand extends Weapon {
  constructor(name,attack,durability,range){
    super ('Рука', 1, Infinity, 1)
  }
} 

class Bow extends Weapon {
  constructor(name,attack,durability,range){
    super ('Лук',10, 200, 3 ) 
  }
}

class Sword extends Weapon {
  constructor(name,attack,durability,range){
    super ('Меч', 25, 500, 1)
  }
}

class Knife extends Weapon {
  constructor(name,attack,durability,range){
    super ('Нож', 5, 300, 1)
  }
}

class Staff extends Weapon{
  constructor(name,attack,durability,range){
    super ('Посох', 8, 300, 2)
  }
}

class LongBow extends Bow {
  constructor(name,attack,durability,range) {
    super();
    this.name = 'Длинный лук';
    this.attack = 15;
    this.range = 4;
  }
}

class Axe extends Sword {
  constructor(name,attack,durability,range) {
    super();
    this.name = 'Секира';
    this.durability = 800;
    this.attack = 27;
    this.firstDurability = this.durability
    }
}

class StaffStorm extends Staff {
  constructor(name,attack,durability,range) {
    super();
    this.name = 'Посох Бури';
    this.attack = 10;
    this.range = 3;
    }  
}

const hand = new Hand();
const bow = new Bow();
const sword = new Sword();
const knife = new Knife();
const staff = new Staff ();
const longBow = new LongBow() ;
const axe = new Axe();
const staffStorm = new StaffStorm();
