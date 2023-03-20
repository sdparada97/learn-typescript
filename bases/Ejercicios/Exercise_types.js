"use strict";
(() => {
    // Tipos
    const batman = 'Bruce';
    const superman = 'Clark';
    const existe = false;
    // Tuplas
    const parejaHeroes = [batman, superman];
    const villano = ['Lex Lutor', 5, true];
    // Arreglos
    const aliados = ['Mujer Maravilla', 'Acuaman', 'San', 'Flash'];
    //Enumeraciones
    let fuerzas;
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
    const poder = '100';
    const largoDelPoder = poder.length;
    console.log(largoDelPoder);
})();
