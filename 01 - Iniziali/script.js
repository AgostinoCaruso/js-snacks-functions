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
//console.log(iniziali);
const arrow = (names) => names.map((nome) => nome[0]);
//console.log(arrow(names));


function zizizo(){
    const arrayziziz= [];
    names.forEach(ciccio => {
        arrayziziz.push(ciccio[0]);
    });    
    return arrayziziz;
}
const prova = zizizo();
console.log(prova);

//Risultato atteso: ["A", "L", "M", "A", "G", "A"]