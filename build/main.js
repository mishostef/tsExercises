"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Spacecraft_1 = require("./Spacecraft");
const SpaceLocation_1 = require("./SpaceLocation");
const globalConstants_1 = require("./globalConstants");
const { spacecraftName, speedMph, kilometersToMars, kilometersToTheMoon, milesPerKilometer, milesToMars, hoursToMars, daysToMars } = { ...globalConstants_1.GlobalConstants };
console.log(globalConstants_1.GlobalConstants.daysToMars);
console.log(`${spacecraftName} would take ${daysToMars} days to get to Mars.`);
function getDaysToLocation(kilometersAway) {
    const milesAway = kilometersAway * milesPerKilometer;
    return milesAway / (speedMph * 24);
}
console.log(`${spacecraftName} would take ${getDaysToLocation(kilometersToTheMoon)} days to get to Moon.`);
let spaceShuttle = new Spacecraft_1.Spacecraft('Determination', 17500);
console.log(`${spaceShuttle.name} would take ${spaceShuttle.getDaysToLocation(kilometersToMars)} days to get to Mars.`);
spaceShuttle.printDaysToLocation(new SpaceLocation_1.SpaceLocation('Mars', kilometersToMars));
spaceShuttle.printDaysToLocation(new SpaceLocation_1.SpaceLocation('the Moon', kilometersToTheMoon));
//# sourceMappingURL=main.js.map