var canvas, backgroundImage;
var allPlayers;
var gameState = 0;
var contestantCount;
var allContestants;
var answer;
var database;

var question, contestant, quiz;


function setup(){
  canvas = createCanvas(850,400);
  database = firebase.database();
  quiz = new Quiz();
allPlayers=database.ref('contestantCount')
allPlayers.on("value",Player)
  quiz.getState();
  quiz.start();
}


function draw(){

  background("pink");
  if(contestantCount === 2){
    quiz.update(1);
  }
  if(gameState === 1){
    clear();
    quiz.play();
  }
updatePlayerCount(Player)

  database.ref('/').update({
contestantCount:Player

  })

function Player(data){
Player=data.val();
updatePlayerCount(Player)

}
function addPlayers(){
  Player=0
  Player++;
  database.ref('/').update({
    contestantCount:Player
  })
}
}
