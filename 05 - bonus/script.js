/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito. 
Il saluto deve essere :
buongiorno se è mattina (fino alle 13), 
buon pomeriggio se è pomeriggio (fino alle 17) 
e buonasera se è sera (oltre le 17)
*/

const name = 'Mario';


// Dichiara la funzione qui.
const today = new Date();
const prendoOre = today.getHours();
function Saluta(stringa){
    if(prendoOre > 6 && prendoOre <=13)
        return `Buongiorno ${stringa}`; 
    else if(prendoOre >13 && prendoOre <=17){
        return `Buon pomeriggio ${stringa}`;
    }else{
        return `Buonasera ${stringa}`;
    }
}

// Invoca la funzione qui e stampa il risultato in console
const salutiamo = Saluta(name);
console.log(salutiamo);

//Risultato atteso se si passa 'Mario' alle 18: // Buonasera Mario.