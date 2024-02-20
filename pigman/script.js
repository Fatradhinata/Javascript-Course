// BUTTON DECLARATION
var newGameBtn = document.querySelector(".btn--new");
var rollBtn = document.querySelector(".btn--roll");
var holdBtn = document.querySelector(".btn--hold");

// OTHERS DECLARATION
var player = [document.querySelector(".player--0"), document.querySelector(".player--1")];
var scoreElm = [document.getElementById("score--0"), document.getElementById("score--1")];
var currentScore = [document.getElementById('current--0'), document.getElementById('current--1')];
var score = 0;

// DICE ELEMENT & NAME DECLARATION
var dice = document.querySelector('.dice');
var allDice = ['dice-1', 'dice-2', 'dice-3', 'dice-4', 'dice-5', 'dice-6'];

//  DECLARED VAR FOR CHANGE ACTIVE PLAYER
var turn = 0;

// SET PLAYER 1 TO PLAY FIRST
player[turn].classList.add("player--active")

// FOR RESET ALL ELEMENT WHEN CLIENT CLICK "NEW GAME"
function allReset() {
    scoreElm[0].innerText = 0;
    scoreElm[1].innerText = 0;
    currentScore[0].innerText = 0;
    currentScore[1].innerText = 0;
    score = 0;

    player[turn].classList.remove("player--winner");
    
    turn = 0;

    rollBtn.setAttribute('onclick', 'roll(turn)')
    holdBtn.setAttribute('onclick', 'hold(turn)')
}

// RESPOND WHEN BTN--ROLL CLICKED
function roll(turnNum) {
    let rand = Math.floor(Math.random() * allDice.length);
    dice.setAttribute('src', allDice[rand] + ".png");
    
    if (rand == 0) {
        score = 0;
        changeTurn(turnNum);
    } else {
        score += rand + 1
    }
    currentScore[turnNum].innerText = score
}

// RESPOND WHEN BTN--HOLD CLICKED
function hold(turnNum) {
    scoreElm[turnNum].innerText = parseInt(scoreElm[turnNum].innerText) + score;
    score = 0;
    currentScore[turnNum].innerText = 0;

    if (scoreElm[turn].innerText >= 100) {
        player[turn].classList.add('player--winner')

        rollBtn.removeAttribute('onclick')
        holdBtn.removeAttribute('onclick')
        return true;
    }
    changeTurn(turnNum)

}

// FUNCTION FOR CHANGE TURN
function changeTurn(turnNum) {
    player[turnNum].classList.remove("player--active")
    turn = turn === 0 ? 1 : 0;
    player[turn].classList.add("player--active")
}