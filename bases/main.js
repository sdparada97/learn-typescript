"use strict";
var validations;
(function (validations) {
    validations.validateText = (text) => {
        return (text.length > 3) ? true : false;
    };
    validations.validateFecha = (fecha) => {
        return (isNaN(fecha.valueOf()) ? true : false);
    };
})(validations || (validations = {}));
console.log(validations.validateText('SER'));
//# sourceMappingURL=main.js.map