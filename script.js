let userScore = 0;
let computerScore = 0;

const boxes = document.querySelectorAll(".box")
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#computer-score");

// 3 generate computer choice
const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randomIdx = Math.floor(Math.random() * 3);
    return options[randomIdx];
};

// 4 for draw game
const drawGame = () => {
    msg.innerText = "It's a Draw.";
    msg.style.backgroundColor = "rgb(27, 27, 77)";
};

// 6 to show winnwr
const showWinner = (userWin, userchoice, compChoice) => {
    if (userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `Congrats🥳 You Win! Your ${userchoice} Beats ${compChoice}`;
        msg.style.backgroundColor = "green";
        if (userScore === goal) {
            alert("Congrats🥳 Your Goal is Completed Game will Restart");
            userScorePara.innerText = 0;
            compScorePara.innerText = 0;
            userScore = 0;
            compScore = 0;
            msg.innerText = "Play Your Move";
        }
    } else {
        computerScore++;
        compScorePara.innerText = computerScore;
        msg.innerText = `Oops🙊 You Lost ${compChoice} Beats Your ${userchoice}`;
        msg.style.backgroundColor = "red";
        if (computerScore === goal) {
            alert("The Computer Reached the Goal Befour You and You lost The Game and Game will Restart");
            userScorePara.innerText = 0;
            compScorePara.innerText = 0;
            userScore = 0;
            compScore = 0;
            msg.innerText = "Play Your Move";


        }
    }
};
let goal = 10;
const goalBtn = document.getElementById("goal-btn");
const goalinput = document.getElementById("goal");
const gameTargetElement = document.getElementById('game-target-element');
// set default value for goal input
goalinput.value = 10;
gameTargetElement.innerText = goal;

// update goal when user click on set goal button
goalBtn.addEventListener("click", () => {
    goal = Number(goalinput.value);
    gameTargetElement.innerText = Number(goalinput.value);
});


// 2 generate user choice
const playGame = (userchoice) => {
    // generate computer choice
    const compChoice = genCompChoice();

    //5 check Winner
    if (userchoice === compChoice) {
        //Game Draw
        drawGame();
    } else {
        let userWin = true;
        if (userchoice === "rock") {
            // paper,scissors
            userWin = compChoice === "paper" ? false : true;
        } else if (userchoice === "paper") {
            // rock scissors
            userWin = compChoice === "scissors" ? false : true;
        } else if (userchoice === "scissors") {
            //paper,rock
            userWin = compChoice === "rock" ? false : true;
        }

        showWinner(userWin, userchoice, compChoice);

    }
};

// Start With Modular Way
//1 start game and add click function 
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        const userchoice = box.getAttribute("id");
        playGame(userchoice)
    })
})