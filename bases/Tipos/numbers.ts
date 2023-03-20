(() => {
    let avengers:number = 10;

    const villians:number = 20;

    if (avengers < villians) {
        console.log("Estamos en problemas !!");
    } else {
        console.log("Nos salvamos !!");
    }
    
    /* NaN es considerado un número */
    avengers = Number('55A');
    console.log({avengers});
})()