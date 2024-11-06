/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito (es. "Ciao [nome]") */

const name = 'Mario';


// Dichiara la funzione qui.
function Saluta(stringa){
    return `Ciao ${stringa}`; 
}

// Invoca la funzione qui e stampa il risultato in console
const salutiamo = Saluta(name);
console.log(salutiamo);


//Risultato atteso se si passa 'Mario': // ciao Mario