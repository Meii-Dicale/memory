import gameState from "../game/gameState.js";
import gameLogic from "../game/gameLogic.js";

export function initBoard() {
    const gameContainer = document.querySelector(".game-container");

    const table = document.createElement("table");
    table.classList.add("memory-grid");

    let index = 0;
    const cards = gameState.cards; // Récupérer les cartes actuelles à chaque init
    const columns = 5; // Nombre de colonnes souhaité
    const rows = Math.ceil(cards.length / columns); // Calcul dynamique des lignes

    for (let i = 0; i < rows; i++) {
        const row = document.createElement("tr");

        for (let j = 0; j < columns; j++) {
            if (index >= cards.length) break; // Arrêter si plus de cartes

            const cell = document.createElement("td");
            cell.classList.add("memory-cell");

            const card = cards[index];

            const img = document.createElement("img");
            img.id = `card-${card.id}`;
            img.src = "src/assets/back.jpg";
            img.classList.add("back-card");

            cell.dataset.cardId = card.id;
            cell.appendChild(img);
            cell.addEventListener("click", () => {
                const cardId = parseInt(cell.dataset.cardId);
                const card = gameState.cards.find(c => c.id === cardId);
                gameLogic.flipCard(card);
                console.log(card);
            });


            row.appendChild(cell);
            index++;
        }

        table.appendChild(row);
    }

    console.log("ici");

    gameContainer.appendChild(table);

}
