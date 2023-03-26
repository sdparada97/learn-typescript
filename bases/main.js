"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
(() => {
    const avengers = {
        nick: 'Samuel L. Jackson',
        ironman: 'Robert Downey Jr',
        vision: 'Paul Betanny',
        activos: true,
        poder: 1500.123345
    };
    const printAvenger = (_a) => {
        var { ironman } = _a, resto = __rest(_a, ["ironman"]);
        console.log(ironman, resto);
    };
    const avengersArr = ['Cap. America', true, 150.23];
    const [capitan, isAvailable,] = avengersArr;
})();
(() => {
    const ironman = {
        name: 'ironman',
        weapon: 'armorsuit'
    };
    const captainAmerica = {
        name: 'Capitan America',
        weapon: 'shield'
    };
    const thor = {
        name: 'Thor',
        weapon: 'hammer'
    };
    const avengers = [ironman, captainAmerica, thor];
    for (const avenger of avengers) {
        console.log(avenger.name, avenger.weapon);
    }
})();
(() => {
    const nombre = "Sergio";
    const getNombre = () => {
        console.log(`Viejo ${nombre}`);
    };
})();
//# sourceMappingURL=main.js.map