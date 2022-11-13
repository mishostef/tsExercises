import { SpaceLocation } from "./SpaceLocation";
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
