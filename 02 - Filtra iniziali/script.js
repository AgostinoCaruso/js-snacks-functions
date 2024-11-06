/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];


// Dichiara la funzione qui.
function CicloArray(myArray, lettera){
    const newArray = [];
    for(let i = 0; i<myArray.length; i++){
        if(myArray[i][0].toLowerCase() == lettera.toLowerCase()){
            newArray.push(myArray[i]);
        }
    }
    return newArray;
}

// Invoca la funzione qui e stampa il risultato in console
const parolaInzialeDiLettera = CicloArray(names, 'a');
console.log(parolaInzialeDiLettera);

//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]