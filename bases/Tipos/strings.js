"use strict";
(function () {
    var _a;
    /* Definición de strings */
    var batman = 'batman';
    var linternaVerde = "Linterna Verde";
    var volcanNegro = "H\u00E9roe: Volcan Negro";
    console.log("I\u00B4M ".concat(batman.toLocaleUpperCase()));
    /* '?' --> Sirve para saber es undefiend or null o hay un dato */
    console.log(((_a = batman[10]) === null || _a === void 0 ? void 0 : _a.toUpperCase()) || 'No esta presente');
})();
