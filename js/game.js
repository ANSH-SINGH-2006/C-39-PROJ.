class Game{
    constructor(){


    }

    getState(){
        var gameStateRef= database.ref('gameState');
        gameStateRef.on("value",(data)=>{
            gameState=data.val();
        })
        


    }

    update(state){

        database.ref('/').update({
            gameState:state

        })

    }

    async start(){
        if(gameState===0){
            player=new Player();
            var playerCountRef=await database.ref('playerCount').once("value");

            if(playerCountRef.exists()){

                playerCount=playerCountRef.val();
                player.getCount();
            }
            
            form=new Form();
            form.display();
        }
        car1 = createSprite(10,300);
      car1.addImage("car1",car1_img);
      car1.scale = 0.35;
      car2 = createSprite(10,500);
      car2.addImage("car2",car2_img);
      car2.scale = 0.35;
      car3 = createSprite(10,700);
      car3.addImage("car3",car3_img);
      car3.scale = 0.35;
      car4 = createSprite(10,900);
      car4.addImage("car4",car4_img);
      car4.scale = 0.35;
      cars = [car1, car2, car3, car4];

        //cars=[car1,car2,car3,car4];
    }
    play(){
        
        form.hide();
        textSize(30);
        text("GAME START",120,100);
        Player.getPlayerInfo();

        if(allPlayers!==undefined){
            var display_position=130;
            //background("#c68767");
            image(track,0,150,displayWidth*4, displayHeight+60);

            for(var plr in allPlayers){

                if(plr==="player"+player.index)
                fill("red");
                else
                fill("black");

                display_position+=30;
                textSize(15);
                text(allPlayers[plr].name+" : "+allPlayers[plr].distance,120,display_position)

               
            }
            
        }

        drawSprites();
        
    }
}