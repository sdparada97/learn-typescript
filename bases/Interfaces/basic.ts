(() => {

    /* INTERFACE VS TYPE => INTERFACE COULD EXTENDS,BUT TYPE NOT */
    interface Hero {
        name: string, 
        age?: number,
        powers: number[], 
        getName?: () => string
    }

    let flash: Hero = {
        name: 'Barry Allen',
        age: 24,
        powers: [1,2]
    }

    let superman: Hero = {
        name: 'Clark Kent',
        age: 40,
        powers: [1]
    }

})()