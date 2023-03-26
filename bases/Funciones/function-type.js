"use strict";
(function () {
    var addNumbers = function (a, b) { return a + b; };
    var greet = function (name) { return "Hola ".concat(name); };
    var saveToWorld = function () { return 'EL mundo esta salvado!'; };
    var myFunction;
    /* let myFunction: (ARGS CON SU TIPO DE DATO) => TIPO DE DATO; */
    /* myFunction = 10
    console.log(myFunction); */
    myFunction = addNumbers;
    console.log(myFunction(1, 2));
    myFunction = greet;
    console.log(myFunction('Sergio'));
    myFunction = saveToWorld;
    console.log(myFunction());
})();
