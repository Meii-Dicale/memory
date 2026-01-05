import gameState from './gameState.js';

// ===== Variables d'état local =====
let choosenCards = [];
let isProcessing = false; // Bloque les clics pendant le délai de retournement

// ===== Fonctions utilitaires de cartes =====
const flipCard = (card) => {
    // Vérifications : ne pas cliquer si la carte est déjà retournée, matchée, ou si on est en train de traiter
    if (!canFlipCard(card)) {
        return false;
    }
    
    card.isFlipped = true;
    addChoosenCard(card);
    
    // Si on a 2 cartes, déclencher la vérification
    if (isChoosenCards()) {
        choosenCardsFunction(choosenCards[0], choosenCards[1]);
    }
    
    return true;
}

const canFlipCard = (card) => {
    // Ne pas cliquer si on est en train de traiter 2 cartes
    if (isProcessing) {
        return false;
    }
    
    // Ne pas cliquer si la carte est déjà retournée
    if (card.isFlipped) {
        return false;
    }
    
    // Ne pas cliquer si la carte est déjà trouvée
    if (card.isMatched) {
        return false;
    }
    
    // Ne pas cliquer si on a déjà 2 cartes retournées
    if (choosenCards.length >= 2) {
        return false;
    }
    
    // Ne pas cliquer si la carte est déjà dans les cartes choisies
    if (choosenCards.includes(card)) {
        return false;
    }
    
    return true;
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
    isProcessing = true;
    gameState.tryCount++;
    
    if (checkMatch(card1, card2)) {
        // Les cartes correspondent
        card1.isMatched = true;
        card2.isMatched = true;
        clearChoosenCards();
        isProcessing = false;
        
        // Vérifier si toutes les cartes sont matchées
        if (allCardsMatched()) {
            gameEnd();
        }
    } else {
        // Les cartes ne correspondent pas, les retourner après 2 secondes
        setTimeout(() => {
            unflipCard(card1);
            unflipCard(card2);
            clearChoosenCards();
            isProcessing = false;
        }, 2000);
    }
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
    // Réinitialiser l'état
    gameState.tryCount = 0;
    gameState.timerCount = 0;
    clearChoosenCards();
    isProcessing = false;
    
    // Réinitialiser toutes les cartes
    gameState.cards.forEach(card => {
        card.isFlipped = false;
        card.isMatched = false;
    });
    
    shuffleCards();
    startTimer();
}

const gameEnd = () => {
    stopTimer();
    alert(gameState.victoryMessage);
}

export default { 
    flipCard, 
    canFlipCard,
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
