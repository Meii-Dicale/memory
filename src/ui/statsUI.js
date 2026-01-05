// ===== Récupération des éléments du DOM =====
const getTriesElement = () => {
    return document.getElementById('tries');
}

const getTimeElement = () => {
    return document.getElementById('time');
}

// ===== Fonctions de mise à jour des statistiques =====
const updateTries = (count) => {
    const triesElement = getTriesElement();
    if (triesElement) {
        triesElement.textContent = count;
    }
}

const updateTime = (seconds) => {
    const timeElement = getTimeElement();
    if (timeElement) {
        timeElement.textContent = seconds;
    }
}

// ===== Fonction pour formater le temps (optionnel) =====
const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}:${secs.toString().padStart(2, '0')}`;
}

// ===== Fonction pour mettre à jour le temps formaté =====
const updateTimeFormatted = (seconds) => {
    const timeElement = getTimeElement();
    if (timeElement) {
        timeElement.textContent = formatTime(seconds);
    }
}

//update le nombre de victoires
const getWinCountElement = () => {
    return document.getElementById('win-count');
}
const updateWinCount = (count) => {
    const winCountElement = getWinCountElement();
    if (winCountElement) {
        winCountElement.textContent = count;
    }
}

    

export default {
    updateTries,
    updateTime,
    updateTimeFormatted,
    formatTime,
    updateWinCount
};
