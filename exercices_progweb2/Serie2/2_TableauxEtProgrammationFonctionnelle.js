// Tableaux de chaînes de caractères

const strings = Object.freeze(["Sator", "Arepo", "Tenet", "Opera", "Rotas"]);

console.log(strings);
console.log(...strings);

const cloneStrings = [...strings]; // shallow copy
console.log(cloneStrings);

const cloneStringsAdded = ["lorem", ...strings]; // shallow copy
console.log(cloneStringsAdded);