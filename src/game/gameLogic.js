import gameState from './gameState.js';

// ===== Variables d'état local =====
let choosenCards = [];

// ===== Fonctions utilitaires de cartes =====
const flipCard = (card) => {
    card.isFlipped = true;
}

const unflipCard = (card) => {
    card.isFlipped = false;
}

const checkMatch = (card1, card2) => {
    if (card1.value === card2.value) {
        return true;
    }
    return false;
}

// ===== Fonctions de gestion des cartes choisies =====
const addChoosenCard = (card) => {
    choosenCards.push(card);
}

const clearChoosenCards = () => {
    choosenCards.length = 0;
}

const isChoosenCards = () => {
    return choosenCards.length === 2;
}

// ===== Fonctions de logique métier =====
const shuffleCards = () => {
    gameState.cards.sort(() => Math.random() - 0.5);
}

const choosenCardsFunction = (card1, card2) => {
    gameState.tryCount++;
    if (checkMatch(card1, card2)) {
        card1.isMatched = true;
        card2.isMatched = true;
    } else {
        // ajouter un timer de 2 seconde
        setTimeout(() => {
            unflipCard(card1);
            unflipCard(card2);
        }, 2000);
    }
    clearChoosenCards();
}

// ===== Fonctions de timer =====
const startTimer = () => {
    if (gameState.timerInterval) {
        clearInterval(gameState.timerInterval);
    }
    gameState.timerInterval = setInterval(() => {
        gameState.timerCount++;
    }, 1000);
}

const stopTimer = () => {
    if (gameState.timerInterval) {
        clearInterval(gameState.timerInterval);
        gameState.timerInterval = null;
    }
}

// ===== Fonctions de vérification d'état =====
const allCardsMatched = () => {
    return gameState.cards.every(card => card.isMatched);
}

// ===== Fonctions de jeu globales =====
const gameStart = () => {
    shuffleCards();
    startTimer();
}

const gameEnd = () => {
    stopTimer();
    alert(gameState.victoryMessage);
}

export default { 
    flipCard, 
    unflipCard, 
    checkMatch, 
    shuffleCards, 
    startTimer, 
    stopTimer, 
    choosenCardsFunction, 
    addChoosenCard,
    clearChoosenCards,
    isChoosenCards,
    allCardsMatched,
    gameStart, 
    gameEnd 
};
