/* DECORATOR */
function printToConsole(constructor: Function){
    console.log(constructor);
}

/* FACTORY DECORATORS : ARE FUNCTIONS THAT RETURN ANOTHER FUNCTION*/
const printToConsoleConditional = (print: boolean=false):Function => {
    if(print){
        return printToConsole;
    }else{
        return () => {};
    }
}

/* EXAMPLE DECORATOR */
const bloquearPrototipo = function(constructor: Function){
    Object.seal(constructor);
    Object.seal(constructor.prototype);
}

/* FACTORY DECORATOR: METHODS */
function CheckValidPokemonId(){
    // args para decorar un metodo
    return function(target:any, propertyKey: string, descriptor: PropertyDescriptor){
        const originalMethod = descriptor.value
        descriptor.value = (id: number) => {
            if(id<1||id>800){
                return console.error(`El ID del Pokemon no esta dentro del rango`)
            }else{
                return originalMethod(id)
            }
        }
    }
}

/* FACTORY DECORATOR: PROPERTIES */
function readOnly(isWritable:boolean=true):Function{
    //args para decorar una propiedad
    return function(target: any, propertyKey:string){
        const descriptor: PropertyDescriptor ={ 
            get() : string {
                console.log(this);
                return 'Fernando';
            },
            set(this, val) {
                // console.log(this, val);
                Object.defineProperty(this, propertyKey, {
                    value: val,
                    writable: !isWritable,
                    enumerable: false
                })
            }
            
        }
        return descriptor;
    }
}


/* DECORATORS: ARE FUNCTIONS THAT MODIFY IN THE MOMENT OF TRANSPILATION */
@bloquearPrototipo
@printToConsoleConditional()
export class Pokemon {
    
    @readOnly(false)
    public publicApi: string = `https://pokeapi.co`;
    constructor(
        public name: string
    ){}

    @CheckValidPokemonId()
    savePokemonToDB(id:number){
        console.log(`Se ha grabado el pokemon ${id}`);
        
    }
}