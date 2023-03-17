class Vehicle {
    constructor(type, mod, yr){
        this.make = type;
        this.model = mod;
        this.year = yr;
    }
    honk(){
        return 'Beep.';
    }
    toString(){
        return `The vehicle is a ${this.make} ${this.model} from ${this.year}.`;
    }
}

class Car extends Vehicle{
    constructor(type, mod, yr){
        super(type, mod, yr);
        this.numwheels = 4;
    }
}