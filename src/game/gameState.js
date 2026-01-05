let cards = [{
    id: 0,
    value: "src/assets/1.jpeg",
    isFlipped: false,
    isMatched: false,
},
{
    id: 1,
    value: "src/assets/1.jpeg",
    isFlipped: false,
    isMatched: false,
},
{
    id: 2,
    value: 'src/assets/2.webp',
    isFlipped: false,
    isMatched: false,
},
{
    id: 3,
    value: 'src/assets/2.webp',
    isFlipped: false,
    isMatched: false,
},
{
    id: 4,
    value: 'src/assets/3.jpg',
    isFlipped: false,
    isMatched: false,
},
{
    id: 5,
    value: 'src/assets/3.jpg',
    isFlipped: false,
    isMatched: false,
},
{
    id: 6,
    value: 'src/assets/4.avif',
    isFlipped: false,
    isMatched: false,
},
{
    id: 7,
    value: 'src/assets/4.avif',
    isFlipped: false,
    isMatched: false,
},
{
    id: 8,
    value: 'src/assets/5.jpg',
    isFlipped: false,
    isMatched: false,
},
{
    id: 9,
    value: 'src/assets/5.jpg',
    isFlipped: false,
    isMatched: false,
},

]

let cardNormal = [{
    id: 0,
    value: "src/assets/1.jpeg",
    isFlipped: false,
    isMatched: false,
},
{
    id: 1,
    value: "src/assets/1.jpeg",
    isFlipped: false,
    isMatched: false,
},
{
    id: 2,
    value: 'src/assets/2.webp',
    isFlipped: false,
    isMatched: false,
},
{
    id: 3,
    value: 'src/assets/2.webp',
    isFlipped: false,
    isMatched: false,
},
{
    id: 4,
    value: 'src/assets/3.jpg',
    isFlipped: false,
    isMatched: false,
},
{
    id: 5,
    value: 'src/assets/3.jpg',
    isFlipped: false,
    isMatched: false,
},
{
    id: 6,
    value: 'src/assets/4.avif',
    isFlipped: false,
    isMatched: false,
},
{
    id: 7,
    value: 'src/assets/4.avif',
    isFlipped: false,
    isMatched: false,
},
{
    id: 8,
    value: 'src/assets/5.jpg',
    isFlipped: false,
    isMatched: false,
},
{
    id: 9,
    value: 'src/assets/5.jpg',
    isFlipped: false,
    isMatched: false,
},

]
let cardDifficult = [{
    id: 0,
    value: "src/assets/1.jpeg",
    isFlipped: false,
    isMatched: false,
},
{
    id: 1,
    value: "src/assets/1.jpeg",
    isFlipped: false,
    isMatched: false,
},
{
    id: 2,
    value: 'src/assets/2.webp',
    isFlipped: false,
    isMatched: false,
},
{
    id: 3,
    value: 'src/assets/2.webp',
    isFlipped: false,
    isMatched: false,
},
{
    id: 4,
    value: 'src/assets/3.jpg',
    isFlipped: false,
    isMatched: false,
},
{
    id: 5,
    value: 'src/assets/3.jpg',
    isFlipped: false,
    isMatched: false,
},
{
    id: 6,
    value: 'src/assets/4.avif',
    isFlipped: false,
    isMatched: false,
},
{
    id: 7,
    value: 'src/assets/4.avif',
    isFlipped: false,
    isMatched: false,
},
{
    id: 8,
    value: 'src/assets/5.jpg',
    isFlipped: false,
    isMatched: false,
},
{
    id: 9,
    value: 'src/assets/5.jpg',
    isFlipped: false,
    isMatched: false,
},
{
    id: 10,
    value: 'src/assets/6.jpg',
    isFlipped: false,
    isMatched: false,
},
{
    id: 11,
    value: 'src/assets/6.jpg',
    isFlipped: false,
    isMatched: false,
},
{
    id: 12,
    value: 'src/assets/7.jpg',
    isFlipped: false,
    isMatched: false,
},
{
    id: 13,
    value: 'src/assets/7.jpg',
    isFlipped: false,
    isMatched: false,
},
{
    id: 14,
    value: 'src/assets/8.jpg',
    isFlipped: false,
    isMatched: false,
},
{
    id: 15,
    value: 'src/assets/8.jpg',
    isFlipped: false,
    isMatched: false,
},
{
    id: 16,
    value: 'src/assets/9.webp',
    isFlipped: false,
    isMatched: false
},
{
    id: 17,
    value: 'src/assets/9.webp',
    isFlipped: false,
    isMatched: false

}

]
let difficulty = 1;


let tryCount = 0;
let timerCount = 0;
let timerInterval = null;
const victoryMessage = " Vous avez gagné !";
let winCount = 0;




export default { cards, tryCount, timerCount, timerInterval, victoryMessage, winCount, difficulty, cardNormal, cardDifficult };