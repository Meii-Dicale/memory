import gameState from "../game/gameState.js";
import gameLogic from "../game/gameLogic.js";

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
            });


            row.appendChild(cell);
            index++;
        }

        table.appendChild(row);
    }

    console.log("ici");

    gameContainer.appendChild(table);

}
