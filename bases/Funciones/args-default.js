"use strict";
(function () {
    /* ? --> simbolo en los argumentos para que ese argumento sea opcional */
    var fullName = function (firstName, lastName, upper) {
        if (upper === void 0) { upper = false; }
        if (upper) {
            return "".concat(firstName, " ").concat(lastName || '_____').toUpperCase();
        }
        else {
            return "".concat(firstName, " ").concat(lastName || '_____');
        }
    };
    var name = fullName('Tony', 'Stark', true);
    console.log(name);
})();
