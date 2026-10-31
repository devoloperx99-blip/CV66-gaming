// CV66-GAMING - Virtual Coin Demo System

const COIN_KEY = "cv66_coins";
const STARTING_COINS = 1000;
const PLAY_COST = 10;
const WIN_REWARD = 20;

// Load saved coins
let coins = Number(localStorage.getItem(COIN_KEY));

if (!Number.isFinite(coins) || coins < 0) {
  coins = STARTING_COINS;
  saveCoins();
}

// Save coins
function saveCoins() {
  localStorage.setItem(COIN_KEY, String(coins));
}

// Update balance on screen
function updateBalance() {
  const coinDisplay = document.getElementById("coins");

  if (coinDisplay) {
    coinDisplay.textContent = coins;
  }
}

// Play virtual demo game
function playGame(gameName) {
  if (coins < PLAY_COST) {
    alert("Not enough virtual coins! Please try again later.");
    return;
  }

  // Deduct demo entry cost
  coins -= PLAY_COST;

  // Demo-only random result
  const won = Math.random() < 0.4;

  if (won) {
    coins += WIN_REWARD;

    alert(
      "🎉 Congratulations!\n" +
      gameName +
      "\nYou won " + WIN_REWARD + " virtual coins!"
    );
  } else {
    alert(
      "🙂 Better luck next time!\n" +
      gameName +
      "\nYou spent " + PLAY_COST + " virtual coins."
    );
  }

  saveCoins();
  updateBalance();
}

// Start application
document.addEventListener("DOMContentLoaded", () => {
  updateBalance();
});

updateBalance();
