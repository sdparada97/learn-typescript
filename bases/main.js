"use strict";
;
const conducirBatimovil = (auto) => {
    auto.encender = true;
    auto.velocidadMaxima = 100;
    auto.acelerar();
};
const batimovil = {
    encender: false,
    velocidadMaxima: 0,
    acelerar() {
        console.log("...... gogogo!!!");
    }
};
;
const guason = {
    reir: true,
    comer: true,
    llorar: false
};
const reir = (guason) => {
    if (guason.reir) {
        console.log("JAJAJAJA");
    }
};
const ciudadGotica = (ciudadanos) => {
    return ciudadanos.length;
};
class Persona {
    constructor(nombre, edad, sexo, estadoCivil) {
        this.nombre = nombre;
        this.edad = edad;
        this.sexo = sexo;
        this.estadoCivil = estadoCivil;
    }
    ;
    imprimirBio() {
        console.log(`Se creo la persona ${this.nombre} - ${this.edad} años`);
    }
    ;
}
const persona1 = new Persona('Sergio', 23, 'Hombre', 'Soltero');
console.log(persona1);
persona1.imprimirBio();
(() => {
    function sumar(a, b) {
        return a + b;
    }
    const sumNumbers = (a, b) => a + b;
    const contar = (heroes) => {
        return heroes.length;
    };
    const superHeroes = ["Flash", "Arrow", "Superman", "Linterna Verde"];
    contar(superHeroes);
    const llamarBatman = (llamar = true) => {
        if (llamar) {
        }
    };
    llamarBatman();
    const unirheroes = (...personas) => {
        return personas.join(", ");
    };
    const noHaceNada = (numero, texto, booleano, arreglo) => { };
    let noHaceNadaTampoco;
    noHaceNadaTampoco = noHaceNada;
})();
(() => {
    const batimovil = {
        carroceria: "Negra",
        modelo: "6x6",
        antibalas: true,
        pasajeros: 4
    };
    const bumblebee = {
        carroceria: "Amarillo con negro",
        modelo: "4x2",
        antibalas: true,
        pasajeros: 4,
        disparar() {
        }
    };
    const villanos = [{
            nombre: "Lex Luthor",
            edad: 54,
            mutante: false
        }, {
            nombre: "Erik Magnus Lehnsherr",
            edad: 49,
            mutante: true
        }, {
            nombre: "James Logan",
            edad: undefined,
            mutante: true
        }];
    const charles = {
        poder: "psiquico",
        estatura: 1.78
    };
    const apocalipsis = {
        lider: true,
        miembros: ["Magneto", "Tormenta", "Psylocke", "Angel"]
    };
    let mystique;
    mystique = charles;
    mystique = apocalipsis;
})();
(() => {
    const batman = 'Bruce';
    const superman = 'Clark';
    const existe = false;
    const parejaHeroes = [batman, superman];
    const villano = ['Lex Lutor', 5, true];
    const aliados = ['Mujer Maravilla', 'Acuaman', 'San', 'Flash'];
    let fuerzas;
    (function (fuerzas) {
        fuerzas[fuerzas["Acuaman"] = 0] = "Acuaman";
        fuerzas[fuerzas["Batman"] = 1] = "Batman";
        fuerzas[fuerzas["Flash"] = 5] = "Flash";
        fuerzas[fuerzas["Superman"] = 10] = "Superman";
    })(fuerzas || (fuerzas = {}));
    function activar_batiseñal() {
        return 'activada';
    }
    function pedir_ayuda() {
    }
    const poder = '100';
    const largoDelPoder = poder.length;
})();
//# sourceMappingURL=main.js.map