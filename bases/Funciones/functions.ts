(() =>{

    const hero:string = 'Flash';

    /* Función tradicional */
    function getName(): string {
        return hero;
    }

    /* Función estilo flecha */
    const activateBatisignal = () =>{
        return 'BatiSeñal Activada !!';
    }

    console.log(typeof activateBatisignal);

    const heroName = getName();

})()