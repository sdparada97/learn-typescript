(() => {

    /* ? --> simbolo en los argumentos para que ese argumento sea opcional */
    const fullName = (firstName: string, lastName?:string): string =>{
        return `${firstName} ${lastName || '_____'}`
    }

    const name = fullName('Tony');
    console.log(name);
    
})()