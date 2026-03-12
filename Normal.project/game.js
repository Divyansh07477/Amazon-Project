let userScore = 0;
let computerscore = 0;

let choices = document.querySelectorAll(".choices");
let msg = document.querySelector("#msg");

let userscorepara = document.querySelector("#user-score");
let computerscorepara = document.querySelector("#computer-score");

let gencompchoices = () => {
    let options = ["rock", "paper", "scissor"];
    let randIdx = Math.floor(Math.random()* 3);
    return options[randIdx];
};

let drawgame = () => {
    msg.innerText = "Game was draw. Play again";
    msg.style.backgroundColor = "black";
};

let showWinner = (userWin, userchoice, compchoice) => {
    if (userWin) {
        userScore++;
        userscorepara.innerText = userScore;
        msg.innerText = `You win! ${userchoice} beats ${compchoice}`;
        msg.style.backgroundColor = "green";
    } else {
        computerscore++;
        computerscorepara.innerText = computerscore;
        msg.innerText = `You lose! ${compchoice} beats ${userchoice}`;
        msg.style.backgroundColor = "red";
    }
};

let playgame = (userchoices) => {
    let compchoices = gencompchoices();

    if (userchoices === compchoices) {
        drawgame();
    } else {
        let userwin = true;

        if (userchoices === "rock") {
            userwin = compchoices === "paper" ? false : true;
        } else if (userchoices === "paper") {
            userwin = compchoices === "scissors" ? false : true;
        } else {
            userwin = compchoices === "rock" ? false : true;
        }

        showWinner(userwin, userchoices, compchoices);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        let userchoices = choice.getAttribute("id");
        playgame(userchoices);
    });
});


