# OOP Car Exercise
This exercise asked me to create several classes themed around cars to sho off my understanding of classes in ES2015 JS.

This included:
- A Vehicle class with three properties (make, model, and year) and two methods (honk() and toString()).
- A Car class that descends from Vehicle with an added property (numWheels = 4).
- A Motorcycle class that descends from Vehicle with an added property (numWheels = 2) and a new method (revEngine())
- A Garage class with two properties (capacity and vehicles which is an array that is intended to hold vehicle classes) and an add() method for adding to the Vehicles property that ensures that tiems being added are vehicles and not accepting any input that is not an instance of class Vehicle.