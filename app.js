
let coins = Number(localStorage.getItem("cv66_coins"));

if (!Number.isFinite(coins) || coins < 0) {
  coins = 1000;
  localStorage.setItem("cv66_coins", coins);
}

document.getElementById("coins").textContent = coins;
