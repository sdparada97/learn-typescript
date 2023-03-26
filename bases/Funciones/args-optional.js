"use strict";
(function () {
    /* ? --> simbolo en los argumentos para que ese argumento sea opcional */
    var fullName = function (firstName, lastName) {
        return "".concat(firstName, " ").concat(lastName || '_____');
    };
    var name = fullName('Tony');
    console.log(name);
})();
