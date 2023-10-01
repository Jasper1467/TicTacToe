let root = document.querySelector(":root");

let playerIndex = 0;

function onPlayerChange() {
  // Change hover color
  root.style.setProperty(
    "--block-hover-color",
    playerIndex === 0 ? "darkred" : "blue"
  );
}

function onPlayerClick(blockId) {
  if (document.getElementById(blockId).innerHTML !== "") {
    // Block is already filled
    console.error("Block is already filled");
    return;
  }

  document.getElementById(blockId).innerHTML = playerIndex === 0 ? "X" : "O";

  playerIndex = playerIndex === 0 ? 1 : 0;

  onPlayerChange();
}

function reset() {
  playerIndex = 0;

  document.getElementById("block_0").innerHTML = "";
  document.getElementById("block_1").innerHTML = "";
  document.getElementById("block_2").innerHTML = "";
  document.getElementById("block_3").innerHTML = "";
  document.getElementById("block_4").innerHTML = "";
  document.getElementById("block_5").innerHTML = "";
  document.getElementById("block_6").innerHTML = "";
  document.getElementById("block_7").innerHTML = "";
  document.getElementById("block_8").innerHTML = "";
}

document.getElementById("block_0").onmousedown = function () {
  onPlayerClick("block_0");
};

document.getElementById("block_1").onmousedown = function () {
  onPlayerClick("block_1");
};

document.getElementById("block_2").onmousedown = function () {
  onPlayerClick("block_2");
};

document.getElementById("block_3").onmousedown = function () {
  onPlayerClick("block_3");
};

document.getElementById("block_4").onmousedown = function () {
  onPlayerClick("block_4");
};

document.getElementById("block_5").onmousedown = function () {
  onPlayerClick("block_5");
};

document.getElementById("block_6").onmousedown = function () {
  onPlayerClick("block_6");
};

document.getElementById("block_7").onmousedown = function () {
  onPlayerClick("block_7");
};

document.getElementById("block_8").onmousedown = function () {
  onPlayerClick("block_8");
};
