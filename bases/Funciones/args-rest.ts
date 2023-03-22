(() =>{

    /* ... --> Indica que se puede admitir muchos argumentos dentro de la funcion (INDICAR TIPO DE DATO) */
    const fullName = (firstName: string, ...restArgs: string[]) =>{
        return `${firstName} ${restArgs.join(' ')}`
    }

    const superman = fullName('Clark','Joseph','Kent')
    console.log(superman);
    

})()