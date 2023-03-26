(() =>{
    class Avenger {
        name;
        power;

        constructor(name = "No name", power = 0){
            this.name = name
            this.power = power
        }
    }

    class FlyAvenger extends Avenger {
        fly;

        constructor(name, power){
            super(name,power)
            this.fly = true
        }
    }

    const hulk = new Avenger('Hulk', 9001)
    const falcon = new FlyAvenger('Falcon', 50)
    console.log(hulk)
    console.log(falcon)
})()