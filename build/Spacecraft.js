"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Spacecraft = void 0;
class Spacecraft {
    name;
    speedMph;
    milesPerKilometer = 0.621;
    constructor(name, speedMph) {
        this.name = name;
        this.speedMph = speedMph;
    }
    getDaysToLocation(kilometersAway) {
        const milesAway = kilometersAway * this.milesPerKilometer;
        return milesAway / (this.speedMph * 24);
    }
    printDaysToLocation(location) {
        console.log(`${this.name} would take ${this.getDaysToLocation(location.kilometersAway)} days to get to ${location.name}.`);
    }
}
exports.Spacecraft = Spacecraft;
//# sourceMappingURL=Spacecraft.js.map