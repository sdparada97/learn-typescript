/* NO USAR HUMANAMENTE POSIBLE ESTE TIPO DE DATO EN TYPESCRIPT */
(() =>{
    let avenger: any;
    let exist;
    let power;

    avenger = 'Doctor Strange';
    /* console.log(avenger.charAt(0)); */
    /* as --> Sirve para casting los datos */
    console.log((avenger as string).charAt(0));

    avenger = 1234.45645;
    console.log(avenger.toFixed(2));
    
    console.log(exist);
    console.log(power);
    
})()