"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GlobalConstants = void 0;
class GlobalConstants {
    static spacecraftName = 'Determination';
    static speedMph = 17500;
    static kilometersToMars = 225000000;
    static kilometersToTheMoon = 384400;
    static milesPerKilometer = 0.621;
    static milesToMars = this.kilometersToMars * this.milesPerKilometer;
    static hoursToMars = this.milesToMars / this.speedMph;
    static daysToMars = this.hoursToMars / 24;
}
exports.GlobalConstants = GlobalConstants;
//# sourceMappingURL=globalConstants.js.map