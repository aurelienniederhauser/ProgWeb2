// 1 - Ecrire une fonction qui retourne la plus grande valeur parmi les trois nombres fournis en paramètre.
console.log("exercice 1");
function compare(a, b, c){

    if (a > b){
        if (a > c){
            console.log(a);
        } else {
            console.log(c);
        }
    } else if (a < b) {
        if (b > c){
            console.log(b);
        } else {
            console.log(c);
        }
    }
}

const a = 4;
const b = 20;
const c = 3;

compare(a, b, c);

//------------------------------------------------------------------//

console.log("exercice 3");
// 3 - Ecrire deux fonctions compareA et compareB qui retournent les mêmes résultats que dans les exemples suivant:
//compareA(4, '4'); // true 
//compareA(4.0, '4'); // true
//compareA(4, 'quatre'); // false
//compareB(8, '8'); // false
//compareB(8, 'huit'); // false

function compareA(a,b) {
    if(a == b) {
        console.log(true);
    } else {
        console.log(false);
    }
}

function compareB(a,b) {
    if(a === b) {
        console.log(true);
    } else {
        console.log(false);
    }
}

compareA(4, '4'); // true 
compareA(4.0, '4'); // true
compareA(4, 'quatre'); // false
compareB(8, '8'); // false
compareB(8, 'huit'); // false

//------------------------------------------------------------------//

console.log("exercice 4");
// En fonction d'un nombre n (ou n > 0) donné en paramètre, écrire une fonction qui affiche dans la console :
// - Les nombres entiers pairs compris entre 0 et n.
// - Les nombres entiers pairs et multiples de 7 compris entre 0 et n.
// - Les nombres entiers pairs et multiples de 3, ainsi que les nombres entiers multiple de 7 compris entre 0 et n.
// - Les nombres entiers pairs et multiples de 3, mais non multiples de 7 compris entre 0 et n.

function number(n) {
    console.log("Les nombres entiers pairs.");
    for (let i=0; i<=n; i++){
        if(i % 2 == 0) {
            console.log(i);
        }
    }
    console.log("Les nombres entiers pairs et multiples de 7 compris entre 0 et n.");
    for (let i=0; i<=n; i++){
        if(i % 2 == 0) {
            if(i % 7 == 0) {
                console.log(i);
            }
        }
    }
    console.log("Les nombres entiers pairs et multiples de 3, ainsi que les nombres entiers multiple de 7 compris entre 0 et n.");
    for (let i=0; i<=n; i++){
        if(i % 2 == 0) {
            if(i % 3 == 0) {
                console.log(i);
            }
        }
        if(i % 7 == 0) {
            console.log(i);
        }
    }
}

number(20);