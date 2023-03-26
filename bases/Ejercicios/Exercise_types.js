"use strict";
(function () {
    // Tipos
    var batman = 'Bruce';
    var superman = 'Clark';
    var existe = false;
    // Tuplas
    var parejaHeroes = [batman, superman];
    var villano = ['Lex Lutor', 5, true];
    // Arreglos
    var aliados = ['Mujer Maravilla', 'Acuaman', 'San', 'Flash'];
    //Enumeraciones
    var fuerzas;
    (function (fuerzas) {
        fuerzas[fuerzas["Acuaman"] = 0] = "Acuaman";
        fuerzas[fuerzas["Batman"] = 1] = "Batman";
        fuerzas[fuerzas["Flash"] = 5] = "Flash";
        fuerzas[fuerzas["Superman"] = 10] = "Superman";
    })(fuerzas || (fuerzas = {}));
    console.log(fuerzas);
    // Retorno de funciones
    function activar_batiseñal() {
        return 'activada';
    }
    function pedir_ayuda() {
        console.log('Auxilio!!!');
    }
    // Aserciones de Tipo
    var poder = '100';
    var largoDelPoder = poder.length;
    console.log(largoDelPoder);
})();
