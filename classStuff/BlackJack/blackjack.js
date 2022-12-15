
window.addEventListener("DOMContentLoaded", function () {
  // Execute after page load
  // Grabbing HTML Elements
  const wholeBody = document.querySelector("body"); // Grab the entire body.
  const dealerHand = document.getElementById("dealer-hand"); // Grab the dealer's hand
  const playerHand = document.getElementById("player-hand"); // Grab the player's hand
  const dealButton = document.getElementById("deal-button"); // Grab the deal button
  const hitButton = document.getElementById("hit-button"); // Grab the deal button
  const standButton = document.getElementById("stand-button"); // Grab the deal button
  const playerPoints = document.getElementById("player-points"); // Grab the player's points section
  const dealerPoints = document.getElementById("dealer-points"); // Grab the dealer's points section
  const messageZone = document.getElementById("messages"); // Grab the message box.
  const lowerZone = document.getElementById("lower-zone"); // Grab the play again zone
  const playerGames = document.getElementById("player-games"); // Grab zone for player games won
  const dealerGames = document.getElementById("dealer-games"); // Grab zone for dealer games won
  const playerMoneyZone = document.getElementById("player-bet"); // Grab zone to display player money

  // Arrays for Deck Creation and Storage
  let deck = []; // Empty Deck to add cards to when we make a deck
  const suits = ["hearts", "spades", "clubs", "diamonds"]; // List of possible suits
  const ranks = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]; // List of possible ranks (1 is Ace moving up)

  // Messages
  let initialGreeting = "Place a Bet and Deal to Play";

  // Arrays for Hands
  let dealerCards = [];
  let playerCards = [];

  // Player and Dealer Scores
  let playerCount = 0;
  let dealerCount = 0;

  // Player and Dealer Games Won Count
  let playerGamesWon = 0;
  let dealerGamesWon = 0;

  // Player Money for Betting
  let playerMoney = 5000;
  let playerBet = 0;

  // Flags to control buttons
  dealButton.disabled = false;
  hitButton.disabled = true;
  standButton.disabled = true;

  // Function to shuffle the deck
  const shuffle = (arr) => {
    arr.sort(() => Math.random() - 0.5);
  };

  // Function to make a new deck
  const makeDeck = () => {
    for (let suit of suits) {
      for (let rank of ranks) {
        const card = {
          // Create a card as an object with three keys: rank (which card), suit (which suit), point value
          rank: rank,
          suit: suit,
          pointValue: rank > 11 ? 10 : rank, // If rank is higher than 11, it's ten
        };
        deck.push(card);
      }
    }
    shuffle(deck);
  };

  // Pull a new card.
  const getNewCard = () => {
    return deck.pop();
  };

  const getCardImage = (card) => {
    let newCardImage = document.createElement("img");
    newCardImage.src = `./images/${card.rank}_of_${card.suit}.png`;
    return newCardImage;
  };

  // Renders the player's cards onto the board
  const playerRender = (arr) => {
    arr.forEach((ele) => {
      playerHand.append(getCardImage(ele));
    });
  };

  // Renders the dealer's cards onto the board
  const dealerRender = (arr) => {
    arr.forEach((ele) => {
      dealerHand.append(getCardImage(ele));
    });
  };

  const renderFaceDownDeal = (arr) => {
    dealerHand.append(getCardImage(arr[0]));
    for (let i = 1; i < arr.length; i++) {
      dealerHand.append(getFaceDownCardImage(arr[i]));
    }
  };

  const getFaceDownCardImage = (card) => {
    let faceDownImage = document.createElement("img");
    faceDownImage.src = "./images/cardBack.png";
    return faceDownImage;
  };

  // Calculate player's points
  const calculatePlayerPoints = (hand) => {
    let count = 0;
    for (const i of hand) {
      count += i.pointValue;
    }
    playerCount = count;
    return playerCount;
  };

  // Calculate dealer's points
  const calculateDealerPoints = (hand) => {
    let count = 0;
    for (const i of hand) {
      count += i.pointValue;
    }
    dealerCount = count;
    return dealerCount;
  };

  const getFaceDownPoints = (hand) => {
    let count = 0;
    count += hand[0].pointValue;
    return count;
  };

  // Checks for an ace
  const checkAce = (points, hand) => {
    if (points > 21) {
      hand.forEach((ele) => {
        if (ele.rank === 11) {
          ele.pointValue = 1;
        }
      });
    }
  };

  const checkDealerAce = (points, hand) => {
    if (points > 17) {
      hand.forEach((ele) => {
        if (ele.rank === 11) {
          ele.pointValue = 1;
        }
      });
    }
  };

  const revealDealerHand = () => {
    dealerHand.innerHTML = null;
    dealerPoints.innerText = calculateDealerPoints(dealerCards);
    dealerRender(dealerCards);
  };
  // Check to see if the player busts while hitting
  const checkPlayerBust = () => {
    if (playerCount === 21) {
      messageZone.innerText = "Twenty-One. You win!";
      revealDealerHand();
      playerMoney += parseInt(playerBet) * 2;
      playerGamesWon += 1;
      gameOver();
    } else if (playerCount > 21) {
      messageZone.innerText = "You bust! Dealer Wins!";
      revealDealerHand();
      dealerGamesWon += 1;
      gameOver();
    }
  };

  // Check to see if the dealer busts while standing
  const checkDealerBust = () => {
    if (dealerCount === 21) {
      messageZone.innerText = "Twenty-One. Dealer wins!";
      revealDealerHand();
      dealerGamesWon += 1;
      gameOver();
    } else if (dealerCount > 21) {
      messageZone.innerText = "Dealer busts! You Win!";
      revealDealerHand();
      playerGamesWon += 1;
      playerMoney += parseInt(playerBet) * 2;
      gameOver();
    } else if (dealerCount < playerCount) {
      messageZone.innerText = "You win!";
      revealDealerHand();
      playerGamesWon += 1;
      playerMoney += parseInt(playerBet) * 2;
      gameOver();
    } else if (playerCount < dealerCount) {
      messageZone.innerText = "Dealer wins!";
      revealDealerHand();
      dealerGamesWon += 1;
      gameOver();
    } else {
      messageZone.innerText = "Tie Game!";
      revealDealerHand();
      playerMoney += parseInt(playerBet);
      gameOver();
    }
  };

  const showStats = () => {
    playerGames.innerHTML = `Games Won: ${playerGamesWon}`;
    dealerGames.innerHTML = `Games Won: ${dealerGamesWon}`;
    playerMoneyZone.innerHTML = `Money: ${playerMoney}`;
  };

  // Function to handle betting
  const getBet = () => {
    dealButton.disabled = true;

    // Create and render bet prompt
    const playerBetMessage = document.createElement("p");
    playerBetMessage.classList = "bet-menu";
    playerBetMessage.innerText = "How Much Would You Like to Bet?";
    lowerZone.append(playerBetMessage);

    // Create and render bet options
    let playerBetOptions = document.createElement("select");
    const option0 = document.createElement("option");
    option0.innerText = "---";
    const option50 = document.createElement("option");
    option50.innerText = "50";
    option50.value = 50;
    const option100 = document.createElement("option");
    option100.innerText = "100";
    option100.value = 100;
    const option500 = document.createElement("option");
    option500.innerText = "500";
    option500.value = 500;
    playerBetOptions.append(option0, option50, option100, option500);
    lowerZone.append(playerBetOptions);

    // Receive the player's bet and take it from their money
    playerBetOptions.addEventListener("change", () => {
      playerBet = playerBetOptions.value;
      playerMoney -= parseInt(playerBet);
      playerMoneyZone.innerHTML = `Money: ${playerMoney}`;
      playerBetOptions.disabled = true;
      dealButton.disabled = false;
    });
  };

  // Function to end round and prompt another game
  const gameOver = () => {
    // Create and render play again button
    const playAgain = document.createElement("button");
    playAgain.classList = "play-again";
    playAgain.innerText = "Good Game! Play Again?";
    lowerZone.append(playAgain);
    hitButton.disabled = true;
    standButton.disabled = true;
    dealButton.disabled = true;
    playAgain.addEventListener("click", () => resetGame());
  };

  // Resets values necessary to start over
  const resetGame = () => {
    // Take away play again button
    lowerZone.innerHTML = null;

    //Clear the message zone
    messageZone.innerHTML = null;
    messageZone.innerHTML = initialGreeting;

    // Set round scores to zero
    playerCount = 0;
    dealerCount = 0;

    // Take scores off board
    playerPoints.innerHTML = null;
    dealerPoints.innerHTML = null;

    // Empty hands
    playerCards = [];
    dealerCards = [];

    // Take cards off the board
    playerHand.innerHTML = null;
    dealerHand.innerHTML = null;

    // Reset Deck
    deck = [];

    // Reset Player's Bet to zero
    playerBet = 0;

    // Make a New Deck
    makeDeck();

    // Get a new bet from the player
    getBet();

    // Display updated scores and money
    showStats();
  };

  // Deal Cards
  const deal = () => {
    playerCards.push(getNewCard());
    dealerCards.push(getNewCard());
    playerCards.push(getNewCard());
    dealerCards.push(getNewCard());
  };

  // Function to add a card when hit is pressed
  const hit = (hand) => {
    hand.push(getNewCard());
  };

  ////// Button Functions //////

  // Handles the events of clicking the deal button.
  dealButton.addEventListener("click", () => {
    lowerZone.innerHTML = null;
    messageZone.innerHTML = null;
    deal();
    playerRender(playerCards);
    renderFaceDownDeal(dealerCards);
    playerPoints.innerText = calculatePlayerPoints(playerCards);
    dealerCount = calculateDealerPoints(dealerCards);
    dealerPoints.innerText = getFaceDownPoints(dealerCards);
    checkAce(calculatePlayerPoints(playerCards), playerCards);
    if (calculatePlayerPoints(playerCards) == 21) {
      checkPlayerBust();
    } else {
      dealButton.disabled = true;
      standButton.disabled = false;
      hitButton.disabled = false;
    }
  });

  // Handles the events of clicking the hit button.
  hitButton.addEventListener("click", () => {
    playerHand.innerHTML = null;
    hit(playerCards);
    playerRender(playerCards);
    checkAce(calculatePlayerPoints(playerCards), playerCards);
    playerPoints.innerText = calculatePlayerPoints(playerCards);
    checkPlayerBust();
  });

  // Handles the events of clicking the stand button.
  standButton.addEventListener("click", () => {
    hitButton.disabled = true;
    while (dealerCount < 17) {
      dealerHand.innerHTML = null;
      hit(dealerCards);
      dealerRender(dealerCards);
      checkDealerAce(calculateDealerPoints(dealerCards), dealerCards);
      dealerPoints.innerText = calculateDealerPoints(dealerCards);
    }
    checkDealerBust();
  });

  // Game Start
  makeDeck();
  showStats();
  getBet();
});
