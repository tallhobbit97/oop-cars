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
        this.numWheels = 4;
    }
}

class Motorcycle extends Vehicle{
    constructor(type, mod, yr){
        super(type, mod, yr);
        this.numWheels = 2;
    }
    revEngine(){
        return 'VROOM!!!';
    }
}

class Garage{
    constructor(cap){
        this.capacity = cap;
        this.vehicles = [];
    }
    add(newVehicle){
        if (this.vehicles.length > this.capacity){
            return "Sorry, we're full";
        } else if (!(newVehicle instanceof Vehicle)){
            return 'Only vehicles are allowed in here!';
        } else {
            this.vehicles.push(newVehicle);
            return 'Vehicle added';
        }
    }
}