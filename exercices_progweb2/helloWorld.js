// let x = 7;       Déclaration de variable - Déconseillé en JS
const x = 7;        // Déclaration d'une constante - Conseillé en JS
//x = 7;            Fonctionne aussi

for (let i=0; i<100; i++){ // Boucle for

}


function foo(){ // Déclaration de la fonction
    return [6, 7]; //Ca retourne un tableau à deux éléments
}

foo(); // Appeler la fonction

function truc(){
    console.log("I'm a function");
}


function make(thing){ // Appel d'une fonction avec une fonction
    thing;
}

make(truc); //fonction avec une fonction en paramètre