console.log("Welcome to Sagnik's Tic Tac Toe");

// All Declarations
let music = new Audio("Static_Files/BackMusic.mp3");
let audioTurn = new Audio("Static_Files/TingSound.mp3");
let gameover = new Audio("Static_Files/GameOver.mp3");
let turn = '<img src="Static_Files/Cross.png" width="100px" alt="">';
let isgameover = false;

// Function To Change The Turn
const changeTurn = () => {
    return turn === '<img src="Static_Files/Cross.png" width="100px" alt="">' ? '<img src="Static_Files/Circle.png" width="100px" alt="">' : '<img src="Static_Files/Cross.png" width="100px" alt="">';
}

// Function to check for a winner
const checkWin = () => {
    if (isgameover) {
        return; // If the game is already over, exit early
    }

    let boxtext = document.getElementsByClassName('boxtext');
    let wins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];

    wins.forEach(e => {
        if (
            boxtext[e[0]].innerHTML === boxtext[e[1]].innerHTML &&
            boxtext[e[1]].innerHTML === boxtext[e[2]].innerHTML &&
            boxtext[e[0]].innerHTML !== ""
        ) {
            document.querySelector('.info').innerText = (turn.includes("Cross") ? "X" : "O") + " Losses!";
            isgameover = true;
            document.querySelector('.winnerGif').getElementsByTagName('img')[0].style.width = "300px";
        }
    });
}

// Game Logic & music playing
music.play()
let boxes = document.getElementsByClassName("smallBoxes");
Array.from(boxes).forEach(element => {
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click', () => {
        if (!isgameover && boxtext.innerHTML === '') {
            boxtext.innerHTML = turn;
            turn = changeTurn();
            audioTurn.play();
            checkWin();
            if (!isgameover) {
                document.querySelector('.info').innerText = "Turn for " + (turn.includes("Cross") ? "X" : "O");
            }
        }
    });
});

//Reset Button OnClick Event..
reset.addEventListener('click', () => {
    let boxtexts = document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element => {
        element.innerText = ""
    });
    turn = '<img src="Static_Files/Cross.png" width="100px" alt="">';
    isgameover = false;
    document.querySelector('.winnerGif').getElementsByTagName('img')[0].style.width = "0";
});
