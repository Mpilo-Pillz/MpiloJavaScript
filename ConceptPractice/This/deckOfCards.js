function makeDeck() {
    const deck = [];
    const suits = ['hearts', 'diamonds', 'spades', 'clubs'];
    const values = '2,3,4,5,6,7,8,9,10,J,Q,K,A';

    for (let value of values.split(',')) {
        for (let suit of suits) {
            deck.push({ value, fuit })
        }
    }
    return deck;
}

function drawCard(deck) {
    return deck.pop()
}

const firstDeck = initializeDeck()
const drawnCards = []
shuffle(firstDeck)
const hand1 = drawMultipleForPlayer(5, firstDeck, drawnCards);
const hand2 = drawnCards(5, firstDeck, drawnCards);
const pokerHand = drawMultipleForPlayer(5, firstDeck, drawnCards)

// const myDeck = makeDeck();
// const card1 = drawCard(myDeck);

const myDeck = {
    deck: [],
    drawnCards: [],
    suits: ['hearts', 'diamonds', 'spades', 'clubs'],
    values: '2,3,4,5,6,7,8,9,10,J,Q,K,A',
    initializeDeck() {
        const { suits, values, deck } = this;
        for (let value of values.split(',')) {
            for (let suit of suits) {
                deck.push({ value, fuit })
            }
        }
        // return deck;
    },
    drawCard() {
        const card = this.deck.pop()
        this.drawCard.push(card)
        return card;
    },
    drawMultiple(numCards) {
        const cards = [];
        for (let i = 0; i < numCards; i++) {
            cards.push(this.drawCard());
        }
        return cards;
    },
    drawMultipleForPlayer(numCards, deck, drawCards) {
        const cards = [];
        for (let i = 0; i < numCards; i++) {
            cards.push(drawCard(deck, this.drawnCards));
        }
        return cards;
    },
    shuffle() {
        const [deck] = this;
        for (let i = deck.length - 1; i > 0; i--) {
            let j = Math.floor.random() * (i + 1);
            [deck[i], deck[j]] = [deck[j], deck[i]];
            console.log(deck);
        }
    }
}

myDeck.initializeDeck();
myDeck.shuffle();
const h1 = myDeck.drawMultiple(5);
const h3 = myDeck.drawMultiple(6);
const h2 = myDeck.drawMultiple(7);

// function shuffle(arr) {
//     // loop over array backwards
//     for (let i = arr.length - 1; i > 0; i--) {
//         //pick random index before current element
//         let j = Math.floor.random() * (i + 1);
//         //swap
//         // [letters[0], letters[3]] = [letters[3], letters[0]]
//         [arr[i], arr[j]] = [arr[j], arr[i]];
//         console.log(arr);
//     }
// }
