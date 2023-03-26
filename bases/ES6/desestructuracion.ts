(() => {
    type Avengers = {
        nick: string,
        ironman: string,
        vision: string,
        activos: boolean,
        poder: number,
    }
    const avengers: Avengers = {
        nick: 'Samuel L. Jackson',
        ironman: 'Robert Downey Jr',
        vision: 'Paul Betanny',
        activos: true,
        poder: 1500.123345
    }

    /* 
    DESESTRUTURACIÓN DE OBJETOS: 
    Sacar propiedades de cualquier objetos.
    */

    // const {poder, vision} = avengers
    // console.log(poder.toFixed(2), vision.toUpperCase());
    const printAvenger = ({ironman, ...resto }:Avengers) => {
        console.log(ironman,resto);
    }
    // printAvenger(avengers);

    /*
    DESESTRUCTURACION DE ARREGLOS
    */
    const avengersArr: [string,boolean,number] = ['Cap. America',true,150.23]
    const [capitan,isAvailable,] = avengersArr
    // console.log({capitan,isAvailable});
    
    
})()