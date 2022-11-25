
/* export const pokemonsIds: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; */

/* pokemonsIds.push(+'11'); */  // El + convierte el string en number



interface Pokemon { // interface es una forma de definir un tipo de dato
    id: number;
    name: string; 
    age?: number; // El signo de interrogación indica que es opcional
    
}

export const bulbasaur: Pokemon = {
    id: 1,
    name: 'Bulbasaur',
    age: 10
}

export const charmander: Pokemon = {
    id: 2,
    name: 'Charmander',
    age: 10
}

export const pokemons: Pokemon[] = [];

pokemons.push(charmander, bulbasaur);

console.log(pokemons);