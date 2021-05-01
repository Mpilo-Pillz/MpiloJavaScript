const makeDeck = () => {
  return {
    deck: [],
    drawnCards: [],
    suits: ["hearts", "diamonds", "spades", "clubs"],
    values: "2,3,4,5,6,7,8,9,10,J,Q,K,A",
    initializeDeck() {
      const { suits, values, deck } = this;
      for (let value of values.split(",")) {
        for (let suit of suits) {
          deck.push({ value, fuit });
        }
      }
      // return deck;
    },
    drawCard() {
      const card = this.deck.pop();
      this.drawCard.push(card);
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
    },
  };
};

const myDeck = makeDeck();
myDeck.initializeDeck();
myDeck.shuffle();
const h1 = myDeck.drawMultiple(5);
const h3 = myDeck.drawMultiple(6);
const h2 = myDeck.drawMultiple(7);

const myDeckTwo = makeDeck();
myDeckTwo.initializeDeck();
