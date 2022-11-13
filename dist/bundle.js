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
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LENBQUM7QUFDMUQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLFlBQVksQ0FBQyxJQUFJLGVBQWUsWUFBWSxDQUFDLGlCQUFpQixDQUFDLGdCQUFnQixDQUFDLHVCQUF1QixDQUFDLENBQUM7QUFFeEgsWUFBWSxDQUFDLG1CQUFtQixDQUFDLElBQUksNkJBQWEsQ0FBQyxNQUFNLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDO0FBQzlFLFlBQVksQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLDZCQUFhLENBQUMsVUFBVSxFQUFFLG1CQUFtQixDQUFDLENBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYnBhY2svLi9zcmMvU3BhY2VMb2NhdGlvbi50cyIsIndlYnBhY2s6Ly93ZWJwYWNrLy4vc3JjL1NwYWNlY3JhZnQudHMiLCJ3ZWJwYWNrOi8vd2VicGFjay8uL3NyYy9nbG9iYWxDb25zdGFudHMudHMiLCJ3ZWJwYWNrOi8vd2VicGFjay93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWJwYWNrLy4vc3JjL21haW4udHMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIFNwYWNlTG9jYXRpb24ge1xuICAgIGtpbG9tZXRlcnNBd2F5OiBudW1iZXI7XG4gICAgbmFtZTogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IobmFtZTogc3RyaW5nLCBraWxvbWV0ZXJzQXdheTogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMua2lsb21ldGVyc0F3YXkgPSBraWxvbWV0ZXJzQXdheTtcbiAgICB9ICAgIFxufSIsImltcG9ydCB7IFNwYWNlTG9jYXRpb24gfSBmcm9tIFwiLi9TcGFjZUxvY2F0aW9uXCI7XG5leHBvcnQgY2xhc3MgU3BhY2VjcmFmdCB7XG4gICAgcHJpdmF0ZSBtaWxlc1BlcktpbG9tZXRlcjogbnVtYmVyID0gMC42MjE7XG5cbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgbmFtZTogc3RyaW5nLCBwdWJsaWMgc3BlZWRNcGg6IG51bWJlcikgeyB9XG5cbiAgICBnZXREYXlzVG9Mb2NhdGlvbihraWxvbWV0ZXJzQXdheTogbnVtYmVyKTogbnVtYmVyIHtcbiAgICAgICAgY29uc3QgbWlsZXNBd2F5ID0ga2lsb21ldGVyc0F3YXkgKiB0aGlzLm1pbGVzUGVyS2lsb21ldGVyO1xuICAgICAgICByZXR1cm4gbWlsZXNBd2F5IC8gKHRoaXMuc3BlZWRNcGggKiAyNCk7XG4gICAgfVxuICAgIHByaW50RGF5c1RvTG9jYXRpb24obG9jYXRpb246IFNwYWNlTG9jYXRpb24pIHtcbiAgICAgICAgY29uc29sZS5sb2coYCR7dGhpcy5uYW1lfSB3b3VsZCB0YWtlICR7dGhpcy5nZXREYXlzVG9Mb2NhdGlvbihsb2NhdGlvbi5raWxvbWV0ZXJzQXdheSl9IGRheXMgdG8gZ2V0IHRvICR7bG9jYXRpb24ubmFtZX0uYCk7XG4gICAgfVxuXG59XG4iLCJleHBvcnQgY2xhc3MgR2xvYmFsQ29uc3RhbnRzIHtcbiAgICBzdGF0aWMgcmVhZG9ubHkgc3BhY2VjcmFmdE5hbWU6IHN0cmluZyA9ICdEZXRlcm1pbmF0aW9uJztcbiAgICBzdGF0aWMgcmVhZG9ubHkgc3BlZWRNcGg6IG51bWJlciA9IDE3NTAwO1xuICAgIHN0YXRpYyByZWFkb25seSBraWxvbWV0ZXJzVG9NYXJzOiBudW1iZXIgPSAyMjUwMDAwMDA7XG4gICAgc3RhdGljIHJlYWRvbmx5IGtpbG9tZXRlcnNUb1RoZU1vb246IG51bWJlciA9IDM4NDQwMDtcbiAgICBzdGF0aWMgcmVhZG9ubHkgbWlsZXNQZXJLaWxvbWV0ZXI6IG51bWJlciA9IDAuNjIxO1xuXG4gICAgc3RhdGljIHJlYWRvbmx5IG1pbGVzVG9NYXJzOiBudW1iZXIgPSB0aGlzLmtpbG9tZXRlcnNUb01hcnMgKiB0aGlzLm1pbGVzUGVyS2lsb21ldGVyO1xuICAgIHN0YXRpYyByZWFkb25seSBob3Vyc1RvTWFyczogbnVtYmVyID0gdGhpcy5taWxlc1RvTWFycyAvIHRoaXMuc3BlZWRNcGg7XG4gICAgc3RhdGljIHJlYWRvbmx5IGRheXNUb01hcnM6IG51bWJlciA9IHRoaXMuaG91cnNUb01hcnMgLyAyNDtcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiaW1wb3J0IHsgU3BhY2VjcmFmdCB9IGZyb20gXCIuL1NwYWNlY3JhZnRcIjtcbmltcG9ydCB7IFNwYWNlTG9jYXRpb24gfSBmcm9tIFwiLi9TcGFjZUxvY2F0aW9uXCI7XG5pbXBvcnQgeyBHbG9iYWxDb25zdGFudHMgfSBmcm9tIFwiLi9nbG9iYWxDb25zdGFudHNcIjtcbmNvbnN0IHsgc3BhY2VjcmFmdE5hbWUsXG4gICAgc3BlZWRNcGgsXG4gICAga2lsb21ldGVyc1RvTWFycyxcbiAgICBraWxvbWV0ZXJzVG9UaGVNb29uLFxuICAgIG1pbGVzUGVyS2lsb21ldGVyLFxuXG4gICAgbWlsZXNUb01hcnMsXG4gICAgaG91cnNUb01hcnMsXG4gICAgZGF5c1RvTWFycyB9ID0geyAuLi5HbG9iYWxDb25zdGFudHMgfVxuY29uc29sZS5sb2coR2xvYmFsQ29uc3RhbnRzLmRheXNUb01hcnMpXG5jb25zb2xlLmxvZyhgJHtzcGFjZWNyYWZ0TmFtZX0gd291bGQgdGFrZSAke2RheXNUb01hcnN9IGRheXMgdG8gZ2V0IHRvIE1hcnMuYClcblxuZnVuY3Rpb24gZ2V0RGF5c1RvTG9jYXRpb24oa2lsb21ldGVyc0F3YXk6IG51bWJlcik6IG51bWJlciB7XG4gICAgY29uc3QgbWlsZXNBd2F5ID0ga2lsb21ldGVyc0F3YXkgKiBtaWxlc1BlcktpbG9tZXRlcjtcbiAgICByZXR1cm4gbWlsZXNBd2F5IC8gKHNwZWVkTXBoKjI0KTtcblxufVxuXG5jb25zb2xlLmxvZyhgJHtzcGFjZWNyYWZ0TmFtZX0gd291bGQgdGFrZSAke2dldERheXNUb0xvY2F0aW9uKGtpbG9tZXRlcnNUb1RoZU1vb24pfSBkYXlzIHRvIGdldCB0byBNb29uLmApO1xubGV0IHNwYWNlU2h1dHRsZSA9IG5ldyBTcGFjZWNyYWZ0KCdEZXRlcm1pbmF0aW9uJywgMTc1MDApO1xuY29uc29sZS5sb2coYCR7c3BhY2VTaHV0dGxlLm5hbWV9IHdvdWxkIHRha2UgJHtzcGFjZVNodXR0bGUuZ2V0RGF5c1RvTG9jYXRpb24oa2lsb21ldGVyc1RvTWFycyl9IGRheXMgdG8gZ2V0IHRvIE1hcnMuYCk7XG5cbnNwYWNlU2h1dHRsZS5wcmludERheXNUb0xvY2F0aW9uKG5ldyBTcGFjZUxvY2F0aW9uKCdNYXJzJywga2lsb21ldGVyc1RvTWFycykpO1xuc3BhY2VTaHV0dGxlLnByaW50RGF5c1RvTG9jYXRpb24obmV3IFNwYWNlTG9jYXRpb24oJ3RoZSBNb29uJywga2lsb21ldGVyc1RvVGhlTW9vbikpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==