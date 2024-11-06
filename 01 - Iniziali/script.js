/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];


// Dichiara la funzione qui.
function CicloArray(){
    const nuovaArray = [];
    for(let i = 0; i<names.length;i++){
        nuovaArray.push(names[i][0]);
    }


    return nuovaArray;
}

const iniziali = CicloArray();
console.log(iniziali);

// Invoca la funzione qui e stampa il risultato in console



//Risultato atteso: ["A", "L", "M", "A", "G", "A"]