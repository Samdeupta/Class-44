class Game{
    constructor(){

    }

    getState(){
        var gameStateRef = database.ref("gameState");
        gameStateRef.on("value",function(data){
            gameState = data.val();
        });
    }

    update(state){
        database.ref("/").update({
            gameState: state
        })
    }

    async start(){
        if(gameState === 0){
            player = new Player();
            var playerCountRef = await database.ref("playerCount").once("value");

            if(playerCountRef.exists()){
                playerCount = playerCountRef.val();
                player.getCount();
            }

            form = new Form();
            form.display();
        }

        car1 = createSprite(100,500,20,40);
        car1.addImage(car1Img);

        car2 = createSprite(200,500,20,40);
        car2.addImage(car2Img);

        car3 = createSprite(300,500,20,40);
        car3.addImage(car3Img);

        car4 = createSprite(400,500,20,40);
        car4.addImage(car4Img);

        cars = [car1,car2,car3,car4];
    }

    play(){
        form.hide();
        textSize(30);
        text("GAME START!",120,100);
        Player.getPlayerInfo();
        if(allPlayers !== undefined){
            var index = 0;
            var x = 0;
            var y;
            for(var plr in allPlayers){
                index = index + 1;
                x = x + 100;
                y = displayHeight - allPlayers[plr].distance;
                cars[index - 1].x = x;
                cars[index - 1].y = y;

                if(index === player.index){
                    cars[index - 1].shapeColor = "red";
                    camera.position.x = displayWidth/2;
                    camera.position.y = cars[index - 1].y;
                }
            }
        }

        if(keyIsDown(UP_ARROW) && player.index !== null){
            player.distance += 50;
            player.update();
        }

        drawSprites();
    }
}