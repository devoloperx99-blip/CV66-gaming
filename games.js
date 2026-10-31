
const games = [
  {name:"Fortune Gems", type:"Slot", icon:"💎"},
  {name:"Golden Empire", type:"Slot", icon:"👑"},
  {name:"Ocean King", type:"Fishing", icon:"🐟"},
  {name:"Dragon Fishing", type:"Fishing", icon:"🐉"},
  {name:"Lucky Arcade", type:"Arcade", icon:"🎯"},
  {name:"Super Bingo", type:"Arcade", icon:"🎮"}
];

const grid = document.getElementById("gameGrid");

function displayGames(list) {
  grid.innerHTML = "";

  list.forEach(game => {
    const card = document.createElement("div");
    card.className = "game-card";

    const icon = document.createElement("div");
    icon.className = "game-icon";
    icon.textContent = game.icon;

    const title = document.createElement("h3");
    title.textContent = game.name;

    const type = document.createElement("p");
    type.textContent = game.type;

    const button = document.createElement("button");
    button.textContent = "PLAY DEMO";
    button.onclick = () => playGame(game.name);

    card.append(icon, title, type, button);
    grid.appendChild(card);
  });
}

function filterGames(type) {
  const result = type === "All"
    ? games
    : games.filter(game => game.type === type);

  displayGames(result);
}

function searchGames() {
  const query = document.getElementById("search")
    .value.toLowerCase();

  displayGames(games.filter(game =>
    game.name.toLowerCase().includes(query)
  ));
}

function playGame(name) {
  alert(name + " - Demo game coming soon!");
}

displayGames(games);
