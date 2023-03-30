// Crear interfaces
interface Auto {
  encender: boolean;
  velocidadMaxima: number;
  acelerar(): void;
  };

// Cree una interfaz para validar el auto (el valor enviado por parametro)
const conducirBatimovil = ( auto: Auto ):void => {
  auto.encender = true;
  auto.velocidadMaxima = 100;
  auto.acelerar();
};

const batimovil: Auto = {
  encender:false,
  velocidadMaxima:0,
  acelerar(){
    console.log("...... gogogo!!!");
  }
};

// Cree una interfaz con que permita utilzar el siguiente objeto
interface Guason {
  reir?: boolean;
  comer?: boolean;
  llorar?: boolean;
};
// utilizando propiedades opcionales

const guason: Guason = {
  reir: true,
  comer:true,
  llorar:false
};

const reir = ( guason :Guason ):void => {
  if( guason.reir ){
    console.log("JAJAJAJA");
  }
}


// Cree una interfaz para la siguiente funcion
interface getCity{
  (ciudadanos: string[]): number;
}

const ciudadGotica: getCity = ( ciudadanos:string[] ):number => {
  return ciudadanos.length;
}

// Cree una interfaz que obligue crear una clase
interface Humano{
  nombre: string;
  edad: number;
  sexo: string;
  estadoCivil: string;

  imprimirBio():void;
}
// con las siguientes propiedades y metodos

/*
  propiedades:
    - nombre
    - edad
    - sexo
    - estadoCivil
    - imprimirBio(): void // en consola una breve descripcion.
*/
class Persona implements Humano {
  constructor(
      public nombre: string,
      public edad: number,
      public sexo: string,
      public estadoCivil: string
    ){};
  imprimirBio(): void {
    console.log(`Se creo la persona ${this.nombre} - ${this.edad} años`);
  };
}

const persona1 = new Persona('Sergio',23,'Hombre','Soltero');
console.log(persona1);
persona1.imprimirBio();
