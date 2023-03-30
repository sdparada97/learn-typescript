(() => {
    interface Xmen {
        name: string;
        realName: string;
        mutantPower(id: number):string;
    }

    interface Human {
        age: number;
    }

    class Mutant implements Xmen, Human{
        constructor(
            public age: number,
            public name: string,
            public realName: string
        ){}

        mutantPower(power: number): string {
            return `POWER: ${power}`;
        }
    }

    const wolverine = new Mutant(25,'Wolverine','Logan');
    // console.log(wolverine);
    // console.log(wolverine.mutantPower(3000));
    
    

})()