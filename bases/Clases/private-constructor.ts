(() =>{

    /* PATRON SINGLETON */
    class Apocalipsis {
        static instance: Apocalipsis;
        private constructor(
            public name: string
        ){}

        static callApocalipsis(): Apocalipsis{
            if(!Apocalipsis.instance){
                Apocalipsis.instance = new Apocalipsis("Soy apocalipsis... el unico")
            }

            return Apocalipsis.instance;
        }

        changeName(name:string){
            this.name = name
        }
    }

    

    const apocalipsisInstance =  Apocalipsis.callApocalipsis()
    const apocalipsisInstance1 = Apocalipsis.callApocalipsis()
    const apocalipsisInstance2 = Apocalipsis.callApocalipsis()

    apocalipsisInstance.changeName('LUCIFER')

    console.log(apocalipsisInstance,apocalipsisInstance1,apocalipsisInstance2);
    
})()