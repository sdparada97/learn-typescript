import { printObject, genericFunction, genericFunctionArrow } from '../generics/generics';
import { Villian, Hero } from '../interfaces';

// printObject(123);
// printObject(new Date());
// printObject({a:1,b:2,c:3});
// printObject([1,2,3,4,5,6,7,8,9]);
// printObject('Hola MUNDO');

/* INSTANCES GENERICS FUNCTIONS */
// console.log(genericFuntion(3.1416).toFixed(2));
// console.log(genericFuntion('Hola Mundo').toUpperCase());
// console.log(genericFuntion( new Date()).getDate());

/* EXAMPLE GENERICS */
const deadPool = {
    name: 'DeadPool',
    realName: 'Wade Winston Wilson',
    dangerLevel: 30
}

console.log(genericFunctionArrow<Villian>(deadPool).dangerLevel);








