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
    winner(com, player){
        let inputs=[com,player];
        if(com==null||player==null){
            return "invalid";
        }
        else if(com===player){
            return "draw";
        }
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

    }

    //prints function outputs to console for testing
    tests(){
        //test get com choice
        console.log("getComChoice returns:",this.getComChoice())

        //test winner
        console.log("winner(null, rock) returns", this.winner(null,"rock"));
        console.log("winner(com==player) rerturns", this.winner("rock","rock"));
        console.log("winner(rock, paper) returns:",this.winner("rock","paper"));
    }

}


//document.onload=init;

function init(){
    let game=new Game();
    game.tests();
}
//call init for testing
init();