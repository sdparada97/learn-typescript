"use strict";
(() => {
    const hero = 'Flash';
    /* Función tradicional */
    function getName() {
        return hero;
    }
    /* Función estilo flecha */
    const activateBatisignal = () => {
        return 'BatiSeñal Activada !!';
    };
    console.log(typeof activateBatisignal);
    const heroName = getName();
})();
