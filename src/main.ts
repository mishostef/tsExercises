import { Spacecraft } from "./Spacecraft";
import { SpaceLocation } from "./SpaceLocation";
import { GlobalConstants } from "./globalConstants";
const { spacecraftName,
    speedMph,
    kilometersToMars,
    kilometersToTheMoon,
    milesPerKilometer,

    milesToMars,
    hoursToMars,
    daysToMars } = { ...GlobalConstants }
console.log(GlobalConstants.daysToMars)
console.log(`${spacecraftName} would take ${daysToMars} days to get to Mars.`)

function getDaysToLocation(kilometersAway: number): number {
    const milesAway = kilometersAway * milesPerKilometer;
    return milesAway / (speedMph*24);

}

console.log(`${spacecraftName} would take ${getDaysToLocation(kilometersToTheMoon)} days to get to Moon.`);
let spaceShuttle = new Spacecraft('Determination', 17500);
console.log(`${spaceShuttle.name} would take ${spaceShuttle.getDaysToLocation(kilometersToMars)} days to get to Mars.`);

spaceShuttle.printDaysToLocation(new SpaceLocation('Mars', kilometersToMars));
spaceShuttle.printDaysToLocation(new SpaceLocation('the Moon', kilometersToTheMoon));