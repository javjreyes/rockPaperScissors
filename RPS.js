class Game{
    constructor(){
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
        let inputs=[com,player];
        if(com==null||player==null){
            return "invalid";
        }
        else if(com===player){
            return "draw";
        }
        else{
            if(com=="rock" && player=="paper"){
                return "player"
            }
            else if(com=="rock" && player=="scissors"){
                return "com"
            }
            else if(com=="paper" && player=="rock"){
                return "com"
            }
            else if(com=="paper" && player=="scissors"){
                return "player"
            }
            else if(com=="scissors" && player=="rock"){
                return "player"
            }
            else if(com=="scissors" && player=="paper"){
                return "com"
            }
        }


    }

    //play round
    playRound(){
        let comChoice=this.getComChoice();
        let playerChoice="rock";
        let winner=this.winnerIs(comChoice,playerChoice);
        console.log("Winner is",winner);
        return winner;
    }

    //play game of 5 rounds
    playGame(){
        console.log("Let's play a Rock, Paper, Scissors! Best 3 out of 5");
        let overallWinner;
        let com=0; let player=0;
        while(com<3 && player<3){
            let winner=this.playRound();
            if(winner=="com"){com++}
            else if(winner=="player"){player++}
        }

        if(com<player){overallWinner="player"}
        else{overallWinner="computer"}
        console.log("Overall winner is the "+overallWinner+".");

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

//document.onload=init;

var currentGame;
function newGame(){
    currentGame=new Game();
}

function init(){
    let game=new Game();
    game.playGame();
    //game.tests();
}
//call init for testing
init();