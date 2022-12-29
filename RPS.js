class Game{
    constructor(){
        this.gameStatus="active";
        //initialize game scores at the start of a new game
        this.playerScore=0;
        this.comScore=0;

        //initialize choice options
        this.options=["rock","paper","scissors"];
        //set choices to null
        this.playerChoice=null;
        this.comChoice=null;
        
    }
    
    //determine computer selection
    getComChoice(){
        let choice= Math.floor(Math.random()*3);
        return this.options[choice];
    }

    //determine round winner
    winnerIs(com, player){
        if(com==null||player==null){
            return "invalid";
        }
        else if(com==player){
            return "draw";
        }
        else{
            if(com=="rock" && player=="paper"){
                return "player"
            }
            else if(com=="rock" && player=="scissors"){
                return "computer"
            }
            else if(com=="paper" && player=="rock"){
                return "computer"
            }
            else if(com=="paper" && player=="scissors"){
                return "player"
            }
            else if(com=="scissors" && player=="rock"){
                return "player"
            }
            else if(com=="scissors" && player=="paper"){
                return "computer"
            }
        }


    }

    //play round
    playRound(playerChoice){
        if(this.gameStatus!="over"){
            console.log("player choice:",playerChoice);
            let comChoice=this.getComChoice();
            console.log("computer choice:",comChoice)
            let winner=this.winnerIs(comChoice,playerChoice);
            if(winner!=null&&winner!="draw"){
                document.getElementById("roundWinner").innerText="Round winner is "+winner;
                console.log("round winner is: ",winner);
                this.updateGame(winner);
            }
            else{
                console.log("round is a draw");
                document.getElementById("roundWinner").innerText="Draw!";
            }
        }
        else{
            console.log("Press new game to play again");
        }
    }

    updateGame(winner){
            //update individuals scores
            if(winner=="computer"){this.comScore++}
            else if(winner=="player"){this.playerScore++}

            //if com or player scores 3 points, end game
            if(this.playerScore==3||this.comScore==3){this.gameover(winner)}
    }

    //change games status when game is complete
    gameover(){
        this.gameStatus="over";
    }

    //prints function outputs to console for testing
    tests(){
        //test get com choice
        console.log("getComChoice() returns:",this.getComChoice())


        //test winner
        console.log("winnerIs(null, rock) returns:", this.winnerIs(null,"rock"));
        console.log("winnerIs(com==player) rerturns:", this.winnerIs("rock","rock"));
        console.log("winnerIs(rock, paper) returns:",this.winnerIs("rock","paper"));

        //test play round
        console.log("playround() returns:", this.playRound());
    }


}



var currentGame;
function newGame(){
    currentGame=new Game();
}

document.onload=init();
function init(){
    newGame();
}