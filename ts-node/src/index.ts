import { Pokemon } from './decorators/pokemon-class';

const charmander = new Pokemon('Charmander');
// (Pokemon.prototype as any).customName = 'Pikachu';
charmander.publicApi = 'www.google.com';
console.log(charmander);
// charmander.savePokemonToDB(-40);