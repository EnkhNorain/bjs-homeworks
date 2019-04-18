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
    if (this.durability == 0) {
      return true;
    } else {
      return false;
    }
}

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

console.log (bow.getDamage());

console.log(bow.isBroken());



class Hand extends Weapon {
  constructor(attack, durability, range) {
    super(attack, durability, range);
    this.name = 'Рука';
  }
}


class Bow extends Weapon {
  constructor(attack, durability, range) {
    super(attack, durability, range);
    this.name = 'Лук';
  }
}


class Sword extends Weapon {
  constructor(attack, durability, range) {
    super(attack, durability, range);
    this.name = 'Меч';
  }
}


class Knife extends Weapon {
  constructor(attack, durability, range) {
    super(attack, durability, range);
    this.name = 'Нож';
  }
}


class Staff extends Weapon {
  constructor(attack, durability, range) {
    super(attack, durability, range);
    this.name = 'Посох';
  }
}


class LongBow extends Bow {
  constructor(attack, durability, range) {
    super(attack, durability, range);
    this.name = 'Длинный Лук';
  }
}


class Axe extends Sword {
  constructor(attack, durability, range) {
    super(attack, durability, range);
    this.name = 'Секира';
  }
}


class StaffStorm extends Staff {
  constructor(attack, durability, range) {
    super(attack, durability, range);
    this.name = 'Посох Бури';
  }
}


console.log(staff)