import { generate, count } from "random-words";
// Node.js NPM pakket, https://www.npmjs.com/package/random-words // 

import galgje2 from './images/galgje2.svg';
import galgje3 from './images/galgje3.svg';
import galgje4 from './images/galgje4.svg';
import galgje5 from './images/galgje5.svg';
import galgje6 from './images/galgje6.svg';
import galgje7 from './images/galgje7.svg';
import galgje8 from './images/galgje8.svg';
// omdat ik een web builder gebruik (anders kan ik geen node gebruiken), moet ik de fotos importen zodat javascript de fotos kan vinden en niet de hash/cache fotos van de webbuilder gebruikt


let lengteinput = document.querySelector("#lengteinput")
let lettergok = document.querySelector("#lettergok")
let woord;
let geradenletters = [];

function genereer() {
    let woordlengte = parseInt(lengteinput.value, 10);
    woord = generate({ minLength: 1 , maxLength: woordlengte });
    console.log(woord);
    document.querySelector("h1").textContent = woord;
}   	
document.getElementById("generate").addEventListener("click", genereer)

let kansen = 7;

function check() {
    let gokletter = lettergok.value.toLowerCase();
    if (woord.includes(gokletter)) {
        document.getElementById("feedback").textContent = "Goed gedaan!";
        geradenletters.push(gokletter);
    }
    else {
        document.getElementById("feedback").textContent = "fout!";
        kansen -= 1;
        if (kansen == 6) {document.getElementById("galgjefoto").src = galgje2;}
        if (kansen == 5) {document.getElementById("galgjefoto").src = galgje3;}
        if (kansen == 4) {document.getElementById("galgjefoto").src = galgje4;}
        if (kansen == 3) {document.getElementById("galgjefoto").src = galgje5;}
        if (kansen == 2) {document.getElementById("galgjefoto").src = galgje6;}
        if (kansen == 1) {document.getElementById("galgjefoto").src = galgje7;}
        if (kansen == 0) {document.getElementById("galgjefoto").src = galgje8;}
        console.log("er zijn nog " + kansen + " over!");
}
// eigenlijk wilde ik de galgje foto updaten met een template literal 
//"document.getElementById("galgjefoto").src = `images/galgje${kansen}.svg`", maar dat werkte niet omdat parcel images renamed naar een hash;

let galgjewoord = "";
for (let letter of woord) {
        if (geradenletters.includes(letter)) {
            galgjewoord += letter;
        }
        else {
            galgjewoord += "_";
        }
    }
    document.querySelector("h1").textContent = galgjewoord  ;
}

document.getElementById("gok").addEventListener("click", check);    