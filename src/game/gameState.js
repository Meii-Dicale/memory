let cards = [{
    id: 0,
    value: "src/assets/1.jpeg",
    isFlipped: false,
    isMatched: false,
},
{
    id: 1,
    value: 'src/assets/2.webp',
    isFlipped: false,
    isMatched: false,
},
{
    id: 2,
    value: 'src/assets/3.jpg',
    isFlipped: false,
    isMatched: false,
},
{
    id: 3,
    value: 'src/assets/4.avif',
    isFlipped: false,
    isMatched: false,
},
{
    id: 4,
    value: 'src/assets/5.jpg',
    isFlipped: false,
    isMatched: false,
},

]

let tryCount = 0;
let timer = 0;
const victoryMessage= " Vous avez gagné !";

export default { cards, tryCount, timer, victoryMessage };