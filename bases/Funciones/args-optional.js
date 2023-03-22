"use strict";
(() => {
    /* ? --> simbolo en los argumentos para que ese argumento sea opcional */
    const fullName = (firstName, lastName) => {
        return `${firstName} ${lastName || '_____'}`;
    };
    const name = fullName('Tony');
    console.log(name);
})();
