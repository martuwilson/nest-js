import './style.css'
import typescriptLogo from './typescript.svg'
import { setupCounter } from './counter'
/* import {name, age} from './bases/01-types' */
/* import {bulbasaur, pokemons} from './bases/02-objects' */
import {bulbasaur} from './bases/03-clases'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <h1>Typescript Intro</h1>
    <img src="${typescriptLogo}" alt="Typescript Logo" width="100" />
    <h2>${bulbasaur.name}</h2>
    <h2>${bulbasaur.id}</h2>
  </div>
    
    
`

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
