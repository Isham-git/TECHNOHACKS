console.log("welcome to tic tac teo");
let music = new Audio("music.mp3");
let audioturn = new Audio("ting.mp3");
let gameover = new Audio("gameover.mp3");
let turn = "X";
let agameover = false;

//function to change turn
const changeTurn = () => {
  return turn === "X" ? "0" : "X";
};
//function to checkwin

const checkwin = () => {
  let boxtext = document.getElementsByClassName("boxtext");
  let wins = [
    [0, 1, 2, -4, 5, 0],
    [3, 4, 5, -4, 15, 0],
    [6, 7, 8, -4, 25, 0],
    [0, 3, 6, -13.5, 15, 90],
    [1, 4, 7, -3.5, 15, 90],
    [2, 5, 8, 6.5, 15, 90],
    [0, 4, 8, -3, 15, 45],
    [2, 4, 6, -4, 15, 135],
  ];
  wins.forEach((e) => {
    if (
      boxtext[e[0]].innerText === boxtext[e[1]].innerText &&
      boxtext[e[2]].innerText === boxtext[e[1]].innerText &&
      boxtext[e[0]].innerText !== ""
    ) {
      document.querySelector(".info").innerText =
        boxtext[e[0]].innerText + " won ";
      agameover = true;

      document
        .querySelector(".imgb")
        .getElementsByTagName("img")[0].style.width = "200px";
      document.querySelector(
        ".line"
      ).style.transform = `translate(${e[3]}vw,${e[4]}vw) rotate(${e[5]}deg)`;
      document.querySelector(".line").style.width = "37vw";
      gameover.play();
    }
  });
};

//game logic
music.play();

let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach((element) => {
  let boxtext = element.querySelector(".boxtext");
  element.addEventListener("click", () => {
    if (boxtext.innerText === "") {
      boxtext.innerText = turn;
      turn = changeTurn();
      audioturn.play();
      checkwin();

      if (!agameover) {
        document.getElementsByClassName("info")[0].innerText =
          " Turn for " + turn;
      }
    }
  });
});
// Add onclick listener to reset button
reset.addEventListener("click", () => {
  let boxtexts = document.querySelectorAll(".boxtext");
  Array.from(boxtexts).forEach((element) => {
    element.innerText = "";
  });
  agameover = false;
  document.getElementsByClassName("info")[0].innerText = " Turn for " + turn;
  document.querySelector(".imgb").getElementsByTagName("img")[0].style.width =
    "0px";
  document.querySelector(".line").style.width = "0";
});
