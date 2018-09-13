// reference type
var object = { value : 10 };
var object2 = object;
var object3 = { value : 10 };

// context vs scope
const object4 = { 
    a : function() {
        console.log(this);
    }
}
// instantiation

class Player {
    constructor(name, type) {
        console.log("player", this);
        this.name = name;
        this.type = type;
    }
    introduce() {
        console.log(`Hi! I am ${this.name}, and my type is ${this.type}.`);
    }
}

class Wizard extends Player {
    constructor(name, type) {
        super(name, type);
        console.log('wizard', this);
    }
    play() {
        console.log(`We are playing ! I'm type ${this.type}`);
    }
}

const wizard1 = new Wizard( "Adrianos", "Healer");
const wizard2 = new Wizard("Typulus", "Dark Magic");

wizard1.play();
wizard1.introduce()