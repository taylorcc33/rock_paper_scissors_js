// STATE VARIABLES //
let state = {
  computerWins: 0,
  playerWins: 0,
  ties: 0,
  choices: ["Rock", "Paper", "Scissors"],
  playerChoice: "",
  computerChoice: "",
};

// RENDER HTML BY ID FUNCTION //
const renderHTML = (id, html) => {
  document.getElementById(id).innerHTML = html;
};

// PlAYER CHOICE FUNCTION //
const makeChoice = (index) => {
  // console.log("makeChoice called");
  state.playerChoice = state.choices[index];
  state.computerChoice = state.choices[Math.floor(Math.random() * 3)];
  console.log(
    "Player choice is " +
      state.playerChoice +
      " and " +
      "Computer choice is " +
      state.computerChoice
  );
  gameLogic(state.playerChoice, state.computerChoice);
};

// GAME LOGIC //
const gameLogic = (playerChoice, computerChoice) => {
  // console.log("gameLogic called");
  let winner = null;
  if (state.playerChoice == state.choices[0]) {
    if (state.computerChoice == state.choices[1]) {
      winner = "computer";
      console.log("computer wins");
    }
    if (state.computerChoice == state.choices[2]) {
      winner = "player";
      console.log("player wins");
    }
  } else if (state.playerChoice == state.choices[1]) {
    if (state.computerChoice == state.choices[0]) {
      winner = "player";
      console.log("player wins");
    }
    if (state.computerChoice == state.choices[2]) {
      winner = "computer";
      console.log("computer wins");
    }
  } else if (state.playerChoice == state.choices[2]) {
    if (state.computerChoice == state.choices[0]) {
      winner = "computer";
      console.log("computer wins");
    }
    if (state.computerChoice == state.choices[1]) {
      winner = "player";
      console.log("player wins");
    }
  }

  if (winner == "player") {
    state.playerWins += 1;
  } else if (winner == "computer") {
    state.computerWins += 1;
  } else if (!winner) {
    state.ties += 1;
  }

  renderResult(state.playerChoice, state.computerChoice);
};

// INITIAL GAME RENDER //
const renderGame = () => {
  // console.log("renderGame called");

  let htmlString = document.getElementById("game").innerHTML;
  state.choices.forEach((choice, index) => {
    htmlString += `<div class='choice'>
                    <div onclick='makeChoice(${index})'>${choice}</div>            
                   </div>`;
  });
  htmlString += `</div>`;
  return htmlString;
};

// RENDER RESULT //
const renderResult = (playerChoice, computerChoice) => {
  // console.log("renderResult called" + playerChoice + computerChoice);
  let htmlString = document.getElementById("gamechoices");
  htmlString.innerHTML = `<h2>You chose ${playerChoice}!</h2>
                          <h2>Computer chose ${computerChoice}!</h2>
  `;
};

// OVERALL RENDER //
const render = () => {
  console.log("render called");
  let window = document.getElementById("window");
  let htmlString = renderGame();
  window.innerHTML = htmlString;
};

render();
