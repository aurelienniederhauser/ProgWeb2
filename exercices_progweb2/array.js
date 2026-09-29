const numbers = [1,2,3,4,5,6,7,8,9,0];

console.log(typeof numbers);

// Version 1
function double(n) {
    return n * 2;
}
const doubleValues = numbers.map(double);
// ce que map fait : consulter le tableau "numbers", effectuer la méthode "double" sur chaque valeur et push ces nouvelles valeurs.
// map retourne toujours un tableau de la même taille que celui donné

// Version 2
const doubleValuesD = numbers.map(function(n) {
    return n * 2;
})

// Version 3
const doubleValuesE = numbers.map(n => n*2);

console.log(numbers);
console.log(doubleValues);