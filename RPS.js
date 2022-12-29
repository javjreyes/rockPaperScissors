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
            console.log(com, player);
            return "invalid";
        }
        else if(com===player){
            return "draw";
        }
        //Fix Me
        else{
            switch(inputs){
                case ["rock","paper"]:
                    return "player";
                case ["rock","scissors"]:
                    return "com";
                case ["paper","rock"]:
                    return "com";
                case ["paper","scissors"]:
                    return "player";
                case["scissors","rock"]:
                    return "player";
                case["scissors","paper"]:
                    return "com";
            }
        }


    }

    //play round
    playRound(){
        let comChoice=this.getComChoice();
        console.log(comChoice);
        let playerChoice="rock";
        let winner=this.winnerIs(comChoice,playerChoice);
        console.log("Winner is",winner);
        return winner;
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

function init(){
    let game=new Game();
    game.playRound();
    //game.tests();
}
//call init for testing
init();