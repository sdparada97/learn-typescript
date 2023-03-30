(() => {

    class Avenger {
        constructor(
            public nombre: string,
            public nombreReal: string,
        ){
            // console.log('Constructor Avenger Llamado!!');
            
        }
        
        protected getFullName() {
            return `${this.nombre} - ${this.nombreReal}`;
        }

    }

    /* HERENCIA DE CLASES */
    class Xmen extends Avenger{
        constructor(nombre: string, nombreReal: string, public isMutant: boolean){
            super(nombre, nombreReal)
            // console.log('Constructor Xmen llamado');
        }

        /* GETTERS AND SETTERS */
        get fullName(){
            return `${this.nombre} - ${this.nombreReal}`
        }

        set fullName(nombreReal:string){

            if(nombreReal.length < 3){
                throw new Error("El nombre debe ser mayor a 3 letras")
            }

            this.nombreReal = nombreReal;
        }

        getFullNameDesdeXmen(){
            console.log(super.getFullName());
        }
    }

    const wolverine: Xmen = new Xmen('WOLVERINE','Logan', true);
    // console.log(wolverine.fullName);
    
    wolverine.fullName = 'Sergio'
    // console.log(wolverine.fullName);
    // wolverine.getFullNameDesdeXmen()
    

})()