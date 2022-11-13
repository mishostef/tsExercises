import { SpaceLocation } from "./src/SpaceLocation";
// Part 1: Declare (5) Variables With Type


const spacecraftName: string = 'Determination';
const speedMph: number = 17500;
const kilometersToMars: number = 225000000;
const kilometersToTheMoon: number = 384400;
const milesPerKilometer: number = 0.621;



// Part 2: Print Days to Mars
const milesToMars = kilometersToMars * milesPerKilometer;//implicit number
const hoursToMars = milesToMars / speedMph;
const daysToMars = hoursToMars / 24;




// Code an output statement here (use a template literal):
console.log(`${spacecraftName} would take ${daysToMars} days to get to Mars.`);


// Part 3: Create a Function ("getDaysToLocation")


function getDaysToLocation(kilometersAway: number): number {
    const milesAway = kilometersAway * milesPerKilometer;
    return milesAway / (speedMph*24);

}


// Move your output statement from part 2 here. Update the template literal to call
// the function and print the outputs for a Mars trip and a moon trip.
console.log(`${spacecraftName} would take ${getDaysToLocation(kilometersToTheMoon)} days to get to Moon.`);



// Part 4: Create a Spacecraft Class

export class Spacecraft {
    private milesPerKilometer: number = 0.621;

    constructor(public name: string, public speedMph: number) { }

    getDaysToLocation(kilometersAway: number): number {
        const milesAway = kilometersAway * this.milesPerKilometer;
        return milesAway / (this.speedMph * 24);
    }
    printDaysToLocation(location: SpaceLocation) {
        console.log(`${this.name} would take ${this.getDaysToLocation(location.kilometersAway)} days to get to ${location.name}.`);
    }

}

console.log(`${spacecraftName} would take ${getDaysToLocation(kilometersToTheMoon)} days to get to Moon.`);
// Create an instance of the class here:
let spaceShuttle = new Spacecraft('Determination', 17500);
console.log(`${spaceShuttle.name} would take ${spaceShuttle.getDaysToLocation(kilometersToMars)} days to get to Mars.`);

spaceShuttle.printDaysToLocation(new SpaceLocation('Mars', kilometersToMars));
spaceShuttle.printDaysToLocation(new SpaceLocation('the Moon', kilometersToTheMoon));


// Move your output statements from part 3 here. Update the template literals use the
// instance of the class.



// Part 5: Export and Import the SpaceLocation Class
// Add the required import statement BEFORE the part 1 content.


// Add the printDaysToLocation function to the Spacecraft class.

// Use the class instance to print out the days to Mars and the Moon here:

/*
spaceShuttle.printDaysToLocation(new SpaceLocation('Mars', kilometersToMars));
spaceShuttle.printDaysToLocation(new SpaceLocation('the Moon', kilometersToTheMoon));
*/
