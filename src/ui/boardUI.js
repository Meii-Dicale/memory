import gameState from "../game/gameState.js";

const cards = gameState.cards;

export function initBoard() {
    const gameContainer = document.querySelector(".game-container");

    const table = document.createElement("table");
    table.classList.add("memory-grid");



    let index = 0;

    for (let i = 0; i < 5; i++) {
        const row = document.createElement("tr");

        for (let j = 0; j < 2; j++) {
            const cell = document.createElement("td");
            cell.classList.add("memory-cell");

            const card = cards;

            const img = document.createElement("img");
            img.src = card.value;
            img.classList.add("hidden");

            cell.dataset.cardId = card.id;
            cell.appendChild(img);

            row.appendChild(cell);
            index++;
        }

        table.appendChild(row);
    }

    console.log("ici");

    gameContainer.appendChild(table);
}