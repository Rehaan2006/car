class Game {
  constructor(){}
  
  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })
   
  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){


      player = new Player();
      var playerCountref=await database.ref("playerCount").once("value");
      if(playerCountref.exits()){
        playerCount=playerCountref.val();
        player.getCount();
      }
       form = new Form()
      form.display();
    }
  }

  play(){
form.hide();
text("Start the Game",120,100);
Player.getPlayerInfo();

if(allPlayers!==undefined){
  var display_position=130;

  for(var plr in allPlayers){
    if(plr==="player"+playerindex)
      fill("yellow");
      else
        fill("green")
      
    
  }
  display_position=display_position+20;
  text(allPlayers[plr].name+ ":" +allPlayers[plr].distance,120,display_position);

}
  }

  if(keyIsDown(UP_ARROW) && player.index!==null){
    player.distance=player.distance+50;
    player.update();
  }
}


