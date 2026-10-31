/* =================================
   CV66 GAMING - GAME LOBBY
   Virtual Coin Demo Only
================================= */

const games = [
  {
    id: 1,
    name: "Fortune Gems",
    category: "Slot",
    icon: "💎",
    label: "POPULAR"
  },
  {
    id: 2,
    name: "Golden Empire",
    category: "Slot",
    icon: "👑",
    label: "HOT"
  },
  {
    id: 3,
    name: "Ocean King",
    category: "Fishing",
    icon: "🐟",
    label: "POPULAR"
  },
  {
    id: 4,
    name: "Dragon Fishing",
    category: "Fishing",
    icon: "🐉",
    label: "NEW"
  },
  {
    id: 5,
    name: "Lucky Arcade",
    category: "Arcade",
    icon: "🎯",
    label: "HOT"
  },
  {
    id: 6,
    name: "Super Bingo",
    category: "Arcade",
    icon: "🎮",
    label: "NEW"
  },
  {
    id: 7,
    name: "Magic Treasure",
    category: "Slot",
    icon: "🪄",
    label: "NEW"
  },
  {
    id: 8,
    name: "Happy Fishing",
    category: "Fishing",
    icon: "🎣",
    label: "POPULAR"
  },
  {
    id: 9,
    name: "Space Adventure",
    category: "Arcade",
    icon: "🚀",
    label: "HOT"
  }
];

const gameGrid = document.getElementById("gameGrid");
const searchInput = document.getElementById("search");

// Display games
function displayGames(gameList) {
  if (!gameGrid) return;

  gameGrid.innerHTML = "";

  if (gameList.length === 0) {
    gameGrid.innerHTML =
      '<p class="no-games">No games found!</p>';
    return;
  }

  gameList.forEach(game => {
    const card = document.createElement("div");
    card.className = "game-card";

    card.innerHTML = `
      <div class="game-icon">${game.icon}</div>
      <span class="game-label">${game.label}</span>
      <h3>${game.name}</h3>
      <p>${game.category} Game</p>
      <button type="button" class="play-game-btn">
        ▶ PLAY DEMO
      </button>
    `;

    card.querySelector("button").addEventListener(
      "click",
      () => {
        if (typeof playGame === "function") {
          playGame(game.name);
        } else {
          alert("Game system is loading. Please try again.");
        }
      }
    );

    gameGrid.appendChild(card);
  });
}

// Category filter
function filterGames(category) {
  const filtered = category === "All"
    ? games
    : games.filter(game => game.category === category);

  displayGames(filtered);
}

// Search games
function searchGames() {
  const query = searchInput.value
    .trim()
    .toLowerCase();

  const filtered = games.filter(game =>
    game.name.toLowerCase().includes(query) ||
    game.category.toLowerCase().includes(query)
  );

  displayGames(filtered);
}

// Initial game lobby
displayGames(games);
