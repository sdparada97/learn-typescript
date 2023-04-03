export const printObject = ( argument:any ) => {
    console.log(argument);
}

/* GENERICS FUNCTIONS */
/* code templates that you can define and reuse throughout your codebase */
export function genericFunction <T>( argument: T):T {
    return argument;
}

export const genericFunctionArrow = <T>(arg:T) => arg;