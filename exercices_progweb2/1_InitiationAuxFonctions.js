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

console.log("exercice 2");
// Ecrire une fonction qui retourne un nombre entier pseudo-aléatoire entre une borne inférieure et une borne supérieure
// (bornes entières et comprises dans l'intervalle).
function getRandom(min, max) {
    return Math.round((Math.random() * (max - min + 1)) + min);
}
for(let i = 0; i < 10; i++) {
    console.log(getRandom(1,6));
}

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
        if(i % 2 == 0 && i % 7 == 0) {
                console.log(i);
        }
    }
    console.log("Les nombres entiers pairs et multiples de 3, ainsi que les nombres entiers multiple de 7 compris entre 0 et n.");
    for (let i=0; i<=n; i++){
        if(i % 2 == 0 && i % 3 == 0) {
                console.log(i);
        }
        if(i % 7 == 0) {
            console.log(i);
        }
    }
    console.log("Les nombres entiers pairs et multiples de 3, mais non multiples de 7 compris entre 0 et n.");
    for (let i=0; i<=n; i++){
        if(i % 2 == 0 && i % 3 == 0 && i % 7 != 0) {
            console.log(i);
        }
    }
}

number(20);

//------------------------------------------------------------------//

console.log("exercice 5");
// Ecrire deux fonctions retournant réciproquement:
// - le nombre de piles obtenus sur un lancé
//   de n pièces de monnaies simulées par l'utilisation du générateur de nombre aléatoire.
// - le nombre de piles et de faces obtenus sur un lancé
//   de n pièces de monnaies simulées par l'utilisation du générateur de nombre aléatoire.

function compteurlance(n) {
    let npiles = 0;
    for(let i = 0; i < n; i++) {
        let lance = Math.round(Math.random());
        if(lance == 1) {
            npiles++;
        }
    }
    console.log("Nombre de piles :")
    return npiles;
}

console.log(compteurlance(10));

function compteurlancebetter(n) {
    let npiles = 0;
    for(let i = 0; i < n; i++) {
        let lance = Math.round(Math.random());
        if(lance == 1) {
            npiles++;
        }
    }
    let npaires = n - npiles;
    console.log("Nombre de piles :")
    console.log(npiles);
    console.log("Nombre de paires :")
    console.log(npaires);
}

console.log(compteurlancebetter(10));

//------------------------------------------------------------------//

console.log("exercice 6");
// Ecrire une fonction qui indique si un nombre entier est un nombre premier ou non.
// Tester la fonction avec les valeurs suivantes: 0, 1, 2, 3, 4, 9, 11, 26, 87178291197, 87178291199.

function npremier(a) {
    if (a < 2) {
        return false;
    }
    if (a === 2) {
        return true;
    }
    if (a % 2 === 0) {
        return false;
    }
    // On teste uniquement les diviseurs impairs jusqu'à racine(a)
    for (let i = 3; i <= Math.sqrt(a); i += 2) {
        if (a % i === 0) {
            return false;
        }
    }
    return true;
}

console.log(npremier(0));
console.log(npremier(1));
console.log(npremier(2));
console.log(npremier(3));
console.log(npremier(4));
console.log(npremier(9));
console.log(npremier(11));
console.log(npremier(26));
console.log(npremier(87178291197));
console.log(npremier(87178291199));

//------------------------------------------------------------------//

console.log("exercice 7");

// Ecrire une fonction nommée cl qui affiche dans la console, ligne après ligne, toutes les données
// fournies en paramètre. Exemple d'appel:
// cl(1, 2 ,"a", [3.1, 4, 159]);

function cl(...args) {
    for(let arg of args) {
        console.log(arg);
    }
}

cl(1, 2, "a", [3.1, 4, 159]);

//------------------------------------------------------------------//

console.log("exercice 8");

// Écrire deux fonctions :
//      double, qui retourne le double du nombre reçu ;
//      square, qui retourne le carré du nombre reçu.
// Écrire ensuite une fonction transform qui reçoit un nombre et une fonction en paramètres.
// Elle doit appliquer la fonction reçue au nombre, puis retourner le résultat.

function double(a) {
    return (a * 2);
}

function square(b) {
    return (b * b);
}

function transform(n, f) {
    console.log(f(n));
}

transform(5, double);
transform(5, square);