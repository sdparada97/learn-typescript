(() => {

    /* ? --> simbolo en los argumentos para que ese argumento sea opcional */
    const fullName = (firstName: string, lastName?:string, upper:boolean = false): string =>{
        if(upper){
            return `${firstName} ${lastName || '_____'}`.toUpperCase()
        }else{
            return `${firstName} ${lastName || '_____'}`
        }
    }

    const name = fullName('Tony', 'Stark',true);
    console.log(name);
    
})()