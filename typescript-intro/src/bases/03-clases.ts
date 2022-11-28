import axios from 'axios';
import {Move, PokeapiResponse } from '../interfaces/pokeapi-response-interface';

export class Pokemon {

    //getters = obtener valores de las propiedades de la clase 
    get imageUrl(){
        return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${this.id}.png`
    }


    constructor( // constructor es un método especial que se ejecuta cuando se crea una instancia de la clase
        public readonly id: number, // readonly hace que el atributo no se pueda modificar
        public name: string,
        public age: number,
        
    ) {}

    //metodos = funciones que se ejecutan dentro de la clase 

    scream(){
        console.log(`${this.name.toLocaleUpperCase()} screams!!!!`);
    }

    speak(){
        console.log(`${this.name} says: Hello!`);
    }

    async getMoves(): Promise<Move[]> { 
        const {data} = await axios.get<PokeapiResponse>(`https://pokeapi.co/api/v2/pokemon/${this.id}`);
        
        console.log(data.moves);

        return data.moves;
        
    }

    

}

export const bulbasaur = new Pokemon(1, 'Bulbasaur', 27);  // new crea una instancia de la clase Pokemon

/* console.log(bulbasaur);

bulbasaur.scream();
bulbasaur.speak(); */

console.log(bulbasaur.getMoves());