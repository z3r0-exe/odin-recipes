
function playRound(playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    
    const result =  {
        rock:{ beats: "scissors"},
        scissors:{ beats: "paper"},
        paper:{ beats: "rock"}

    };
    if (playerSelection === computerSelection){
        return "It's a tie!";
    }
    if (result[playerSelection].beats === computerSelection){
        return "You win! " + playerSelection + " beats " + computerSelection + ".";
    }
    else {
        return "You lose! " + computerSelection + " beats " + playerSelection + ".";
    }
}
    function getComputerChoice(){
        const randomNumber = Math.floor(Math.random()* 3);
        switch (randomNumber){
            case 0:
                return "rock";
            case 1:
                return "scissors";
            case 2:
                return "paper";        
        }
    }

    function playGame(){
    const playerSelection = document.getElementById("playerChoice").value;
    const computerSelection = getComputerChoice();
    const result = playRound(playerSelection, computerSelection);
    document.getElementById("result").textContent = result;
}

console.log("Hello world!");