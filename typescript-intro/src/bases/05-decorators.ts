
class NewPokemon {
    constructor(
        public readonly id: number,
        public name: string,
    ) {}

    scream() {
        console.log('NO QUIERO GRITAR');
    }

    talk() {
        console.log('NO QUIEOR HABLAR');
    }
}

const MyDeco = () => {
    return (target: Function) => {
        /* console.log('target', target); */
        return NewPokemon;
    };
}


@MyDeco()
export class Pokemon{
    constructor(
        public readonly id: number,
        public name: string,
    ) {}

    scream() {
        console.log(`${ this.name.toUpperCase() }!!!`);
    }

    talk() {
        console.log(`${ this.name }, ${ this.name }`);
    }
    
}

export const charmander = new Pokemon( 4, 'Charmander' );

charmander.scream();
charmander.talk();