const flipCard = (card) => {
    card.isFlipped = true;
}
const checkMatch = (card1, card2) => {
    if (card1.value === card2.value) {
        return true;
    }
    return false;
}

export default { flipCard };