(() =>{

    const addNumbers = (a:number, b:number) => a + b;
    const greet = (name:string) => `Hola ${name}`;
    const saveToWorld = () => 'EL mundo esta salvado!';

    let myFunction: Function;
    /* let myFunction: (ARGS CON SU TIPO DE DATO) => TIPO DE DATO; */

    /* myFunction = 10
    console.log(myFunction); */

    myFunction = addNumbers
    console.log(myFunction(1,2));
    
    myFunction = greet
    console.log(myFunction('Sergio'));

    myFunction = saveToWorld
    console.log(myFunction());

})()