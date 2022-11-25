
export class Pokemon {
    constructor( // constructor es un método especial que se ejecuta cuando se crea una instancia de la clase
        public readonly id: number, // readonly hace que el atributo no se pueda modificar
        public name: string,
        public age?: number
    ) {}
}

export const bulbasaur = new Pokemon(1, 'Bulbasaur', 27);  // new crea una instancia de la clase Pokemon