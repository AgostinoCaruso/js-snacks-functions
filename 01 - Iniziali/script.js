/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];


// Dichiara la funzione qui.
function CicloArray(myArray){
    const nuovaArray = [];
    for(let i = 0; i<myArray.length;i++){
        nuovaArray.push(myArray[i][0]);
    }


    return nuovaArray;
}


// Invoca la funzione qui e stampa il risultato in console
const iniziali = CicloArray(names);
console.log(iniziali);



//Risultato atteso: ["A", "L", "M", "A", "G", "A"]