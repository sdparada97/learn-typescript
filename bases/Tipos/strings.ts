(() => {
    /* Definición de strings */
    const batman:string = 'batman';
    const linternaVerde:string = "Linterna Verde";
    const volcanNegro:string = `Héroe: Volcan Negro`;

    console.log(`I´M ${batman.toLocaleUpperCase()}`);

    /* '?' --> Sirve para saber es undefiend or null o hay un dato */
    console.log(batman[10]?.toUpperCase() || 'No esta presente');
    
})()