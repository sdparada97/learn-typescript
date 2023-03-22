"use strict";
(() => {
    /* ... --> Indica que se puede admitir muchos argumentos dentro de la funcion (INDICAR TIPO DE DATO) */
    const fullName = (firstName, ...restArgs) => {
        return `${firstName} ${restArgs.join(' ')}`;
    };
    const superman = fullName('Clark', 'Joseph', 'Kent');
    console.log(superman);
})();
