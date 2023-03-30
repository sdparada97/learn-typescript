(() =>{
    class Avenger {

        /* ARGUMENTOS STATICOS */
        static avgAge: number = 35;
        static getAvgAge(){
            return this.name;
        }

        /* METODO CONSTRUCTOR DE LAS CLASES */
        /* Se define como sera la clase */
        constructor(
            /* Argumentos privados y publicos segun la lógica de la clase */
            private name:string, 
            private team:string, 
            public realName?:string
            ){}
        
        /* METODOS PROPIOS DE LA CLASE */
        public bio(){
            return `${this.name} - ${this.team}`
        }
    }


    // const antman: Avenger = new Avenger('Antman','Capitan', 'Scott Lang');
    // console.log(antman);

    // console.log(Avenger.getAvgAge);
    
})()