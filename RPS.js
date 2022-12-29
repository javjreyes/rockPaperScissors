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
    
    getComChoice(){
        let choice= Math.floor(Math.random()*3);
        return this.options[choice];
    }
    
    playRound(){
        
    }

    tests(){
        console.log("getComChoice returns:",this.getComChoice())
    }

}


//document.onload=init;

function init(){
    let game=new Game();
    game.tests();
}
//call init for testing
init();