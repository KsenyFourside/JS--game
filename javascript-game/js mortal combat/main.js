const player1 = {
  name: "Scorpion",
  hp: 100,
  img: "./assets/scorpion.gif",
  weapon: ["sword", "gun", "spear"],
  attack: function () {
    console.log(this.name + ", Fight...");
  },
};

const player2 = {
  name: "Kitana",
  hp: 55,
  img: "./assets/kitana.gif",
  weapon: ["sword", "gun"],
  attack: function () {
    console.log(this.name + ", Fight...");
  },
};

const $arenas = document.querySelector(".arenas");

function createDivElement(element, classname) {
  const $elem = document.createElement(element);
  $elem.classList.add(classname);
  return $elem;
}

function createPlayer(elem, classname, obj) {
  elem.appendChild(createDivElement("div", classname));

  const $player = document.querySelector(`div.${classname}`);
  $player.appendChild(createDivElement("div", `progressbar`));
  $player.appendChild(createDivElement("div", `character`));

  const $progressbar = document.querySelector(
    `div.${classname} div.progressbar`
  );
  $progressbar.appendChild(createDivElement("div", `life`));
  $progressbar.appendChild(createDivElement("div", `name`));

  const $life = document.querySelector(`div.${classname} div.life`);
  $life.style.width = `${obj.hp}%`;

  const $name = document.querySelector(`div.${classname} div.name`);
  $name.innerText = obj.name;

  const $img = document.createElement("img");
  $img.src = obj.img;
  document.querySelector(`div.${classname} div.character`).appendChild($img);
}
createPlayer($arenas, "player1", scorpion);
createPlayer($arenas, "player2", kitana);
