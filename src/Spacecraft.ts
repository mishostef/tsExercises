import { SpaceLocation } from "./SpaceLocation";
import { GlobalConstants } from './globalConstants';
import { ILogger } from "./Ilogger";
const milesPerKilometer = GlobalConstants.milesPerKilometer;


export class Spacecraft {
    private logger: ILogger;

    constructor(public name: string, public speedMph: number, logger?: ILogger) {
        logger ? this.logger = logger : this.logger = console;
    }

    getDaysToLocation(kilometersAway: number): number {
        const milesAway = kilometersAway * milesPerKilometer;
        return milesAway / (this.speedMph * 24);
    }
    printDaysToLocation(location: SpaceLocation) {
        this.logger.log(`${this.name} would take ${this.getDaysToLocation(location.kilometersAway)} days to get to ${location.name}.`);
    }

}
