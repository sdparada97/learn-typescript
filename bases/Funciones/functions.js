"use strict";
(function () {
    var hero = 'Flash';
    /* Función tradicional */
    function getName() {
        return hero;
    }
    /* Función estilo flecha */
    var activateBatisignal = function () {
        return 'BatiSeñal Activada !!';
    };
    console.log(typeof activateBatisignal);
    var heroName = getName();
})();
