/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/SpaceLocation.ts":
/*!******************************!*\
  !*** ./src/SpaceLocation.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SpaceLocation = void 0;
class SpaceLocation {
    kilometersAway;
    name;
    constructor(name, kilometersAway) {
        this.name = name;
        this.kilometersAway = kilometersAway;
    }
}
exports.SpaceLocation = SpaceLocation;


/***/ }),

/***/ "./src/Spacecraft.ts":
/*!***************************!*\
  !*** ./src/Spacecraft.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Spacecraft = void 0;
const globalConstants_1 = __webpack_require__(/*! ./globalConstants */ "./src/globalConstants.ts");
const milesPerKilometer = globalConstants_1.GlobalConstants.milesPerKilometer;
class Spacecraft {
    name;
    speedMph;
    logger;
    constructor(name, speedMph, logger) {
        this.name = name;
        this.speedMph = speedMph;
        logger ? this.logger = logger : this.logger = console;
    }
    getDaysToLocation(kilometersAway) {
        const milesAway = kilometersAway * milesPerKilometer;
        return milesAway / (this.speedMph * 24);
    }
    printDaysToLocation(location) {
        this.logger.log(`${this.name} would take ${this.getDaysToLocation(location.kilometersAway)} days to get to ${location.name}.`);
    }
}
exports.Spacecraft = Spacecraft;


/***/ }),

/***/ "./src/globalConstants.ts":
/*!********************************!*\
  !*** ./src/globalConstants.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
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


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
const Spacecraft_1 = __webpack_require__(/*! ./Spacecraft */ "./src/Spacecraft.ts");
const SpaceLocation_1 = __webpack_require__(/*! ./SpaceLocation */ "./src/SpaceLocation.ts");
const globalConstants_1 = __webpack_require__(/*! ./globalConstants */ "./src/globalConstants.ts");
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

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QyxDQUFDO0FBRXJDLENBQUM7QUFFRCxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsY0FBYyxlQUFlLGlCQUFpQixDQUFDLG1CQUFtQixDQUFDLHVCQUF1QixDQUFDLENBQUM7QUFDM0csSUFBSSxZQUFZLEdBQUcsSUFBSSx1QkFBVSxDQUFDLGVBQWUsRUFBRSxLQUFLLENBQUMsQ0FBQztBQUMxRCxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsWUFBWSxDQUFDLElBQUksZUFBZSxZQUFZLENBQUMsaUJBQWlCLENBQUMsZ0JBQWdCLENBQUMsdUJBQXVCLENBQUMsQ0FBQztBQUV4SCxZQUFZLENBQUMsbUJBQW1CLENBQUMsSUFBSSw2QkFBYSxDQUFDLE1BQU0sRUFBRSxnQkFBZ0IsQ0FBQyxDQUFDLENBQUM7QUFDOUUsWUFBWSxDQUFDLG1CQUFtQixDQUFDLElBQUksNkJBQWEsQ0FBQyxVQUFVLEVBQUUsbUJBQW1CLENBQUMsQ0FBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VicGFjay8uL3NyYy9TcGFjZUxvY2F0aW9uLnRzIiwid2VicGFjazovL3dlYnBhY2svLi9zcmMvU3BhY2VjcmFmdC50cyIsIndlYnBhY2s6Ly93ZWJwYWNrLy4vc3JjL2dsb2JhbENvbnN0YW50cy50cyIsIndlYnBhY2s6Ly93ZWJwYWNrL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYnBhY2svLi9zcmMvbWFpbi50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgU3BhY2VMb2NhdGlvbiB7XG4gICAga2lsb21ldGVyc0F3YXk6IG51bWJlcjtcbiAgICBuYW1lOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3RvcihuYW1lOiBzdHJpbmcsIGtpbG9tZXRlcnNBd2F5OiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy5raWxvbWV0ZXJzQXdheSA9IGtpbG9tZXRlcnNBd2F5O1xuICAgIH0gICAgXG59IiwiaW1wb3J0IHsgU3BhY2VMb2NhdGlvbiB9IGZyb20gXCIuL1NwYWNlTG9jYXRpb25cIjtcbmltcG9ydCB7IEdsb2JhbENvbnN0YW50cyB9IGZyb20gJy4vZ2xvYmFsQ29uc3RhbnRzJztcbmltcG9ydCB7IElMb2dnZXIgfSBmcm9tIFwiLi9JbG9nZ2VyXCI7XG5jb25zdCBtaWxlc1BlcktpbG9tZXRlciA9IEdsb2JhbENvbnN0YW50cy5taWxlc1BlcktpbG9tZXRlcjtcblxuXG5leHBvcnQgY2xhc3MgU3BhY2VjcmFmdCB7XG4gICAgcHJpdmF0ZSBsb2dnZXI6IElMb2dnZXI7XG5cbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgbmFtZTogc3RyaW5nLCBwdWJsaWMgc3BlZWRNcGg6IG51bWJlciwgbG9nZ2VyPzogSUxvZ2dlcikge1xuICAgICAgICBsb2dnZXIgPyB0aGlzLmxvZ2dlciA9IGxvZ2dlciA6IHRoaXMubG9nZ2VyID0gY29uc29sZTtcbiAgICB9XG5cbiAgICBnZXREYXlzVG9Mb2NhdGlvbihraWxvbWV0ZXJzQXdheTogbnVtYmVyKTogbnVtYmVyIHtcbiAgICAgICAgY29uc3QgbWlsZXNBd2F5ID0ga2lsb21ldGVyc0F3YXkgKiBtaWxlc1BlcktpbG9tZXRlcjtcbiAgICAgICAgcmV0dXJuIG1pbGVzQXdheSAvICh0aGlzLnNwZWVkTXBoICogMjQpO1xuICAgIH1cbiAgICBwcmludERheXNUb0xvY2F0aW9uKGxvY2F0aW9uOiBTcGFjZUxvY2F0aW9uKSB7XG4gICAgICAgIHRoaXMubG9nZ2VyLmxvZyhgJHt0aGlzLm5hbWV9IHdvdWxkIHRha2UgJHt0aGlzLmdldERheXNUb0xvY2F0aW9uKGxvY2F0aW9uLmtpbG9tZXRlcnNBd2F5KX0gZGF5cyB0byBnZXQgdG8gJHtsb2NhdGlvbi5uYW1lfS5gKTtcbiAgICB9XG5cbn1cbiIsImV4cG9ydCBjbGFzcyBHbG9iYWxDb25zdGFudHMge1xuICAgIHN0YXRpYyByZWFkb25seSBzcGFjZWNyYWZ0TmFtZTogc3RyaW5nID0gJ0RldGVybWluYXRpb24nO1xuICAgIHN0YXRpYyByZWFkb25seSBzcGVlZE1waDogbnVtYmVyID0gMTc1MDA7XG4gICAgc3RhdGljIHJlYWRvbmx5IGtpbG9tZXRlcnNUb01hcnM6IG51bWJlciA9IDIyNTAwMDAwMDtcbiAgICBzdGF0aWMgcmVhZG9ubHkga2lsb21ldGVyc1RvVGhlTW9vbjogbnVtYmVyID0gMzg0NDAwO1xuICAgIHN0YXRpYyByZWFkb25seSBtaWxlc1BlcktpbG9tZXRlcjogbnVtYmVyID0gMC42MjE7XG5cbiAgICBzdGF0aWMgcmVhZG9ubHkgbWlsZXNUb01hcnM6IG51bWJlciA9IHRoaXMua2lsb21ldGVyc1RvTWFycyAqIHRoaXMubWlsZXNQZXJLaWxvbWV0ZXI7XG4gICAgc3RhdGljIHJlYWRvbmx5IGhvdXJzVG9NYXJzOiBudW1iZXIgPSB0aGlzLm1pbGVzVG9NYXJzIC8gdGhpcy5zcGVlZE1waDtcbiAgICBzdGF0aWMgcmVhZG9ubHkgZGF5c1RvTWFyczogbnVtYmVyID0gdGhpcy5ob3Vyc1RvTWFycyAvIDI0O1xufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCJpbXBvcnQgeyBTcGFjZWNyYWZ0IH0gZnJvbSBcIi4vU3BhY2VjcmFmdFwiO1xuaW1wb3J0IHsgU3BhY2VMb2NhdGlvbiB9IGZyb20gXCIuL1NwYWNlTG9jYXRpb25cIjtcbmltcG9ydCB7IEdsb2JhbENvbnN0YW50cyB9IGZyb20gXCIuL2dsb2JhbENvbnN0YW50c1wiO1xuY29uc3QgeyBzcGFjZWNyYWZ0TmFtZSxcbiAgICBzcGVlZE1waCxcbiAgICBraWxvbWV0ZXJzVG9NYXJzLFxuICAgIGtpbG9tZXRlcnNUb1RoZU1vb24sXG4gICAgbWlsZXNQZXJLaWxvbWV0ZXIsXG5cbiAgICBtaWxlc1RvTWFycyxcbiAgICBob3Vyc1RvTWFycyxcbiAgICBkYXlzVG9NYXJzIH0gPSB7IC4uLkdsb2JhbENvbnN0YW50cyB9XG5jb25zb2xlLmxvZyhHbG9iYWxDb25zdGFudHMuZGF5c1RvTWFycylcbmNvbnNvbGUubG9nKGAke3NwYWNlY3JhZnROYW1lfSB3b3VsZCB0YWtlICR7ZGF5c1RvTWFyc30gZGF5cyB0byBnZXQgdG8gTWFycy5gKVxuXG5mdW5jdGlvbiBnZXREYXlzVG9Mb2NhdGlvbihraWxvbWV0ZXJzQXdheTogbnVtYmVyKTogbnVtYmVyIHtcbiAgICBjb25zdCBtaWxlc0F3YXkgPSBraWxvbWV0ZXJzQXdheSAqIG1pbGVzUGVyS2lsb21ldGVyO1xuICAgIHJldHVybiBtaWxlc0F3YXkgLyAoc3BlZWRNcGgqMjQpO1xuXG59XG5cbmNvbnNvbGUubG9nKGAke3NwYWNlY3JhZnROYW1lfSB3b3VsZCB0YWtlICR7Z2V0RGF5c1RvTG9jYXRpb24oa2lsb21ldGVyc1RvVGhlTW9vbil9IGRheXMgdG8gZ2V0IHRvIE1vb24uYCk7XG5sZXQgc3BhY2VTaHV0dGxlID0gbmV3IFNwYWNlY3JhZnQoJ0RldGVybWluYXRpb24nLCAxNzUwMCk7XG5jb25zb2xlLmxvZyhgJHtzcGFjZVNodXR0bGUubmFtZX0gd291bGQgdGFrZSAke3NwYWNlU2h1dHRsZS5nZXREYXlzVG9Mb2NhdGlvbihraWxvbWV0ZXJzVG9NYXJzKX0gZGF5cyB0byBnZXQgdG8gTWFycy5gKTtcblxuc3BhY2VTaHV0dGxlLnByaW50RGF5c1RvTG9jYXRpb24obmV3IFNwYWNlTG9jYXRpb24oJ01hcnMnLCBraWxvbWV0ZXJzVG9NYXJzKSk7XG5zcGFjZVNodXR0bGUucHJpbnREYXlzVG9Mb2NhdGlvbihuZXcgU3BhY2VMb2NhdGlvbigndGhlIE1vb24nLCBraWxvbWV0ZXJzVG9UaGVNb29uKSk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9