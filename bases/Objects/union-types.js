"use strict";
(function () {
    var myCustomVariable = 'Sergio';
    console.log(typeof myCustomVariable);
    myCustomVariable = 20;
    console.log(typeof myCustomVariable);
    myCustomVariable = {
        name: 'Bruce',
        age: 47,
        powers: [1]
    };
    console.log(typeof myCustomVariable);
})();
