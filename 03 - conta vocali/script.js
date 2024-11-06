/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';


// Dichiara la funzione qui.
function CercaVocali(stringa){
    const newArray = [];
    const arrayVocali = ['a','e','i','o','u'];
    for(let i = 0; i<stringa.length;i++){
        for(let j = 0; j <arrayVocali.length; j++){
            if(stringa[i] == arrayVocali[j]){
                newArray.push(stringa[i]);
            }
        }
    }
    return newArray;
}

// Invoca la funzione qui e stampa il risultato in console
const prova = CercaVocali(word);
console.log(prova);


//Risultato atteso se si passa 'javascript': 3 (a, a, i