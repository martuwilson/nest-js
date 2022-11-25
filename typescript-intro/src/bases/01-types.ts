
export const name= "Martin"; 

export const age: number = 26;

export const isValid: boolean = true;

export let name2: string = "Ezequiel";

name2 = "Eze";


export const templateString = `
Esto en un string multi linea
que puede tener " dobles, ' simples
y tambien pueden inyectarse valores (ver código): ${name2}
expresiones matemáticas: ${1+1}
numeros: ${age}
booleanos: ${isValid}

`; 

console.log(templateString);
