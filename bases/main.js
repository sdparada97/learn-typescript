"use strict";
(() => {
    class Mutante {
        constructor(name, fullName) {
            this.name = name;
            this.fullName = fullName;
        }
    }
    class Xmen extends Mutante {
        salvarMundo() {
            return "Mundo salvado !!";
        }
    }
    class Villian extends Mutante {
        conquistarMundo() {
            return "Mundo Conquistado !!";
        }
    }
    const wolverine = new Xmen('Wolverine', 'Logan');
    const magneto = new Villian('Magneto', 'Magnus');
    const printName = (character) => {
        console.log(character.fullName);
    };
})();
(() => {
    class Avenger {
        static getAvgAge() {
            return this.name;
        }
        constructor(name, team, realName) {
            this.name = name;
            this.team = team;
            this.realName = realName;
        }
        bio() {
            return `${this.name} - ${this.team}`;
        }
    }
    Avenger.avgAge = 35;
})();
(() => {
    class Avenger {
        constructor(nombre, nombreReal) {
            this.nombre = nombre;
            this.nombreReal = nombreReal;
        }
        getFullName() {
            return `${this.nombre} - ${this.nombreReal}`;
        }
    }
    class Xmen extends Avenger {
        constructor(nombre, nombreReal, isMutant) {
            super(nombre, nombreReal);
            this.isMutant = isMutant;
        }
        get fullName() {
            return `${this.nombre} - ${this.nombreReal}`;
        }
        set fullName(nombreReal) {
            if (nombreReal.length < 3) {
                throw new Error("El nombre debe ser mayor a 3 letras");
            }
            this.nombreReal = nombreReal;
        }
        getFullNameDesdeXmen() {
            console.log(super.getFullName());
        }
    }
    const wolverine = new Xmen('WOLVERINE', 'Logan', true);
    wolverine.fullName = 'Sergio';
})();
(() => {
    class Apocalipsis {
        constructor(name) {
            this.name = name;
        }
        static callApocalipsis() {
            if (!Apocalipsis.instance) {
                Apocalipsis.instance = new Apocalipsis("Soy apocalipsis... el unico");
            }
            return Apocalipsis.instance;
        }
        changeName(name) {
            this.name = name;
        }
    }
    const apocalipsisInstance = Apocalipsis.callApocalipsis();
    const apocalipsisInstance1 = Apocalipsis.callApocalipsis();
    const apocalipsisInstance2 = Apocalipsis.callApocalipsis();
    apocalipsisInstance.changeName('LUCIFER');
    console.log(apocalipsisInstance, apocalipsisInstance1, apocalipsisInstance2);
})();
//# sourceMappingURL=main.js.map