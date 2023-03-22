"use strict";
(() => {
    /* ? --> simbolo en los argumentos para que ese argumento sea opcional */
    const fullName = (firstName, lastName, upper = false) => {
        if (upper) {
            return `${firstName} ${lastName || '_____'}`.toUpperCase();
        }
        else {
            return `${firstName} ${lastName || '_____'}`;
        }
    };
    const name = fullName('Tony', 'Stark', true);
    console.log(name);
})();
