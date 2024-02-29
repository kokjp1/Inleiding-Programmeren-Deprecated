import { generate, count } from "random-words";

console.log(generate());
//output: 'army'

document.querySelector("h1").textContent = generate();