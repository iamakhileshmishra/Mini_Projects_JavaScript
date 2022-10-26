window.addEventListener("DOMContentLoaded", () => {
  const tiles = Array.from(document.querySelectorAll(".tile"));
  const playerDisplay = document.querySelector(".display-player");
  const resetButton = document.querySelector("#reset");
  const announcer = document.querySelector(".announcer");
  const resultButton = document.querySelector("#result");

  let board = ["", "", "", "", "", "", "", "", ""];
  let currentPlayer = "X";
  let isGameActive = true;
  let scoreX = 0;
  let scoreO = 0;
  const PLAYERX_WON = "Player X Won";
  const PLAYERO_WON = "Player O Won";
  const TIE = "TIE";
  //tile:
  //
  // [0] [1] [2]
  // [3] [4] [5]
  // [6] [7] [8]
  //

  const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  function handleResultValidation() {
    let roundWon = false;
    for (let i = 0; i < 8; i++) {
      const winCondition = winningConditions[i];
      const a = board[winCondition[0]];
      const b = board[winCondition[1]];
      const c = board[winCondition[2]];
      if (a === "" || b === "" || c === "") continue;
      if (a === b && b === c) {
        roundWon = true;
        break;
      }
    }

    if (roundWon) {
      announce(currentPlayer === "X" ? PLAYERX_WON : PLAYERO_WON);

      if (currentPlayer === "X") scoreX++;
      else scoreO++;

      document.getElementById("scorex").innerHTML = `${scoreX}`;
      document.getElementById("scoreo").innerHTML = `${scoreO}`;

      isGameActive = false;
      return;
    }

    if (!board.includes("")) {
      announce(TIE);
    }
  }

  const announce = (type) => {
    switch (type) {
      case PLAYERO_WON:
        announcer.innerHTML = 'Player <spam class="playerO">O</span> Won';
        break;

      case PLAYERX_WON:
        announcer.innerHTML = 'Player <spam class="playerX">X</span> Won';
        break;

      case TIE:
        announcer.innerHTML = "Tie";
        break;
    }
    announcer.classList.remove("hide");
  };

  const isValidAction = (tile) => {
    if (tile.innerText === "X" || tile.innerText === "O") {
      return false;
    }
    return true;
  };

  const updateBoard = (index) => {
    board[index] = currentPlayer;
  };

  const changePlayer = () => {
    playerDisplay.classList.remove(`player${currentPlayer}`);
    currentPlayer = currentPlayer === "X" ? "O" : "X";
    playerDisplay.innerText = currentPlayer;
    playerDisplay.classList.add(`player${currentPlayer}`);
  };

  const userAction = (tile, index) => {
    if (isValidAction(tile) && isGameActive) {
      tile.innerText = currentPlayer;
      tile.classList.add(`player${currentPlayer}`);
      updateBoard(index);
      handleResultValidation();
      changePlayer();
    }
  };

  const resetBoard = () => {
    board = ["", "", "", "", "", "", "", "", ""];
    isGameActive = true;
    announcer.classList.add("hide");
    if (currentPlayer === "O") {
      changePlayer();
    }
    tiles.forEach((tile) => {
      tile.innerText = "";
      tile.classList.remove("playerX");
      tile.classList.remove("playerO");
    });
  };

  const displayResult = () => {
    if (scoreX > scoreO) alert("PlayerX won!!!");
    else if (scoreX < scoreO) alert("PlayerO won!!!");
    else alert("Match Drawn!!!!");
  };

  tiles.forEach((tile, index) => {
    tile.addEventListener("click", () => userAction(tile, index));
  });
  resetButton.addEventListener("click", resetBoard);
  resultButton.addEventListener("click", displayResult);
});
