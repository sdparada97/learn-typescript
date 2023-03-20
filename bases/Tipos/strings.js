"use strict";
(() => {
    var _a;
    /* Definición de strings */
    const batman = 'batman';
    const linternaVerde = "Linterna Verde";
    const volcanNegro = `Héroe: Volcan Negro`;
    console.log(`I´M ${batman.toLocaleUpperCase()}`);
    /* '?' --> Sirve para saber es undefiend or null o hay un dato */
    console.log(((_a = batman[10]) === null || _a === void 0 ? void 0 : _a.toUpperCase()) || 'No esta presente');
})();
