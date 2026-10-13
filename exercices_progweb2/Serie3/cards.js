const deckElement = document.querySelector('.deck');
console.log(deckElement);

const cards = deckElement.querySelectorAll('playing-card');
console.log(cards.length);

// Sélection de cartes

// 1 - clearSelection
function clearSelection() {
    const cards = deckElement.querySelectorAll('playing-card');
    for(const card of cards) {
        card.classList.remove('selected');
    }
}

// 2 - Boutons de sélection

// A - Bouton As de pique
const buttonA = document.querySelector('#select-ace-spade');

buttonA.addEventListener('click', () => {
  clearSelection();
  const card = deckElement.querySelector('#SPADE-ACE');
  card.classList.add('selected');
});

// B - Bouton tous les coeurs
const buttonHearts = document.querySelector('#select-hearts');

buttonHearts.addEventListener('click', () => {
    clearSelection();
    const cards = deckElement.querySelectorAll('.heart');
    for(const card of cards) {
        card.classList.add('selected');
    }
});

// C - Bouton tous les rouges
const buttonRed = document.querySelector('#select-red');

buttonRed.addEventListener('click', () => {
    clearSelection();
    const cards = deckElement.querySelectorAll('.heart, .diamond');
    for(const card of cards) {
        card.classList.add('selected');
    }
});

// D - Bouton toutes les faces
const buttonFaces = document.querySelector('#select-face-cards');

buttonFaces.addEventListener('click', () => {
    clearSelection();
    const cards = deckElement.querySelectorAll('[data-face-card]');
    for(const card of cards) {
        card.classList.add('selected');
    }
});

// E - Bouton faces rouges
const buttonRedFaces = document.querySelector('#select-red-face-cards');

buttonRedFaces.addEventListener('click', () => {
    clearSelection();
    const cards = deckElement.querySelectorAll('.heart[data-face-card], .diamond[data-face-card]');
    for(const card of cards) {
        card.classList.add('selected');
    }
});

// F - Bouton tous sauf piques
const buttonNotSpades = document.querySelector('#select-not-spades');

buttonNotSpades.addEventListener('click', () => {
    clearSelection();
    const cards = deckElement.querySelectorAll('.heart, .club, .diamond');
    for(const card of cards) {
        card.classList.add('selected');
    }
});

// Tirer une main


// 4
const deck = [...cards];

// 5
function shuffleInPlace(deck) {
    for (let i = deck.length - 1; i >= 1; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [deck[i], deck[j]] = [deck[j], deck[i]];
    }
    return deck;
}

const buttonDraw = document.querySelector('#draw-hand');

buttonDraw.addEventListener('click', () => {
    const copy = [...deck];
    shuffleInPlace(copy);
    const drawn = copy.slice(0, 5);

    const handCards = [];

    for(const card of drawn) {
        const clone = card.cloneNode(true);
        clone.removeAttribute('id');
        clone.classList.remove('selected');
        handCards.push(clone);
    }

    const handElements = document.querySelector('#hand');
    handElements.replaceChildren(...handCards);

});