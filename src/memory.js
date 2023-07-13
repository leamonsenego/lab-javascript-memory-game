class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }

  shuffleCards(cards) {
    if (!cards) {
      return undefined;
    }

    const shuffledCards = [...cards]; // Create a copy of the cards array

    for (let i = shuffledCards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledCards[i], shuffledCards[j]] = [
        shuffledCards[j],
        shuffledCards[i],
      ];
    }

    return shuffledCards;
  }

  checkIfPair(card1, card2) {
    this.pairsClicked++;
    let guessed = card1 === card2;
    if (guessed) {
      this.pairsGuessed++;
    } else {
      return false;
    }
    return guessed;
  }

  checkIfFinished() {
    return this.pairsGuessed === this.cards.length / 2;
  }
}
