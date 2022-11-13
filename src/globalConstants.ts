export class GlobalConstants {
    static readonly spacecraftName: string = 'Determination';
    static readonly speedMph: number = 17500;
    static readonly kilometersToMars: number = 225000000;
    static readonly kilometersToTheMoon: number = 384400;
    static readonly milesPerKilometer: number = 0.621;

    static readonly milesToMars: number = this.kilometersToMars * this.milesPerKilometer;
    static readonly hoursToMars: number = this.milesToMars / this.speedMph;
    static readonly daysToMars: number = this.hoursToMars / 24;
}