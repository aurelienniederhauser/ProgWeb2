const numbers = [1,2,3,4,5,6,7,8,9,0];

console.log(typeof numbers);
function double(n) {
    return n * 2;
}
const doubleValues = numbers.map(double);
// ce que map fait : consulter le tableau "numbers", effectuer la méthode "double" sur chaque valeur et push ces nouvelles valeurs.
console.log(numbers);
console.log(doubleValues);