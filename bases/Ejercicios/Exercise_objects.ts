(() =>{
  // Objetos
  const batimovil: { carroceria:string, modelo:string, antibalas:boolean,pasajeros:number} = {
    carroceria: "Negra",
    modelo: "6x6",
    antibalas: true,
    pasajeros:4
  };

  const bumblebee:{ carroceria:string, modelo:string, antibalas:boolean,pasajeros:number, disparar?: ()=>void} = {
    carroceria: "Amarillo con negro",
    modelo: "4x2",
    antibalas: true,
    pasajeros:4,
    disparar(){ // El metodo disparar es opcional
      console.log("Disparando");
    }
  };


  // Villanos debe de ser un arreglo de objetos personalizados
  const villanos:{nombre:string, edad:number|undefined , mutante:boolean}[] = [{
    nombre:"Lex Luthor",
    edad: 54,
    mutante:false
  },{
    nombre: "Erik Magnus Lehnsherr",
    edad: 49,
    mutante: true
  },{
    nombre: "James Logan",
    edad: undefined,
    mutante: true
  }];

  // Multiples tipos
  // cree dos tipos, uno para charles y otro para apocalipsis
  type Charles = {
    poder:string,
    estatura: number
  };

  type Apocalipsis = {
    lider:boolean,
    miembros: string[]
  }

  const charles = {
    poder:"psiquico",
    estatura: 1.78
  };

  const apocalipsis = {
    lider:true,
    miembros: ["Magneto","Tormenta","Psylocke","Angel"]
  }

  console.log(apocalipsis);

  // Mystique, debe poder ser cualquiera de esos dos mutantes (charles o apocalipsis)
  let mystique: (Charles|Apocalipsis);

  mystique = charles;
  mystique = apocalipsis;

})()